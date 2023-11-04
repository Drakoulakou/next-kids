export function formatDate(dateString) {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns a 0-based index
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}
