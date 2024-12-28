export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  productType: string;
}

export interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  price: number;
  color: string;
  productType: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  productType: string;
}

export const SIZES:string[] = ['S','M','L','Xl','XXL']
