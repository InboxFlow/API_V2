import { BadRequestError } from "@arkyn/server";
import { ContextType } from "../types";

async function extractJsonFromRequest(
  req: ContextType["request"]
): Promise<any> {
  try {
    return await req.json();
  } catch (error) {
    throw new BadRequestError("Invalid JSON");
  }
}

export { extractJsonFromRequest };
