import { createContext, useReducer, useCallback } from "react";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

function newsReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, news: [], isLoading: true, error: null };
    case "SUCCESS":
      return { ...state, isLoading: false, news: action.payload };
    case "ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export const NewsContext = createContext({
  newsState: initialState,
  fetchNews: () => {},
});

export function NewsProvider({ children }) {
  const [newsState, dispatch] = useReducer(newsReducer, initialState);

  async function fetchNews(callStatus, query) {
    let api_url = `https://newsapi.org/v2/${callStatus}`;
    const key = import.meta.env.VITE_NEWS_API_KEY;

    if (callStatus === "top-headlines") {
      const country = "us";
      api_url += `?country=${country}&apiKey=${key}`;
    } else if (callStatus === "everything") {
      api_url += `?q=${query}&sortBy=publishedAt&pageSize=10&apiKey=${key}`;
    }

    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(api_url);
      const data = await response.json();
      dispatch({ type: "SUCCESS", payload: data.articles || [] });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  }

  const value = { newsState, fetchNews };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
