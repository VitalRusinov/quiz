function getRandomArray(n: number): number[] {
  // Создаем массив от 0 до n
  const array: number[] = Array.from({ length: n + 1 }, (_, i) => i);

  // Перемешиваем массив (Fisher-Yates)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default getRandomArray;