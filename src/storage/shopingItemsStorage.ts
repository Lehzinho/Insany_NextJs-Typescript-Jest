import { CartItemProps } from "@/model/cartItem";
import { Shoping_cart } from "./storageConfig";

export const storeShopingItems = (items: CartItemProps[]) => {
  try {
    // Converte o array para JSON string
    const itemsJson = JSON.stringify(items);
    localStorage.setItem(Shoping_cart, itemsJson);
  } catch (error) {
    console.log("<authStorage - 1>", error);
    throw error;
  }
};

export const getShopingItems = (): CartItemProps[] => {
  try {
    const storage = localStorage.getItem(Shoping_cart);

    // Se não houver dados, retorna array vazio
    if (!storage) {
      return [];
    }

    // Converte a JSON string de volta para array
    const items: CartItemProps[] = JSON.parse(storage);
    return items;
  } catch (error) {
    console.log("<authStorage - 2>", error);
    // Em caso de erro, retorna array vazio
    return [];
  }
};

export const deleteShopingItems = () => {
  try {
    localStorage.removeItem(Shoping_cart);
  } catch (error) {
    console.log("<authStorage - 3>", error);
    throw error;
  }
};
