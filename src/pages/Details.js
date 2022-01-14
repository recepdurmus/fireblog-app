import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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
import img from "../assets/photo.jpg";

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

const Details = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Box sx={{margin:'50px auto', textAlign:'center'}}>
      <Typography variant="h3" component="div" gutterBottom>
        Heading
      </Typography>
      </Box>
      <Card sx={{ maxWidth: 1200, margin: "50px auto" }}>
        <CardMedia
          component="img"
          height="400"
          width="350"
          image={img}
          alt={null}
        />
        <CardContent
          sx={{
            textAlign: "center",
            padding: 0,
            maxWidth: "1200px",
          }}
        >
          <CardContent
            sx={{
              backgroundColor: "silver",
            }}
          >
            <Typography variant="h5" component="div">
              HEADER
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              10.01.2022
            </Typography>
            <Box
            // component="div"
            // sx={{
            //   textOverflow: "ellipsis",
            //   overflow: "hidden",
            // }}
            >
              Text Overflow Ellipsis. Text Overflow Ellipsis sşdfsdfsd Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tempora atque
              voluptatum expedita voluptatibus harum, ducimus iste eaque est
              saepe delectus qui, magni odit. Harum voluptatibus vero iste nisi,
              totam provident modi enim voluptas in quaerat culpa, optio vitae.
              Architecto, in.
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
    </div>
  );
};

export default Details;
