import React from "react";
import { TextField, Button, Grid, Typography,CardMedia, Box } from "@mui/material";
import phone from "../../icons/phone.png";
import email from "../../icons/email.png";

import address from "../../icons/address.png";

const Contact = () => {
  const inputProps = {
    style: {
      backgroundColor: "white",
      marginBottom:"8px"
    },
  };
  return (
    <Box sx={{boxShadow:" 0px 0px 10px gray",width:"85%", margin: "0 auto" }}>
      <div
        class="mb-4 mt-3 contact-sec"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"

      >
        <Typography variant="h4" sx={{m:4}}>
        <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Contact </span> Me
        </Typography>
        <form
          action="https://formsubmit.co/noorjahanferdous029@gmail.com"
          method="POST"
          target="_blank"
        >
          <Grid container spacing={2} sx={{ p: 5 }}>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Full Name"
                    fullWidth
                    required
                    InputProps={inputProps}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    type="email"
                    required
                    InputProps={inputProps}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={12}
                    fullWidth
                    required
                    InputProps={inputProps}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
             <ul l style={{ listStyleType: "none" }}>
                <li>
                  <CardMedia component="img" image={address} sx={{ width: "65px", height: "55px",marginLeft:"30%",padding:2 }}  />
                  <Typography>Address</Typography>
                  <Typography>Sylhet,Sylhet, Bangladesh</Typography>
                </li>

                <li>
                  <CardMedia component="img" image={phone} sx={{ width: "65px", height: "55px",marginLeft:"30%",padding:2 }} />
                  <Typography>Phone</Typography>
                  <Typography>01770205344</Typography>
                </li>

                <li>
                  <CardMedia component="img" image={email}sx={{ width: "65px", height: "55px",marginLeft:"30%",padding:2}}  />
                  <Typography>Email</Typography>
                  <Typography>noorjahanferdous029@gmail.com</Typography>
                </li>
              </ul>
              
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{
              color: "white",
              bgcolor: "#630e31",
              marginBottom:"2%",
              textDecoration: "none",
              "&:hover": {
                bgcolor: "#7B073F",
              },
            }}>
              Submit Form
            </Button>
          </Grid>
        </form>
      </div>
    </Box>
  );
};

export default Contact;
