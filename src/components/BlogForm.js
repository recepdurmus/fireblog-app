import AccountCircle from '@mui/icons-material/AccountCircle';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const BlogForm = ({cardDetail}) => {
    const { id, content, title, email, imgUrl } = cardDetail


  return (
    <div>
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
        // onClick={(e) => detailsfunc(e.target)}
      />
      <CardContent
        sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}
        // onClick={(e) => detailsfunc(e.target)}
        
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
        //   onClick={(e) => (currentUser ? favIcon(e.target) : null)}
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
    </div>
  )
};

export default BlogForm;
