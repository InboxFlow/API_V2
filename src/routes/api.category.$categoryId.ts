import {
  globalErrorHandler,
  NoContent,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { deleteCategory } from "~/app/usecases/category/deleteCategory";
import { listCategoryById } from "~/app/usecases/category/listCategoryById";
import { updateCategory } from "~/app/usecases/category/updateCategory";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listCategoryById.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        await deleteCategory.handle(args);
        return new NoContent().json();
      case "PATCH":
        return new Success(await updateCategory.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
