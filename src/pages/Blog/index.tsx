import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import FixedSection from "Components/FixedSection";
import img from "../../assets/imgForm.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardRight from "./CardRight";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BlogType } from "types/Blog";
import { imgPath } from "methods/img";
import RenderRte from "Components/RenderRte";
function Blog() {
  const { id } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [blogData, setBlogData] = useState<BlogType | undefined>(undefined);
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  function getAboutData() {
    setStatus("loading");
    // <{ data: ContactType }>
    axios
      .get<{ data: BlogType }>(api(`blog/${id}`))
      .then(({ data }) => {
        console.log(data.data);
        setStatus("done");
        setBlogData(data.data);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }

  useEffect(() => {
    getAboutData();
  }, [id]);
  return (
    <Stack>
      <FixedSection title={"Blog"} />
      <Container maxWidth={"lg"} sx={{ py: "100px" }}>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Box sx={{ width: 1 }}>
              <img
                src={imgPath(blogData?.blog.image)}
                width={"100%"}
                height={"350px"}
                alt=""
              />
            </Box>
            <Stack sx={{ p: 1 }} flexDirection={"row"}>
              <CalendarMonthIcon sx={{ mx: 1 }} color="primary" />
              <Typography variant="body1">Nov 18 , 2022</Typography>
            </Stack>
            <Typography variant="h4" sx={{ my: 2, fontWeight: "600" }}>
              <RenderRte rte={blogData?.blog.title} />
            </Typography>
            <Typography variant="body1">
              How to plan a trip to Egypt is a question that needs to be
              answered in great detail. This article's main purpose is to offer
              every traveler all the necessary information to have the most
              incredible vacation in Egypt. This article was written by a number
              of highly skilled and expert tour operators, tour guides, and
              travel consultants who have more than two decades of experience in
              the field creating the most ideal vacation trips in Egypt.Quoted
              from one of our dear guests who said that Egypt has been a fantasy
              novel that had to be read to sleep peacefully, a tour to Egypt
              needs to be arranged even at least once in life to live the
              adventure that you have always heard of and wanted to try. What
              distinguishes Egypt from any other country all over the world is
              the history that was created by its great pharaohs, kings, and
              rulers via its different ages and eras.While planning a tour to
              your second country ‘Egypt’, many questions may come to your mind,
              how you will arrange your accommodation there? Is it safe enough
              to travel alone or among a group! Where should you go and how much
              time you should spend on each site? What are the things to avoid?
              Things to know about before traveling to Egypt!! And many more
              questions that we will try via our next articles to clarify to our
              dear travelers to make sure that you have the key to knowing all
              about the basic factors for how to plan a trip to Egypt.
            </Typography>
          </Grid>
          <CardRight />
        </Grid>
      </Container>
    </Stack>
  );
}

export default Blog;
