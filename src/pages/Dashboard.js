import React, { useContext, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../context/BlogContextProvider";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Dashboard = () => {
  const { cardList, getBlogs, isLoading } = useContext(BlogContext);

  useEffect(() => {
    getBlogs();
  }, []);
  console.log(cardList);
  
  return (
    <div>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "3rem",
          }}
        >
          {cardList?.map((card) => (
            <BlogCard key={card.id} card={{ ...card }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
