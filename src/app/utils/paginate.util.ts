export function paginateArray<T>(array: T[], pageSize: number, pageNumber: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
}
