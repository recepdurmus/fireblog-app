import React from 'react'

const Details = () => {
  return (
    <div style={{textAlign:'center', marginTop:'5rem'}}>
      <h1>Sorry, not finished yet</h1>
    </div>
  )
}

export default Details











// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { Box } from "@mui/material";
// import { useFetch } from "../helpers/firebase";

// const Details = () => {
//   const { cardList } = useFetch();
//   const { imgUrl, title, content, email } = cardList;


//   return (
//     <div>
//       <Box sx={{ margin: "50px auto", textAlign: "center" }}>
//         <Typography variant="h3" component="div" gutterBottom>
//           Heading
//         </Typography>
//       </Box>
//       {result?.map((item, index) => (
//         <div key={index}>
//           <Card sx={{ maxWidth: 1200, margin: "50px auto" }}>
//             <CardMedia
//               component="img"
//               height="400"
//               width="350"
//               image={imgUrl}
//               alt={title}
//             />
//             <CardContent
//               sx={{
//                 textAlign: "center",
//                 padding: 0,
//                 maxWidth: "1200px",
//               }}
//             >
//               <CardContent
//                 sx={{
//                   backgroundColor: "silver",
//                 }}
//               >
//                 <Typography variant="h5" component="div">
//                   HEADER
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                   10.01.2022
//                 </Typography>
//                 <Box>
//                   Text Overflow Ellipsis. Text Overflow Ellipsis sşdfsdfsd Lorem
//                   ipsum dolor sit amet consectetur adipisicing elit. Tempora
//                   atque voluptatum expedita voluptatibus harum, ducimus iste
//                   eaque est saepe delectus qui, magni odit. Harum voluptatibus
//                   vero iste nisi, totam provident modi enim voluptas in quaerat
//                   culpa, optio vitae. Architecto, in.
//                 </Box>
//               </CardContent>
//               <CardContent>
//                 <Typography
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                   }}
//                   variant="h5"
//                   component="h2"
//                 >
//                   <AccountCircle sx={{ marginRight: "0.5rem" }} />{" "}
//                   email@email.com
//                   {null}
//                 </Typography>
//               </CardContent>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//                 <Typography
//                   sx={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}
//                 >
//                   0
//                 </Typography>
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ChatBubbleOutlineIcon />
//                 <Typography sx={{ marginLeft: "0.4rem" }}>0</Typography>
//               </IconButton>
//             </CardActions>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Details;
