import { formatNumberToString } from './numberHelper';

export const formatDate = date => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = formatNumberToString(dateObj.getMonth() + 1);
  const day = formatNumberToString(dateObj.getDate());
  return `${day}.${month}.${year}`;
};
