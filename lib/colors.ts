/* eslint-disable no-bitwise */
import random from 'lodash.random';

export function getRandomPairOfColors() {
  const colors = ['#37B679', '#DA3C3C', '#3291FF', '#7928CA', '#79FFE1'];
  const getRandomIdx = () => random(0, colors.length - 1);
  const idx = getRandomIdx();
  let idx2 = getRandomIdx();

  // Has to be different colors
  while (idx2 === idx) {
    idx2 = getRandomIdx();
  }

  // Return a pair of colors
  return [colors[idx], colors[idx2]];
}

function hexToRgb(hex: string = '') {
  //@ts-ignore
  const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return [0, 0, 0];
  }

  let colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString
      .split('')
      .map((char: string) => char + char)
      .join('');
  }

  const integer = parseInt(colorString, 16);
  const r = (integer >> 16) & 0xff;
  const g = (integer >> 8) & 0xff;
  const b = integer & 0xff;

  return [r, g, b];
}

export const colorMap: Record<string, string> = {
  // TODO: Get all the colors
  aliceblue: '#F0F8FF',
  antiquewhite: '#FAEBD7',
  aqua: '#00FFFF',
};
export function isDark(color: string = ''): boolean {
  // eslint-disable-next-line no-param-reassign
  color = color.toLowerCase();
  // Equation from http://24ways.ord/2010/calculating-color-contrast

  const rgb = colorMap[color] ? hexToRgb(colorMap[color]) : hexToRgb(colorMap[color]);
  const res = (rgb[0] * 299 + rgb[1] * 578 + rgb[2] * 114) / 1000;

  return res < 128;
}
