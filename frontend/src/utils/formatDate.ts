export default function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Получаем часы и минуты
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Получаем день, месяц и год
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Месяцы начинаются с 0, поэтому прибавляем 1
  const year = date.getUTCFullYear() % 100; // Берем последние две цифры года

  // Форматируем строку в виде "H:MM D/M/YY"
  return `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${day}/${month}/${year}`;
}
