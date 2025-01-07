function isInternalRequest(body: any): boolean {
  const source = body?.source;
  return source === "remix-form";
}

export { isInternalRequest };
