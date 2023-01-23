import React, { FC } from "react";
import dayjs from "dayjs";
require('dayjs/locale/ru')

import './MainCard.css';
import { RightOutlined } from '@ant-design/icons';
import CarouselCard from './ExtraComponents/CarouselCard'
import ListCard from "./ExtraComponents/ListCard";


import { useAppSelector } from '../../../hook';

const MainCard: FC = () => {

    const favouriteHotels = useAppSelector(state => state.hotel.favouriteHotels);
    const settings = useAppSelector(state => state.hotel.settings);

    const changeTextSize = () => {
        let textLength = settings.city.length
        let fontSize;
        if(textLength > 14){
            fontSize = '20px';
        } else {
            fontSize = '28px'
        }
        return fontSize 
    }

    return (
        <>
            <div className="headerInfo">
                    <h1 style={{fontSize: `${changeTextSize()}`}} className="hotelCity">Отели <RightOutlined height={17} width={9} style={{ color: '#A7A7A7', fontSize: '22px' }} /> <span className="cityName">{settings.city}</span></h1>
                    <h2 className="arrivalDate"><span style={{ color: '#41522E' }}>{dayjs(settings.date).format('DD MMMM YYYY')}</span></h2>
            </div>

            <CarouselCard></CarouselCard>

            <div className="countFavourite">
                Добавлено в Избранное: <span className="numberOfHotels"> &nbsp;{favouriteHotels.length}</span>
                {((favouriteHotels.length % 10) !== 1 && ((favouriteHotels.length % 10) === 0 || (favouriteHotels.length % 10) > 4 ) || (favouriteHotels.length> 10 && favouriteHotels.length < 16) ) && <> отелей</>}
                {((favouriteHotels.length % 10) > 1 && (favouriteHotels.length % 10) < 5 && ((favouriteHotels.length < 5) || (favouriteHotels.length > 15))) && <> отеля</>}
                {((favouriteHotels.length % 10) === 1 && (favouriteHotels.length % 100) !== 11 ) && <> отель</>}
            </div>

            <ListCard></ListCard>
        </>

    );
};

export default MainCard;