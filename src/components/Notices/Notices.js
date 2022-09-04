import React, { useEffect, useState } from "react";
import "./Notices.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import NewCard from "./NewCard";
import NoticeService from "../../services/notice.service";

//import NewCard  from './NewCard';

import AOS from "aos";
import "aos/dist/aos.css";
const TextStyle = styled(Typography)((theme) => ({
  fontFamily: "sans-serif",
  fontSize: 15,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Notices = () => {
  const [posts, setPosts] = useState([
    {
      author: {
        name: "",
        avatarUrl: "",
      },
    },
  ]);

  useEffect(() => {
    NoticeService.getNotices().then((notices) => {
      console.log(notices.data);
      const postlist = notices.data.map((notice) => ({
        id: notice.NoticeId,
        cover: notice.NoticeCover,
        title: notice.NoticeTitle,
        view: notice.NoticeView,
        text: notice.NoticeText,
        cat: notice.NoticeCat,
        createdAt: notice.createdAt,
        author: {
          name: notice.user.fullname,
          avatarUrl: notice.user.profileUrl,
        },
      }));
      setPosts(postlist);
      console.log(posts);
      AOS.init({
        duration: 1000,
      });
    });
  }, []);

  return (
    <section id="Notices" sx={{ paddingTop: "0px" }}>
      <div className="container Notices">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="#0a1930" size={30} />
          <h2>Notices</h2>
          <TextStyle>
            Karadiya is the best application for the fishing industry Which
            provide lot of functionalities and unique features for doing fishing
            work successfully.
          </TextStyle>
        </div>
      </div>
      <Box sx={{ flexGrow: 1, p: 8 }}>
        {posts[0].id && (
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={4}>
                <Item>
                  <NewCard data={post} />
                </Item>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </section>
  );
};

export default Notices;
