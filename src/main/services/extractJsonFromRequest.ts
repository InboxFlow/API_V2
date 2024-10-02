import { BadRequestError } from "@arkyn/server";

async function extractJsonFromRequest(req: Request): Promise<any> {
  try {
    return await req.json();
  } catch (error) {
    throw new BadRequestError("Invalid JSON");
  }
}

export { extractJsonFromRequest };
