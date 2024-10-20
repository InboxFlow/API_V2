function getDateTimeFromDate(baseDate: string) {
  const time = baseDate.substring(11, 16);
  const date = new Date(baseDate).toLocaleDateString("pt-br");

  return { date, time };
}

export { getDateTimeFromDate };
