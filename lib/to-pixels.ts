//Convert numbers or string values to pixel
//Helpful for styled-jsx when using a prop

const toPixels = (value: string | number) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

export default toPixels;
