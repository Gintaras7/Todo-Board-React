const useLocalStorage = (storageKey: string) => {
  const load = (): unknown[] => {
    const storageContent: string | null = localStorage.getItem(storageKey);

    return storageContent === null ? [] : JSON.parse(storageContent);
  };

  const saveStorage = (array: unknown[]): void => {
    return localStorage.setItem(storageKey, JSON.stringify(array));
  };

  return {
    load,
    saveStorage,
  };
};

export default useLocalStorage;
