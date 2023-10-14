export interface Boock {
    title: string;
    photo: string;
    author: string;
    year: number;
    gender: string;
    Quantity: number;
    codeISBN: string;
}

export const boocks = [
  {
    title: "To Kill a Mockingbird",
    photo: "https://images.cdn1.buscalibre.com/fit-in/360x360/64/1a/641a8a546dab494f2e0d4bf756de1879.jpg",
    author: "Harper Lee",
    year: 1960,
    gender: "Fiction",
    Quantity: 5,
    codeISBN: "978-0-06-112008-4",
  },
  {
    title: "1984",
    photo: "https://www.garabatolibros.com/imagenes/9788446/978844605265.JPG",
    author: "George Orwell",
    year: 1949,
    gender: "Science Fiction",
    Quantity: 3,
    codeISBN: "978-0-452-28423-4",
  },
  {
    title: "Pride and Prejudice",
    photo: "https://imagessl8.casadellibro.com/a/l/s5/38/9781398812338.webp",
    author: "Jane Austen",
    year: 1813,
    gender: "Romance",
    Quantity: 7,
    codeISBN: "978-1-85326-120-9",
  },
]