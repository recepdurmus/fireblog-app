import React, { useState, useContext  } from "react";
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
import img from '../assets/photo.jpg'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BlogCard = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{cursor: "pointer", maxWidth: 345,
      ':hover': {
        boxShadow: 20
      }
    }}
    onClick={() => (currentUser)? navigate("/details") : navigate('/')}
    >
      <CardMedia
        component="img"
        height="140"
        width="350"
        image={img}
        alt={null}
        sx={{ cursor: "pointer"}}
      />
      <CardContent sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}>
        <CardContent
          sx={{':hover': {
      boxShadow: 20, // theme.shadows[20]
    }, cursor: "pointer", backgroundColor: "silver" }}
        >
          <Typography variant="h5" component="div">
            HEADER
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            10.01.2022
          </Typography>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Text Overflow Ellipsis. Text Overflow Ellipsis sşdfsdfsd
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
            <AccountCircle sx={{ marginRight: "0.5rem" }} /> email@email.com
            {null}
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
