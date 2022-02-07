import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const BlogCard = ({ card }) => {
  const { content, title, imgUrl, email, id } = card;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const detailsfunc = (e) => {
    if(currentUser){
      navigate(`/details/${id}`)
    }else{
      alert("Please login for details of blog")
      navigate("/login")
    }
    ;
  };

  const favIcon = (e) => {
    console.log("fav");
  };

  return (
    <Card
      sx={{
        margin: "1rem",
        cursor: "pointer",
        maxWidth: 345,
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        width="350"
        image={imgUrl}
        alt={imgUrl}
        sx={{ cursor: "pointer" }}
        onClick={(e) => detailsfunc(e.target)}
      />
      <CardContent
        sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}
        onClick={(e) => detailsfunc(e.target)
        }
      >
        <CardContent
          sx={{
            ":hover": {
              boxShadow: 20,
            },
            cursor: "pointer",
            backgroundColor: "silver",
          }}
        >
          <Typography variant="h5" component="div">
            <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {title}
          </Box>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {content}
          </Box>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="h6"
            component="h6"
          >
            <AccountCircle sx={{ marginRight: "0.5rem" }} />
            <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {email}
          </Box>
            
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={(e) => (currentUser ? favIcon(e.target) : null)}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
          <Typography sx={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
            0
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
          <Typography sx={{ marginLeft: "0.4rem" }}>0</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
