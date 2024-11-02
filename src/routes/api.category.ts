import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { createCategory } from "~/app/usecases/category/createCategory";
import { listCategories } from "~/app/usecases/category/listCategories";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listCategories.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return await createCategory.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
