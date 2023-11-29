import React from 'react';
import { Carousel } from 'rsuite';
import PropTypes from 'prop-types';

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

Slider.propTypes = {
    videos: PropTypes.array,
};

export default Slider;
