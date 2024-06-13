export interface IProduct {
  id: number | string;
  name: string;
  thumbnail: string;
  images: IImageProduct[];
  mainBoard: string;
  cpu: string;
  ram: string;
  vga?: string;
  hdd?: string;
  ssd?: string;
  psu: string;
  case: string;
  cooling?: string;
  price: number;
  originPrice: number;
}

export interface IImageProduct {
  id: number | string;
  path?: string;
  thumbnail?: string;
}
