import { Call } from "~/app/entities";

type CallModel = ReturnType<Call["toJson"]>;

export type { CallModel };
