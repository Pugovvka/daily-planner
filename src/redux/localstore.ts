export const loadLocalArray = <T>(stateName: string) => {
  const localArray: T[] = JSON.parse(localStorage.getItem(stateName) || "[]");

  return localArray;
};

export const loadLocalObject = <T>(stateName: string) => {
  const localArray: T = JSON.parse(localStorage.getItem(stateName) || "{}");

  return localArray;
};
