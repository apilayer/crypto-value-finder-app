import React from "react";
import PropTypes from "prop-types";

// CSS styles for the card (you can adjust as per your design)
const styles = {
  card: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  source: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "10px",
  },
  date: {
    fontSize: "12px",
    color: "#777",
  },
  link: {
    fontSize: "14px",
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const NewsCard = ({ news }) => {
  const { title, description, source, published_at, url } = news;

  const formattedDate = new Date(published_at).toLocaleDateString();

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-md shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="text-gray-400 text-xs mb-2">Source: {source}</div>
      <div className="text-gray-400 text-xs mb-4">
        Published on: {formattedDate}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm font-medium"
      >
        Read more
      </a>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
