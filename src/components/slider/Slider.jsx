import React from 'react';
import './slider.scss';

export default function Slider() {

    const data = [
        'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ];

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item carousel-images-div active">
            <img src={data[0]} alt="" height="100%" width="100%"/>
            </div>
            <div class="carousel-item carousel-images-div">
            <img src={data[1]} alt="" height="100%" width="100%"/>
            </div>
            <div class="carousel-item carousel-images-div">
            <img src={data[2]} alt="" height="100%" width="100%"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  )
}
