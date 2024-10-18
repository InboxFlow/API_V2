function paginationFilter(searchParams: URLSearchParams) {
  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  return {
    page: page ? parseInt(page) : 1,
    perPage: perPage ? (parseInt(perPage) > 100 ? 100 : parseInt(perPage)) : 20,
  };
}

export { paginationFilter };
