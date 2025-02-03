import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';
const RecipeImage = ({ imgItem }: { imgItem: { img: string; title: string; author: string;link:string } }) => {
    return (
        <>       
                <Link to={imgItem.link}>
                  <ImageListItem key={imgItem.img} sx={{ width: { xs: '100%', sm: 350 },  height: 350, maxWidth: '100%', overflowX: 'hidden' }}>
                    <img
                      srcSet={`${imgItem.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${imgItem.img}?w=248&fit=crop&auto=format`}
                      alt={imgItem.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <ImageListItemBar
                      title={imgItem.title}
                      subtitle={imgItem.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: "#ED3D48"}}
                          aria-label={`info about ${imgItem.title}`}
                        >
                          <FavoriteBorderIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </Link>
            </> );
        
};

export default RecipeImage;

