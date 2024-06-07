export const toYYYYMMDDHHMMSS = (dateString) => {
  const _date = new Date(dateString);
  const year = _date.getFullYear();
  const month = String(_date.getMonth() + 1).padStart(2, '0');
  const day = String(_date.getDate()).padStart(2, '0');
  const hours = String(_date.getHours()).padStart(2, '0');
  const minutes = String(_date.getMinutes()).padStart(2, '0');
  const seconds = String(_date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const toYYYYMMDD = (date) => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  const month = String(_date.getMonth() + 1).padStart(2, '0');
  const day = String(_date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
