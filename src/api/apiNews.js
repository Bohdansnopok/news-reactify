var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export const getNews = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page_number = 1, page_size = 10, category, keywords } = params || {};
        const response = yield axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
        return { news: [], page: 1, status: "error" };
    }
});
export const getLatestNews = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
        return { news: [], page: 1, status: "error" };
    }
});
export const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Error fetching news:", error.response ? error.response.data : error.message);
        return { categories: [], description: '', status: "error" };
    }
});
