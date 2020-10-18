import { parseISO, format, formatRelative } from "date-fns";

import pt from "date-fns/locale/pt-BR";

const regexString = new RegExp("[a-z]");

const formatDate = (date, isMonthExtensive) => {
  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear() === date.getFullYear() ? "" : "yyyy";
  if (isMonthExtensive) {
    return format(date, `dd MMM ${year}`, { locale: pt });
  }
  return format(date, `yyyy'-'MM'-'dd`, { locale: pt });
};

const showFormat = (date) => {
  const newDate = new Date(date[2], date[1], date[0]);
  return formatDate(newDate, true);
};

const mountDate = (day, month, year) => {
  const date = new Date(year, month, day);
  return formatDate(date, false);
};

const relativeDate = (dateFormat) => {
  const dateCurrent = new Date();

  const formattedDate = parseISO(dateFormat);

  const formattedDateCurrent = parseISO(formatDate(dateCurrent, false));

  const relative = formatRelative(formattedDate, formattedDateCurrent, {
    locale: pt,
  });

  const relativeSplit = relative.split("/");

  if (regexString.test(relativeSplit[0])) {
    return relative.split(" ")[0] === "última" ||
      relative.split(" ")[0] === "último"
      ? relative.split(" ")[1]
      : relative.split(" ")[0];
  }
  return showFormat(relativeSplit);
};

const dateCurrent = () => {
  const date = new Date();
  const formatCurrent = formatDate(date, false);
  return relativeDate(formatCurrent);
};

export default { dateCurrent, showFormat, relativeDate, mountDate };
