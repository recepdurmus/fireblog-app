import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContextProvider";
import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const Details = () => {
  const { id } = useParams();
  const { cardList } = useContext(BlogContext);

  const [cardDetail] = cardList.filter((card) => card.id === id);

  return (
    <div>
      <BlogForm cardDetail={cardDetail} />
    </div>
  );
};

export default Details;
