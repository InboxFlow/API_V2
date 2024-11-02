import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { deleteCategory } from "~/app/usecases/category/deleteCategory";
import { listCategoryById } from "~/app/usecases/category/listCategoryById";
import { updateCategory } from "~/app/usecases/category/updateCategory";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listCategoryById.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        return await deleteCategory.handle(args);
      case "PATCH":
        return await updateCategory.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
