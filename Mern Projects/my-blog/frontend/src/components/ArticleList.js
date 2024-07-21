import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.name}`}
        >
          <h1>{article.title}</h1>
          <p>{article.content.substring(0, 100)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
