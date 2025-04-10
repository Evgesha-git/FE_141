export const getImage = (x?: number, y?: number, color?: string) => {
  if (!x && !y && !color) {
    return 'https://placehold.co/600x400'
  } else if (x) {
    return `https://placehold.co/${x}x${x}`
  } else if (x && y) {
    return `https://placehold.co/${x}x${y}`
  } else if (x && y && color) {
    return `https://placehold.co/${x}x${y}/${color}/FFFFFF`
  } else {
    return 'Не хватает параметров'
  }
}