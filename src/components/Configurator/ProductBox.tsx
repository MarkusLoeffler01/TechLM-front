import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductBoxProps {
  image: string;
  name: string;
  price: string;
  //OnClick is a setState function
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selected: boolean;
}

const ProductCard = styled(Card)(({ selected }: { selected: boolean }) => ({
  maxWidth: 345,
  border: selected ? '2px solid #2196f3' : '2px solid transparent',
  boxShadow: selected ? '0px 0px 5px 0px #2196f3' : 'none',
}));

const ProductMedia = styled(CardMedia)({
  height: 100,
});

const ProductBoxWrapper = styled(Box)({
  marginRight: '16px', // füge die gewünschte Größe hinzu
});


function ProductBox({ image, name, price, setSelected, selected }: ProductBoxProps) { 

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <ProductBoxWrapper>
      <ProductCard selected={selected} onClick={handleClick}>
      <CardActionArea>
        <ProductMedia
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ProductCard>
    </ProductBoxWrapper>
  );
}

export default ProductBox;
