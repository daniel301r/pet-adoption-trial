import React from 'react';
import { Gallery, GalleryImage} from 'react-gesture-gallery';

const ImageGallery = ({ photos }) => {
    const [index, setIndex] = React.useState(0)
    
    const lrgPhotos = photos && photos.map(img => {
        return img.large
    })
    
    if(!photos){
        return (
            <div>Waiting for photos</div>
        )
    } else {
        return (
                <Gallery
                    style={{
                        height:"400px",
                        width:"auto",
                        background:"black" 
                    }}
                    index={index}
                    enableIndicators={false}
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