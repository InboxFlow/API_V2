function formatJsonString(jsonString: string): string {
  try {
    const jsonObject = JSON.parse(jsonString);
    return formatJsonObject(jsonObject, 0);
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return "";
  }
}

function formatJsonObject(obj: any, indentLevel: number): string {
  const indent = "  ".repeat(indentLevel);
  let formattedString = "";

  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      formattedString += "[\n";
      obj.forEach((item, index) => {
        formattedString +=
          indent + "  " + formatJsonObject(item, indentLevel + 1);
        if (index < obj.length - 1) {
          formattedString += ",";
        }
        formattedString += "\n";
      });
      formattedString += indent + "]";
    } else {
      formattedString += "{\n";
      const keys = Object.keys(obj);
      keys.forEach((key, index) => {
        formattedString +=
          indent +
          '  "' +
          key +
          '": ' +
          formatJsonObject(obj[key], indentLevel + 1);
        if (index < keys.length - 1) {
          formattedString += ",";
        }
        formattedString += "\n";
      });
      formattedString += indent + "}";
    }
  } else if (typeof obj === "string") {
    // Verifica se a string é um JSON válido
    try {
      const parsedObj = JSON.parse(obj);
      formattedString += formatJsonObject(parsedObj, indentLevel);
    } catch {
      formattedString += '"' + obj + '"';
    }
  } else {
    formattedString += obj;
  }

  return formattedString;
}

export { formatJsonString };
