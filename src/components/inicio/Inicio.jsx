import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Inicio() {
  return (
    <Box  sx={{marginTop: 11 ,} }  >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '../src/assets/m1.jpg',
    title: 'Bed',
  },
  {
   img: '../src/assets/m2.jpg',
    title: 'Books',
  },
  

  {
   img: '../src/assets/m8.jpg',
    title: 'Blinds',
  },
  {
   img: '../src/assets/m5.jpg',
    title: 'Chairs',
  },
  {
   img: '../src/assets/m6.jpg',
    title: 'Laptop',
  },
  {
   img: '../src/assets/m4.jpg',
    title: 'Doors',
  },
  {
   img: '../src/assets/m7.jpg',
    title: 'Coffee',
  },
  {
   img: '../src/assets/m3.jpg',
    title: 'Storage',
  },
  
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];


