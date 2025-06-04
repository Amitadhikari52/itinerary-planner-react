// Move array item from one index to another
export function arrayMove(array, from, to) {
  const newArray = [...array];
  const [moved] = newArray.splice(from, 1);
  newArray.splice(to, 0, moved);
  return newArray;
}
