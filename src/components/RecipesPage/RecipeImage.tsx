import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router';
const RecipeImage = ({ imgItem }: { imgItem: { img: string; title: string; author: string;link:string } }) => {
    return (
        <>       
                <Link to={imgItem.link}>
                  <ImageListItem key={imgItem.img} sx={{ width: 350 }}>
                    <img
                      srcSet={`${imgItem.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${imgItem.img}?w=248&fit=crop&auto=format`}
                      alt={imgItem.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={imgItem.title}
                      subtitle={imgItem.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${imgItem.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </Link>
            </> );
        
};

export default RecipeImage;

