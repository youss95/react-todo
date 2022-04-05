import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const sampleArticle = {
  title: "title",
  description: "ss",
  url: "www.naver.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e6b50f54ec22440ca7fa32bb746ad6e7`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <>대기 중...</>;
  }
  if (!articles) {
    return null;
  }
  return (
    <>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </>
  );
};

export default NewsList;
