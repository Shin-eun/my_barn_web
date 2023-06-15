import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//style
import * as S from "./SpaceSlide.styled";
import * as C from "../../assets/styles/commeStyle";

//component
import Card from "../card/Card";


const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];


const SpaceSlide = () => {

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay:false,
    onChange: (oldIndex: number, newIndex: number) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  return (
    <S.SpaceSlide>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <S.SlideBox key={index}>
            <C.Count>{index}</C.Count>
            <S.Space>
              {new Array(20).fill("").map(() => (
                <Link to={`/cardinfo/${`asddffdsf`}`}><Card /></Link>
              ))}
            </S.Space>
          </S.SlideBox>
        ))}
      </Slide>
    </S.SpaceSlide>
  );
};

export default SpaceSlide;
