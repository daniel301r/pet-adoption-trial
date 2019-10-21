import React from 'react';
import { Gallery, GalleryImage} from 'react-gesture-gallery';

const ImageGallery = ({ photos }) => {
    console.log('photos', photos)
    // const imagesL = photos && photos.map(img => {
    //     return img.large
    // })
    // console.log('imagesL', imagesL)

    const [index, setIndex] = React.useState(0)
    // get photos in from here that are gonna be the images for the gallery
    
    return (
        // <div>

        // </div>
        <Gallery
            style={{
                height:"400px",
                width:"auto",
                background:"black" 
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {photos.map(image => {
                return <GalleryImage objectFit="contain" src={image}/>
            })}
        </Gallery>
    );
};

export default ImageGallery;