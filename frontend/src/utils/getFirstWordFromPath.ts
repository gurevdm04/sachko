const getFirstWordFromPath = (path: string): string => {
  // Удаляем слэш в начале пути, если он есть, и разбиваем строку по "/"
  const segments = path.replace(/^\//, "").split("/");

  // Возвращаем первое слово, которое будет первым сегментом URL
  return segments[0];
};

export default getFirstWordFromPath;
