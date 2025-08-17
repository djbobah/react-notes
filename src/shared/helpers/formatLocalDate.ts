export const formatLocalDate = (date: Date) => {
  const inputDate = new Date(date).getTime();

  const currentDate = new Date().getTime();
  const timeDifference = currentDate - inputDate;

  const hoursDifference = timeDifference / (1000 * 60 * 60);

  if (hoursDifference < 24) {
    return new Intl.DateTimeFormat("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } else
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
};
