import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../../../hook";
import { Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './FavouriteCard.css';
import FavouriteListCard from "./ExtraComponents/FavouriteListCard";

import { sortFavouriteHotelsByStars, sortFavouriteHotelsByPrice } from "../../../store/hotelSlice";


const FavouriteCard: FC = () => {

    const dispatch = useAppDispatch();
    const conditionStars = useAppSelector(state => state.hotel.conditionStars);
    const conditionPrice = useAppSelector(state => state.hotel.conditionPrice);

    return (
        <>
            <h2><span className="favouriteCardName">Избранное</span></h2>

            <Button className={conditionStars !== 0 && "sortingButtonActive" || "sortingButtonDisabled"} onClick={() => dispatch(sortFavouriteHotelsByStars())}>
                Рейтинг&nbsp;
                <>
                    <div>
                        {(conditionStars === 1) && <UpOutlined style={{ fontSize: '12px', color: '#41522E' }} />}
                        {(conditionStars === 2) && <DownOutlined style={{ fontSize: '12px', color: '#41522E' }} />}
                    </div>
                </>
            </Button>

            <Button className={conditionPrice !== 0 && "sortingButtonActive" || "sortingButtonDisabled"} onClick={() => dispatch(sortFavouriteHotelsByPrice())}>
                Цена&nbsp;
                <>
                    <div>
                        {(conditionPrice === 1) && <UpOutlined style={{ fontSize: '12px', color: '#41522E' }} />}
                        {(conditionPrice === 2) && <DownOutlined style={{ fontSize: '12px', color: '#41522E' }} />}
                    </div>
                </>
            </Button>

            <FavouriteListCard />

        </>
    )
};

export default FavouriteCard;