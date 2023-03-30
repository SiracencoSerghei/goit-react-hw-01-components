// function getRandomColor() {
//   let color = '';
//   while (color === '' || color === '#000000' || color === '#FFFFFF') {
//     // Generate a random number between 0 and 255 for each RGB component
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     // Convert the RGB components to a hexadecimal string
//     color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
//   }

//   return color;
// }


function getRandomColor() {
  // Generate a random hue between 0 and 360(0=360-red,120-green,240-blue)
  // const hue = Math.floor(Math.random() * (maxHue - minHue + 1)) + minHue;
  const hue = Math.floor(Math.random() * 361);
  // Set saturation to 50%
  const saturation = '50%';
  // Set lightness to a value between 20% and 60%
  const lightness = `${Math.floor(Math.random() * 41) + 20}%`;
  // Create the HSL color string
  const color = `hsl(${hue}, ${saturation}, ${lightness})`;
  // Return the color string
  return color;
}




export default getRandomColor;