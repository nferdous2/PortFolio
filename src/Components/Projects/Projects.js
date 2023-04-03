import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import img1 from "../../image/p2.PNG";
import img2 from "../../image/p1.PNG";
import img3 from "../../image/Tour.PNG";
import { Link } from "react-router-dom";
const cards = [
  { title: "NF Jewellery", image: img1, link: "/project1" },
  { title: "Decore'n crafts", image: img2, link: "/project2" },
  { title: "Plan your tour", image: img3, link: "/project3" },
];

const Projects = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 5, mb: 5 }}>
        <span style={{ color: "orange" }}>PORT</span>FOLIO
      </Typography>
      <Grid container spacing={5} sx={{ p: 3 }}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ m: "auto" }} data-aos="zoom-in" data-aos-duration="1500">
              <CardActionArea>
                <CardMedia component="img" image={card.image} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: " rgb(80, 3, 67)", fontWeight: 700 }}
                  >
                    Project Name:{" "}
                    <span style={{ color: "rgb(255, 95, 37)" }}>
                      {card.title}{" "}
                    </span>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={card.link} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        sx={{
                          width: "30%",
                          fontSize: "18px",
                          color: "red",
                          boxShadow: '8px 6px 6px #A7A6A5  ',                          backgroundColor: "white",
                          "&:hover": {
                            bgcolor: "#FA6F02 ",
                            color: "white",
                          },
                        }}
                        target="_blank"
                      >
                        More
                      </Button>
                    </Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
