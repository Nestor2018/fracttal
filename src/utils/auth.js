import { SHA256 } from 'crypto-js';

export const sha256 = (input) => {
  return SHA256(input).toString();
};
