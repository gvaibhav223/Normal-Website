import React, { useState } from "react";
import {
  Box,
  Avatar,
  CardHeader,
  Collapse,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material";
import PostData from "./Data";

const Feed = () => {
  const [allData, setAllData] = useState(PostData);
  return (
    <Box flex={10} my="2">
      <Box sx={{ margin: "30px" }}>
        {allData.map((values) => {
          return (
            <>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      {values.letter}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                  title={values.title}
                  subheader={values.date}
                />
                <CardMedia
                  component="img"
                  // height="194"
                  height="20%"
                  image={values.img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {values.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={
                        <Favorite
                          sx={{
                            color: "red",
                          }}
                        />
                      }
                    />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default Feed;
