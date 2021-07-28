import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/politics.jpg'
              text='Lorem Ipsum'
              label='Politics'
              path='#'
            />
            <CardItem
              src='images/MLM.jpg'
              text='Lorem Ipsum'
              label='Musim Lives Matter'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/BLM.png'
              text='Lorem Ipsum'
              label='Black Lives Matter'
              path='#'
            />
            <CardItem
              src='images/ALM.jpg'
              text='Lorem Ipsum   '
              label='Asian Lives Matter'
              path='#'
            />
            <CardItem
              src='images/LLM.jpg'
              text='Lorem Ipsum'
              label='Latino Lives Matter'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
