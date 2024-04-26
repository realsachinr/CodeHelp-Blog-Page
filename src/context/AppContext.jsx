import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const value = {
    loading,
    setLoading,
    posts,
    setposts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // Fetch API data to providence to the app
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setposts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log("Error in fetching data");
      setPage(1);
      setposts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
