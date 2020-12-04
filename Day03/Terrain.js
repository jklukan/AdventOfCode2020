const X = 0;
const Y = 1;

export default function(map) {
  const mapped = map.split(/\n/g).map((row) => row.split('').map((char) => char === '#'));
  const size = [mapped[0].length, mapped.length];

  return {
    getAt(x, y) {
      return mapped[y]?.[x];
    },

    // h = horizontal movement (+ = right)
    // v = vertical movement (+ = down)
    getLine(x, y, h, v) {
      const line = [];
      let x1 = x;
      let y1 = y;
      while (x1 < size[X] && x1 >= 0 && y1 < size[Y] && y1 >= 0) {
        // console.log({ x1, y1, point: mapped[y1][x1] });
        line.push(mapped[y1][x1]);
        x1 = (x1 + h) % size[X];
        y1 += v;
      }

      return line;
    }
  }
}
