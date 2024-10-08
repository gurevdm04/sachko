function removeDomain(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // Убираем домен и возвращаем путь с параметрами
    return url.replace(parsedUrl.origin, "");
  } catch (error) {
    console.error("Invalid URL", error);
    return url;
  }
}

export default removeDomain;
