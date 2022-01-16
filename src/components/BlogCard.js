import React, { useContext  } from "react";
import { styled } from "@mui/material/styles";
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
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const BlogCard = ({card}) => {
  const {content, title, imgUrl, email} = card
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const detailsfunc = (e) => {
    console.log(e.target)
    navigate('/details')
  }


  return (
    <Card sx={{margin:'1rem', cursor: "pointer", maxWidth: 345,
      ':hover': {
        boxShadow: 20
      }
    }}
    onClick={(e) => (currentUser)? detailsfunc(e.target) : navigate('/login')}
    >
      <CardMedia
        component="img"
        height="280"
        width="350"
        image={imgUrl}
        alt={imgUrl}
        sx={{ cursor: "pointer"}}
      />
      <CardContent sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}>
        <CardContent
          sx={{':hover': {
      boxShadow: 20
    }, cursor: "pointer", backgroundColor: "silver" }}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
          </Typography>
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
            variant="h5"
            component="h2"
          >
            <AccountCircle sx={{ marginRight: "0.5rem" }} /> 
            {email}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
