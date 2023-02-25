export type ProductAllInfo = {
  id: number,
  name: string,
  colors: [
    {
      id: number,
      name: string,
      images: string[],
      price: string,
      description: string,
      sizes: number[]
    }
  ]
}

export type Product = {
  id: number,
  name: string,
  imgLink: string,
}
