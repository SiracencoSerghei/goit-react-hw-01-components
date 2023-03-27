export default function getRandomColor() {
  let color = '';
  while (color === '' || color === '#000000' || color === '#FFFFFF') {
    // Generate a random number between 0 and 255 for each RGB component
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert the RGB components to a hexadecimal string
    color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  }

  return color;
}
