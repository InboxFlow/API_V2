import { Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallsSchema } from "~/infra/schemas/callSchemas";

interface PeakInfo {
  date: string;
  hour: string;
  quantity: number;
}

class GetPeakDayReportUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const calls = await this.callRepository.findAllWithoutPagination(channelId);

    const callsPerDayHour = calls.reduce<Record<string, number>>(
      (acc, call) => {
        const date = new Date(call.createdAt);

        if (process.env.NODE_ENV === "production") {
          date.setHours(date.getHours() - 3);
        }

        const key = `${date.toLocaleDateString("pt-BR")}-${date.getHours()}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      },
      {}
    );

    const biggestPeak = Object.entries(callsPerDayHour).reduce<PeakInfo>(
      (maior, [key, quantity]) => {
        if (quantity > maior.quantity) {
          const [dataStr, horaStr] = key.split("-");
          const [day, month, year] = dataStr.split("/");

          const dayName = new Date(
            Number(year),
            Number(month) - 1,
            Number(day),
            12
          );

          const dayOfWeek = dayName.toLocaleDateString("en-US", {
            weekday: "long",
          });

          return {
            date: `${day}/${month}/${year} - ${dayOfWeek}`,
            hour: Number(horaStr) + ":00 - " + (Number(horaStr) + 1) + ":00",
            quantity,
          };
        }
        return maior;
      },
      { date: "", hour: "00:00", quantity: 0 }
    );

    return biggestPeak;
  }
}

export { GetPeakDayReportUsecase };
