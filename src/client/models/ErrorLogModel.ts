import { ErrorLog } from "~/app/entities";

type ErrorLogModel = ReturnType<ErrorLog["toJson"]>;

export type { ErrorLogModel };
