import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import pc1 from '../../image/pc1.png';
import pc2 from '../../image/pc2.png';
import pc3 from '../../image/pc3.png';
import pc4 from '../../image/pc4.png';
import pc5 from '../../image/pc5.png';

const Project3 = () => {
  return (
    <Grid container spacing={4} sx={{p:5}}justifyContent="center">
      <Grid item xs={12} sx={{m:5}}>
        <Typography variant="h4">
        <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>
 Project name:</span> Plan Your Tour
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <Card>
          <CardMedia component="img" image={pc1} />
        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Card>
          <CardMedia component="img" image={pc2} />
          <CardMedia component="img" image={pc3}/>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
        <Card>
          <CardMedia component="img" image={pc4}/>
          <CardMedia component="img" image={pc5}/>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CardContent>
          <Typography variant="h5">
          <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project name:</span> Plan Your Tour
          </Typography>
          <Typography variant="body1">
            <Typography variant="h2">About  <span style={{ color: "rgb(247, 139, 67)" ,fontWeight:"bold"}}>Project</span></Typography>
            <ul>
              <li>Here You can see diffrent options of services..</li>
              <li>User can book any service ,after giving some information.We will provide you after you have come.</li>
              <li>User can see his/her bookings in my bookings option.</li>
              <li>Google log in System</li>
            </ul>
          </Typography>
          <Link to="/">
            <Button variant="outlined" color="error" size="large">Back</Button>
          </Link>
          <Button href="https://github.com/nferdous2/Tour-web-client" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Client Link</Button>
          <Button href="https://github.com/nferdous2/Tour-web-server-site" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Server Link</Button>
          <Button href="https://tour-f355b.firebaseapp.com/" target="blank" variant="outlined" color="error" size="large" sx={{ m: 1 }}>Live Site</Button>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Project3;
