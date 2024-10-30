export interface Product{
    id: number
    category: Category,
    name: string,
    description: string,
    discount: number,
    price: number,
    quantity: number,
    image: string,
    colors: string[]
}

export interface Category {
  id: number
  categoryName: string
  name: string
}

export interface Bill{
    id: number,
    date: Date,
    total: number,
    products: Product[]
}

export interface Sale{
    id: number,
    product: Product,
    saleAmount: number,
    total: number,
    bill: Bill
}