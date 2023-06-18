import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const AboutPage = () => {
  return (
    <div style={{
      flexGrow: 1,
      padding: 24,
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh ultricies, aliquam purus quis, ultricies sapien.
            Nullam euismod justo sit amet diam lobortis malesuada.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh ultricies, aliquam purus quis, ultricies sapien.
            Nullam euismod justo sit amet diam lobortis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed bibendum, augue et rhoncus ultricies, purus sapien molestie ante, eget malesuada mauris turpis sit amet nisi.
            Nullam elementum sapien ut lectus ultricies, nec faucibus elit venenatis. Morbi venenatis augue eu sapien rutrum elementum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh ultricies, aliquam purus quis, ultricies sapien.
            Nullam euismod justo sit amet diam lobortis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed bibendum, augue et rhoncus ultricies, purus sapien molestie ante, eget malesuada mauris turpis sit amet nisi.
            Nullam elementum sapien ut lectus ultricies, nec faucibus elit venenatis. Morbi venenatis augue eu sapien rutrum elementum.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
