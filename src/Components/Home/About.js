import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import about from "../../image/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card sx={{ backgroundColor: "#050911", color: "white", mt: 5 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-duration="1500">
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", md: "40%" },
              height: 400,
              ml: { md: "25%" },
              mt: 5,
            }}
            src={about}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 5 }}>
          <CardContent>
            <Typography
              variant="h5"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <div>
                <Typography
                  variant="h5"
                  sx={{ color: "gray", fontWeight: "bold" }}
                >
                  Hello,I'm
                </Typography>
                <Typography variant="h3" sx={{ p: 2 }}>
                  Noorjahan <span style={{ color: "orange" }}> Ferdous</span>
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "orange", fontWeight: "bold" }}
                >
                  I'm a MERN Stack Developer.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, p: 2, color: "gray", fontWeight: "bold" }}
                >
                  I'm studying B.Sc in CSE. I love Web development and and I have
                  acquired skills and knowledge to make projects successful.
                </Typography>

                <Link
                  to="https://drive.google.com/file/d/1Pl_zpKYus_VrGu4w2cV4nE3jX42IX4mq/view?usp=share_link"
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: "#630e31",
                      fontWeight: "bold",
                      marginRight: "5%",
                      boxShadow: "8px 4px 4px #A7A6A5  ",
                      backgroundColor: "white",
                      "&:hover": {
                        bgcolor: "#7B073F",
                        color: "white",
                      },
                    }}
                    target="_blank"
                  >
                    Download Resume
                  </Button>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/noorjahan-ferdous-945391227/"
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: "#630e31",
                      fontWeight: "bold",
                      marginRight: "5%",
                      boxShadow: "8px 4px 4px #A7A6A5  ",
                      backgroundColor: "white",
                      "&:hover": {
                        bgcolor: "#7B073F",
                        color: "white",
                      },
                    }}
                    target="_blank"
                  >
                    Hire Me
                  </Button>
                </Link>
              </div>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
