import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import pa1 from '../../image/pa1.png';
import pa2 from '../../image/pa2.png';
import pa3 from '../../image/pa3.png';
import pa4 from '../../image/pa4.png';
import pa5 from '../../image/pa5.png';
import pa6 from '../../image/pa6.png';
import pa7 from '../../image/pa7.png';
import pa8 from '../../image/pa8.png';
import pa9 from '../../image/pa9.png';
import pa10 from '../../image/pa10.png';

const Project1 = () => {
  return (
    <Grid container spacing={4} sx={{p:5}}justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{m:4}}>
        <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project name:</span>NF Jewellery
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <Card>
          <CardMedia component="img" image={pa1}  />

        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Card>
        <CardMedia component="img" image={pa2}  />
          <CardMedia component="img" image={pa3}  />
          <CardMedia component="img" image={pa4}  />

        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
        <Card>
          <CardMedia component="img" image={pa7}  />
          <CardMedia component="img" image={pa8}  />

          <CardMedia component="img" image={pa9}  />
          <CardMedia component="img" image={pa10}  />
          <CardMedia component="img" image={pa5}  />

          <CardMedia component="img" image={pa6}  />



        </Card>
      </Grid>
      <Grid item xs={12}>
        <CardContent>
          <Typography variant="h5">
          <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project name:</span> NF Jewellery
          </Typography>
          <Typography variant="body1">
          <Typography variant="h2">About  <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project</span></Typography>
          <ul>
            <li>Customer can create account Using Email& Pass</li>
            <li>In all product section user can see all product of divided into different categories</li>
            <li>In Dashboard user can show his/her order and also able to track orders</li>
            <li>User also able to delete an order if he/she want</li>
            <li>User can also add product, and can give his/her review.</li>
          </ul>

          </Typography>
          <Link to="/">
            <Button variant="outlined" color="error" size="large">Back</Button>
          </Link>
          <Button  href="https://github.com/nferdous2/Jewellery" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Client Link</Button>
          <Button  href="https://github.com/nferdous2/jewellery-server" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Server Link</Button>
          <Button href="https://jewellery1-5636e.web.app/" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Live Site</Button>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Project1;
