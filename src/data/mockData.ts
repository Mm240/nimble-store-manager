
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
  total: number;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "T-Shirt",
    description: "Cotton t-shirt with logo",
    price: 19.99,
    stock: 50,
    category: "Clothing",
    imageUrl: "https://placehold.co/200x200?text=T-Shirt"
  },
  {
    id: "2",
    name: "Coffee Mug",
    description: "Ceramic coffee mug",
    price: 12.99,
    stock: 30,
    category: "Home",
    imageUrl: "https://placehold.co/200x200?text=Coffee+Mug"
  },
  {
    id: "3",
    name: "Notebook",
    description: "Hardcover notebook with 200 pages",
    price: 9.99,
    stock: 100,
    category: "Office",
    imageUrl: "https://placehold.co/200x200?text=Notebook"
  },
  {
    id: "4",
    name: "Headphones",
    description: "Wireless headphones with noise cancellation",
    price: 99.99,
    stock: 15,
    category: "Electronics",
    imageUrl: "https://placehold.co/200x200?text=Headphones"
  },
  {
    id: "5",
    name: "Water Bottle",
    description: "Stainless steel water bottle",
    price: 24.99,
    stock: 40,
    category: "Home",
    imageUrl: "https://placehold.co/200x200?text=Water+Bottle"
  }
];

export const orders: Order[] = [
  {
    id: "1",
    customer: "John Doe",
    date: "2023-10-15",
    status: "completed",
    total: 32.98,
    items: [
      { productId: "1", quantity: 1, price: 19.99 },
      { productId: "2", quantity: 1, price: 12.99 }
    ]
  },
  {
    id: "2",
    customer: "Jane Smith",
    date: "2023-10-16",
    status: "pending",
    total: 99.99,
    items: [
      { productId: "4", quantity: 1, price: 99.99 }
    ]
  },
  {
    id: "3",
    customer: "Bob Johnson",
    date: "2023-10-14",
    status: "completed",
    total: 49.98,
    items: [
      { productId: "5", quantity: 2, price: 24.99 }
    ]
  },
  {
    id: "4",
    customer: "Alice Brown",
    date: "2023-10-17",
    status: "cancelled",
    total: 9.99,
    items: [
      { productId: "3", quantity: 1, price: 9.99 }
    ]
  }
];

export const dashboardStats = {
  totalSales: 192.95,
  totalOrders: 4,
  averageOrder: 48.24,
  lowStock: 1,
  pendingOrders: 1
};
