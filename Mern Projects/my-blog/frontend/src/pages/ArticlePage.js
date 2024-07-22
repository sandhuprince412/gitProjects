import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import articles from "./article-content.js";
import NotFoundPage from "./NotFoundPage.js";
import CommentsList from "../components/CommentsList.js";
import AddCommentForm from "../components/AddCommentForm.js";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, []);

  const addUpvote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        <button onClick={addUpvote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      <p>{article.content}</p>
      <AddCommentForm
        articleName={articleId}
        onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
      />
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
