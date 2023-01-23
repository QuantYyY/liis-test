import React, { FC } from "react";
import dayjs from "dayjs";

import Icon, { HomeFilled, HeartFilled, StarFilled } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { List, Avatar, Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../../../../hook';

import { addFavouriteHotel, Hotel } from '../../../../../store/hotelSlice'


const ListCard: FC = () =>{

    const dispatch = useAppDispatch();
    const hotels = useAppSelector(state => state.hotel.hotels);
    const favouriteHotels = useAppSelector(state => state.hotel.favouriteHotels);

    const chooseIcon = (id:number) =>{
        let result = favouriteHotels.some((element) =>{
            return element.hotelId === id
        })
        return result
    }

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
    dayjs.locale('ru');

    const HeartSvg = () => (
        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
          <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
        </svg>
    );

    const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={HeartSvg} {...props} />
    );

    return (
        <>
            <div className="hotelsList">
                <List
                    locale={{ emptyText: "Не найдено" }}
                    dataSource={hotels}
                    renderItem={(item) => (
                        <List.Item key={item.hotelId} style={{ paddingLeft: 0 }}>
                            <List.Item.Meta
                                avatar={<Avatar size={64} style={{ backgroundColor: 'rgba(135, 135, 135, 0.2)' }} icon={<HomeFilled style={{ color: 'rgba(65, 82, 46, 1)', fontSize: '32px' }} />} />}

                                title={<>
                                    <div className="title">{item.hotelName}</div>
                                    <div className="buttonFavourite">

                                        {chooseIcon(item.hotelId) &&
                                            <Button shape="circle" type="text" icon={<HeartFilled className="iconActive" height={21} width={18} />} onClick={() => onClick(item)} />
                                            ||
                                            <Button shape="circle" type="text" icon={<HeartIcon className="iconInactive" height={21} width={18} />} onClick={() => onClick(item)} />
                                        }
                                    </div>
                                    <div className="date">{dayjs(item.firstDay).format('DD MMMM YYYY')}&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;{item.numberDays}
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

export default ListCard;