import { useParams } from "react-router-dom";
import articles from "./article-content.js";
import NotFoundPage from "./NotFoundPage.js";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export default ArticlePage;
