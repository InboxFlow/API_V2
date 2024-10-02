function maskSensitiveData(jsonString: string): string {
  const sensitiveKeys = ["password", "creditCard"];

  function maskValue(key: string, value: any): any {
    if (sensitiveKeys.includes(key)) return "****";
    return value;
  }

  function recursiveMask(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => recursiveMask(item));
    } else if (obj !== null && typeof obj === "object") {
      return Object.keys(obj).reduce((acc, key) => {
        acc[key] = recursiveMask(maskValue(key, obj[key]));
        return acc;
      }, {} as any);
    }
    return obj;
  }

  try {
    const jsonObject = JSON.parse(jsonString);
    const maskedObject = recursiveMask(jsonObject);
    return JSON.stringify(maskedObject);
  } catch (error) {
    return jsonString;
  }
}

export { maskSensitiveData };
