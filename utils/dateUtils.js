export const formatDateToSeoul = (dateString) => {
  const date = new Date(dateString);
  const seoulOffset = 9 * 60; // 서울은 UTC+9
  const localOffset = date.getTimezoneOffset();
  const utcTimestamp = date.getTime() + localOffset * 60 * 1000;
  const seoulTimestamp = utcTimestamp + seoulOffset * 60 * 1000;
  const seoulDate = new Date(seoulTimestamp);

  const year = seoulDate.getFullYear();
  const month = String(seoulDate.getMonth() + 1).padStart(2, '0');
  const day = String(seoulDate.getDate()).padStart(2, '0');
  const hours = String(seoulDate.getHours()).padStart(2, '0');
  const minutes = String(seoulDate.getMinutes()).padStart(2, '0');
  const seconds = String(seoulDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const formatDateToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
