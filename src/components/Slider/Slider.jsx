import React from 'react';
import { Carousel } from 'rsuite';

const Slider = props => {
    const data = props.videos;

    return (
        <Carousel className="custom-slider" shape="bar">
            {data.map(video => (
                <iframe
                    title="Useful video"
                    key={video.id}
                    src={video.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ))}
        </Carousel>
    );
};

export default Slider;
