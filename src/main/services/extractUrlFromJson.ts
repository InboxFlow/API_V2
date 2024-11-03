function extractUrlFromJson(requestString: string): string {
  try {
    const requestObject = JSON.parse(requestString);
    return requestObject.url || "--";
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return "--";
  }
}

export { extractUrlFromJson };
