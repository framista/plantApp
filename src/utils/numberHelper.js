export const formatNumberToString = number =>
  number < 10 ? `0${number}` : String(number);
