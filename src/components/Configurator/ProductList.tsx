import React, { ReactNode, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface ProductListProps {
  children: ReactNode;
}

const ScrollableBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
const Container = styled(Box)({
  maxWidth: '100vw',
  overflowX: 'hidden',
});

function ProductList({ children }: ProductListProps) {
  const ITEM_WIDTH = 345;
  const ITEM_MARGIN = 16;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const newX = event.clientX;
    const diff = newX - startX;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = currentX - diff;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCurrentX((prev) => {
      if (scrollRef.current) {
        return scrollRef.current.scrollLeft;
      } else {
        return prev;
      }
    });
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <Container>
      <ScrollableBox
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          scrollBehavior: isDragging ? 'unset' : 'smooth',
          // overflowScrolling: isDragging ? 'unset' : 'touch',
        }}
      >
        {children}
      </ScrollableBox>
    </Container>
  );
}

export default ProductList;
