export default function BoardingPass(passData) {
  const [_, rowData, seatData] = passData.replace(/./g, (c) => (['B', 'R'].includes(c) ? 1 : 0)).match(/(.{7})(.{3})/);

  const row = parseInt(rowData, 2);
  const seat = parseInt(seatData, 2);

  const seatID = row * 8 + seat;

  this.row = row;
  this.seat = seat;
  this.seatID = seatID;
}