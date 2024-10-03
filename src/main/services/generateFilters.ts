import { and, desc, eq, like, SQL } from "drizzle-orm";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";

type FilterType = "equal" | "include";

type GenerateFiltersReturn<T> = {
  limit: number;
  offset: number;
  where: SQL<T> | undefined;
  orderBy: SQL<T>;
};

function generateFilters<T extends SQLiteTableWithColumns<any>>(
  column: T,
  params: URLSearchParams,
  permittedFilters: { [K in keyof T]?: FilterType }
) {
  const conditions: SQL[] = [];

  const permittedFiltersKeys = Object.keys(permittedFilters);

  permittedFiltersKeys.forEach((filterKey) => {
    const filterValue = params.get(filterKey);
    if (!filterValue) return;

    const type = permittedFilters[filterKey];
    if (type === "equal") conditions.push(eq(column[filterKey], filterValue));
    if (type === "include")
      conditions.push(like(column[filterKey], `%${filterValue}%`));
  });

  const defaultOffset = Number(params.get("offset")) || 0;
  const defaultLimit = Number(params.get("limit")) || 0;

  const limit = defaultLimit ? +defaultLimit : 10;
  const offset = defaultOffset === 0 ? 0 : defaultOffset - 1;

  const where = and(...conditions);
  const orderBy = desc(column.createdAt);

  return { limit, offset, where, orderBy } as GenerateFiltersReturn<T>;
}

export { generateFilters, type GenerateFiltersReturn };
