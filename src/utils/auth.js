import { SHA256 } from "crypto-js";

export const sha256 = input => {
  return SHA256(input).toString();
};

export const hour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hour}:${minutes}:${seconds}`;
};
