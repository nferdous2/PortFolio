import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import pb1 from '../../image/pb1.png';
import pb2 from '../../image/pb2.png';
import pb3 from '../../image/pb3.png';
import pb4 from '../../image/pb4.png';
import pb5 from '../../image/pb5.png';

const Project2 = () => {
  return (
    <Grid container spacing={4} sx={{p:5}}justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{m:4}}>
        <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project name:</span> Decore'n crafts
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <Card>
          <CardMedia component="img" image={pb1}  />
        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Card>
          <CardMedia component="img" image={pb2}  />
          <CardMedia component="img" image={pb5}  />
          <CardMedia component="img" image={pb4}  />


        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
        <Card>
          <CardMedia component="img" image={pb3}  />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CardContent>
          <Typography variant="h5">
          <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project name:</span> Decore'n crafts
          </Typography>
          <Typography variant="body1">
          <Typography variant="h2">About  <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project</span></Typography>
            <ul>
            <li>Customer can create account Using Email& Pass</li>
            <li>In explore section user can see all the products.</li>
            <li>In Dashboard user can show his/her order and also able to delete</li>
            <li>User can also add product, and can give his/her review.</li>
          </ul>
          </Typography>
          <Link to="/">
            <Button variant="outlined" color="error" size="large">Back</Button>
          </Link>
          <Button href="https://github.com/nferdous2/Handicrafts-web-client" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Client Link</Button>
          <Button  href="https://github.com/nferdous2/Handicrafts-web-server" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Server Link</Button>
          <Button href="https://handicrafts-a749a.web.app//" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Live Site</Button>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Project2;
