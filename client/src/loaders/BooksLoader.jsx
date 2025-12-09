import axios from 'axios';

export const booksLoader = async () => {
    const response = await axios.get('http://localhost:3000/api/books');
    return response.data;
}

export const bookByIdLoader = async ({ params }) => {
    const response = await axios.get(`http://localhost:3000/api/books/${params.id}`);
    return response.data;
}