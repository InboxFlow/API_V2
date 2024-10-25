import { BadRequestError } from "@arkyn/server";

class Number {
  constructor() {}

  stringToNumber(value: string): number {
    if (value.trim() === "") {
      throw new BadRequestError("Value cannot be empty");
    }

    if (!/^\d+$/.test(value)) {
      throw new BadRequestError("Value must contain only numbers");
    }

    return +value;
  }
}

export { Number };
