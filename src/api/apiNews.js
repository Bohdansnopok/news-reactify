import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

console.log('BASE_URL:', BASE_URL);
console.log('API_KEY:', API_KEY);

export const getNews = async ({page_number = 1, page_size = 10, category, keywords}) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
    }
};

export const getLatestNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,

            },
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,

            },
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
    }
};