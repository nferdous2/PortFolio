import { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: "#050911" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleToggle}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h4" component="div">
            Noorjahan Ferdous
          </Typography>
          <Box
           sx={{ display: { xs: "flex", md: "flex" , flex: 1, justifyContent: "space-evenly"} }}
          > 
                <a href="https://github.com/nferdous2" target="blank" s>
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      fontSize: "40px",
                      color: "rgb(252, 192, 252)",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/noorjahan-ferdous-945391227/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
    
                      fontSize: "40px",
                      color: "rgb(252, 192, 252)",
                    }}
                  />
                </a>
          </Box>
        </Toolbar>
        {open && (
          <Box
           sx={{ display: { xs: "flex", md: "flex" , flex: 1, justifyContent: "flex-end"} }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white", my: 2 }}
            >
              <Typography variant="h6" component="div" sx={{mr:5}}>
                About
              </Typography>
            </Link>
            <Link
              to="/project"
              style={{ textDecoration: "none", color: "white", my: 2 }}
            >
              <Typography variant="h6" component="div" sx={{mr:5}}>
                Project
              </Typography>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white", my: 2 }}
            >
              <Typography variant="h6" component="div" sx={{mr:5}}>
                Contact
              </Typography>
            </Link>
          </Box>
        )}
      </AppBar>
    </Box>
  );
};

export default Header;
