import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.imgs.map((img) => {
        return <ImageCard key={img.id} img={img} />
    });

    // console.log(props.imgs);
    return <div className="image-list">{images}</div>;
};

export default ImageList;