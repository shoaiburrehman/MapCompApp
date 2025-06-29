import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SEARCH_HISTORY';

export const getSearchHistory = async () => {
  const history = await AsyncStorage.getItem(STORAGE_KEY);
  return history ? JSON.parse(history) : [];
};

export const addToSearchHistory = async (item: any) => {
  const history = await getSearchHistory();
  const filtered = history.filter((i: any) => i.place_id !== item.place_id);
  const updated = [item, ...filtered].slice(0, 7);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearSearchHistory = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};

export const removeItemFromSearchHistory = async (itemID: any) => {
  const history = await getSearchHistory();
  const index = history.findIndex((i: any) => i.place_id === itemID);
  if (index !== -1) {
    history.splice(index, 1);
  }
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

export const shiftToTopHistory = async (item: any) => {
  const history = await getSearchHistory();
  const updated = new Array(10);
  let index = 1;
  updated[0] = item;
  for (let i = 0; i < history.length && index < 10; i++) {
    const h = history[i];
    if (h.place_id && h.place_id.toString().trim() === item.place_id.toString().trim()) {
      continue;
    }
    updated[index] = h;
    index++;
  }

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, index)));
}