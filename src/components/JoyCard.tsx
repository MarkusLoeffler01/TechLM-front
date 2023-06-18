import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { CardHeader, CardMedia, IconButton, SvgIconTypeMap } from '@mui/material';
import { FavoriteBorderOutlined, ShareOutlined } from '@mui/icons-material';

const x: React.CSSProperties = {
}

function CardLayers3d({title, description, Logo}: {title: string, description: string, Logo: JSX.Element}) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-of-type(2)': {
              transform: 'scaleY(0.9) translate3d(1vw, 3vh, 3.7vw)',
            },
            '& > div:nth-of-type(3)': {
              transform: 'translate3d(2vw, 5vh, 2vw)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '21.12vh',
          width: "14vw",
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" fontSize="1.5vmin" textColor="#000">
          Card
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 21.12vh), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
          }}
        >
        {Logo}
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
          }}
        >
          <Typography level="h2" position={"absolute"} fontSize="1.5vw" textColor="#fff" m={3} maxWidth="100%" sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: '5vh',
          }}>
            Card
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}


function SecondTry({title, description, Logo}: {title: string, description: string, Logo: JSX.Element})
{
  return (<Box
    sx={{
      perspective: '1000px',
      transition: 'transform 0.4s',
      '& > div, & > div > div': {
        transition: 'inherit',
      },
      '&:hover': {
        '& > div': {
          transform: ['none', 'none', 'rotateY(30deg)'],
          '& > div:nth-of-type(2)': {
            transform: [
              'none',
              'none',
              'scaleY(0.9) translate3d(0.625em, 0.9375em, 1.25em)',
            ],
          },
          '& > div:nth-of-type(3)': {
            transform: [
              'none',
              'none',
              'translate3d(1.40625em, 1.5625em, 1.25em)',
            ],
          },
        },
      },
      minHeight: ['350px', '280px'],
      width: '100%',
      maxWidth: ['320px', 'none'],
    }}
  >
    <Card
      variant="outlined"
      sx={{
        minHeight: "15em",
        backgroundColor: '#fff',
        borderColor: '#000',
      }}
    >
      <Typography level="h2" fontSize={['md', 'lg']} textColor="#000">
        {title}
      </Typography>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 1.25em), linear-gradient(to top, rgba(135, 206, 235, 1), rgba(135, 206, 235, 1) 1.875em)',
          border: '1px solid',
          borderColor: '#777',
        }}
      >
        {Logo}
      </CardCover>
      <CardContent
        sx={{
          alignItems: ['center', 'self-end'],
          justifyContent: ['center', 'flex-end'],
          background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
          border: '1px solid',
          borderColor: '#000',
        }}
        className="hidden hover:visible"
      >
        <Typography level="h6" fontSize={['md', 'sm']} textColor="#fff" m={['1.5em', 3]}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Box>
  )
}


interface ThirdTryProps {
  title: string;
  description: string;
  logo: JSX.Element;
}

function ThirdTry({ title, description, logo }: ThirdTryProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 350,
        width: "100%",
        maxWidth: 320,
        p: 2,
        transition: "transform 0.4s",
        perspective: "1000px",
        "&:hover": {
          transform: "rotateY(30deg)",
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "15em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderColor: "#000",
          width: "100%",
          maxWidth: "20em",
          p: 2,
        }}
      >
        <Typography
          variant="solid"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <CardMedia
          sx={{
            width: "100%",
            height: "10em",
            objectFit: "cover",
            borderBottom: "1px solid #777",
          }}
        >
          {logo}
        </CardMedia>
        <CardContent
          sx={{
            background: "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
            borderRadius: "0 0 10px 10px",
            color: "#fff",
            p: 2,
            "&:hover": {
              visibility: "visible",
            },
            visibility: "hidden",
            transition: "visibility 0.4s",
          }}
        >
          <Typography
            variant="solid"
            sx={{
              fontSize: "1rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

function FourthTry({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="solid" color='info'>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <ShareOutlined />
        </IconButton>
      </Box>
    </Card>
  );
}


export default FourthTry;



