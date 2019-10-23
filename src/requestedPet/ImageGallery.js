import React from 'react';
import { Gallery, GalleryImage} from 'react-gesture-gallery';

const ImageGallery = ({ photos }) => {
    const [index, setIndex] = React.useState(0)
    
    const lrgPhotos = photos && photos.map(img => {
        return img.large
    })
    console.log('imagesL', lrgPhotos)

    
    // get photos in from here that are gonna be the images for the gallery
    if(!photos){
        return (
            <div>Waiting for photos</div>
        )
    } else {
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
                    {lrgPhotos.map((image, i) => {
                        return <GalleryImage key={i} objectFit="contain" src={image}/>
                    })}
                </Gallery>
        )
    }
};

export default ImageGallery;