import React, { FC } from "react";
import dayjs from "dayjs";

import { useAppSelector, useAppDispatch } from "../../../hook";
import { List, Button } from 'antd';
import { DownOutlined, HeartFilled, UpOutlined, StarFilled } from '@ant-design/icons';
import './FavouriteCard.css';

import { addFavouriteHotel, Hotel, sortFavouriteHotelsByStars, sortFavouriteHotelsByPrice } from "../../../store/hotelSlice";


const FavouriteCard: FC = () =>{

    const dispatch = useAppDispatch();
    const favouriteHotels = useAppSelector(state => state.hotel.favouriteHotels);
    const conditionStars = useAppSelector(state => state.hotel.conditionStars);
    const conditionPrice = useAppSelector(state => state.hotel.conditionPrice);

    const onClick = (hotel: Hotel) => {
        dispatch(addFavouriteHotel(hotel))
    };
    
    const stars = (stars: number) => {
        let content = []
        for(let i = 0; i < 5; i++){
            if(i <= stars){
                content.push(<StarFilled key={i}  style={{color: '#CDBC1E', marginLeft: '3px'}}/>)
            } else {
                content.push(<StarFilled key={i*12312} style={{ fill: 'rgba(255, 255, 255, 0.6)', marginLeft: '3px'}}/>)
            }
        }
        return content
    }


    return(
        <>
            <h2><span className="favouriteCardName">Избранное</span></h2>


            <Button className={conditionStars !== 0 && "sortingButtonActive" || "sortingButtonDisabled"} onClick={() => dispatch(sortFavouriteHotelsByStars())}>
                Рейтинг&nbsp;
                <>
                    <div>
                        {(conditionStars === 1) && <UpOutlined style={{fontSize: '12px', color: '#41522E'}}  />}
                        {(conditionStars === 2) && <DownOutlined style={{fontSize: '12px', color: '#41522E'}}  />}
                    </div>
                </>
            </Button>

            <Button className={conditionPrice !== 0 && "sortingButtonActive" || "sortingButtonDisabled"} onClick={() => dispatch(sortFavouriteHotelsByPrice())}>
                Цена&nbsp;
                <>
                    <div>
                        {(conditionPrice === 1) && <UpOutlined style={{ fontSize: '12px', color: '#41522E' }} />}
                        {(conditionPrice === 2) && <DownOutlined style={{ fontSize: '12px', color: '#41522E'}} />}
                    </div>
                </>
            </Button>

            <div className="favouriteList">
                <List
                    locale={{emptyText: "Список пуст"}}
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
                            { }
                            {/* <div>Price:{item.priceAvg}</div> */}
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </>
    )
};

export default FavouriteCard;