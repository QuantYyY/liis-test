import React, { FC } from "react";
import dayjs from "dayjs";

import { List, Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../../../../hook'
import { HeartFilled, StarFilled } from '@ant-design/icons';

import { addFavouriteHotel, Hotel } from "../../../../../store/hotelSlice";

const FavouriteListCard: FC = () => {

    const favouriteHotels = useAppSelector(state => state.hotel.favouriteHotels);
    const dispatch = useAppDispatch();

    const stars = (stars: number) => {
        let content = []
        for (let i = 0; i < 5; i++) {
            if (i <= stars) {
                content.push(<StarFilled key={i} style={{ color: '#CDBC1E', marginLeft: '3px' }} />)
            } else {
                content.push(<StarFilled key={i * 12312} style={{ fill: 'rgba(255, 255, 255, 0.6)', marginLeft: '3px' }} />)
            }
        }
        return content
    }

    const onClick = (hotel: Hotel) => {
        dispatch(addFavouriteHotel(hotel))
    };

    return (
        <>
            <div className="favouriteList">
                <List
                    locale={{ emptyText: "Список пуст" }}
                    dataSource={favouriteHotels}
                    renderItem={(item) => (
                        <List.Item key={item.hotelId} style={{ paddingLeft: 0 }} className="listElements">
                            <List.Item.Meta

                                title={<>
                                    <div className="titleFavourite">{item.hotelName}</div>
                                    <div className="buttonFavourite">
                                        <Button shape="circle" type="text" icon={<HeartFilled style={{ fontSize: '18px', color: '#E55858' }} />} onClick={() => onClick(item)} />
                                    </div>
                                    <div className="date">{dayjs(item.firstDay).format('DD MMMM YYYY')}&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp; {item.numberDays}
                                        {((item.numberDays % 10) !== 1 && ((item.numberDays % 10) === 0 || (item.numberDays % 10) > 4) || (item.numberDays > 10 && item.numberDays < 16)) && <> дней</>}
                                        {((item.numberDays % 10) > 1 && (item.numberDays % 10) < 5 && ((item.numberDays < 5) || (item.numberDays > 15))) && <> дня</>}
                                        {((item.numberDays % 10) === 1 && (item.numberDays % 100) !== 11) && <> день</>}
                                    </div>
                                </>}

                                description={
                                    <>
                                        <div>
                                            {stars(item.stars)}
                                            <div className="blockPrice">
                                                <span className="price">Price: </span><span className="priceAvg">{item.priceAvg}₽</span>
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </>
    )
};

export default FavouriteListCard;