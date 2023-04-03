import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import JavaScript from "../../icons/javascript.png";
import ReactIcon from "../../icons/react-native.png";
import Html5 from "../../icons/html-5.png";
import Css3 from "../../icons/css-filetype.png";
import Bootstrap5 from "../../icons/bootstrap.png";
import TailwindCss from "../../icons/tailwindcss.png";
import MongoDB from "../../icons/mongodb.png";
import Nodejs from "../../icons/nodejs.png";
import C from "../../icons/c-key.png";
import Github from "../../icons/github.png";
import VsCode from "../../icons/visual-studio-code-2019.png";
import Netlify from "../../icons/netlify.png";
import Firebase from "../../icons/google-firebase-console.png";
import Figma from "../../icons/figma.png";

const skills = [
  { name: "JavaScript", icons: JavaScript },
  { name: "React", icons: ReactIcon },
  { name: "HTML5", icons: Html5 },
  { name: "CSS3", icons: Css3 },
  { name: "Bootstrap 5", icons: Bootstrap5 },
  { name: "Tailwind CSS", icons: TailwindCss },
  { name: "MongoDB", icons: MongoDB },
  { name: "Node.js", icons: Nodejs },
  { name: "C", icons: C },
  { name: "GitHub", icons: Github },
  { name: "VS Code", icons: VsCode },
  { name: "Netlify", icons: Netlify },
  { name: "Firebase", icons: Firebase },
  { name: "Figma", icons: Figma },
];
const Skills = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "#050911", color: "white" }}>
      <Typography variant="h4" sx={{ mt: 5 }}>
          SKI<span style={{color:"orange"}}>LLS</span>
        </Typography>
        <Grid container spacing={0}>
          {skills.map((skill) => (
            <Grid key={skill.name} item xs={6} sm={4} md={3} lg={2}>
              <CardMedia data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                component="img"
                src={skill.icons}
                sx={{
                  width: 75,
                  padding: 5,
                  position: "relative",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default Skills;
