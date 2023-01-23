import React, { FC, useEffect } from "react";
import dayjs from "dayjs";
require('dayjs/locale/ru')

import { List, Avatar, Button } from 'antd';
import './MainCard.css';
import Icon, { HomeFilled, HeartOutlined, HeartFilled, RightOutlined, StarFilled } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Carousel } from '@trendyol-js/react-carousel';

import { useAppDispatch } from '../../../hook';
import { addFavouriteHotel, Hotel } from '../../../store/hotelSlice'
import { useAppSelector } from '../../../hook';

const MainCard: FC = () => {

    const dispatch = useAppDispatch();
    const hotels = useAppSelector(state => state.hotel.hotels);
    const favouriteHotels = useAppSelector(state => state.hotel.favouriteHotels);
    const settings = useAppSelector(state => state.hotel.settings);

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
            <div className="headerInfo">
                    <h1 className="hotelCity">Отели <RightOutlined height={17} width={9} style={{ color: '#A7A7A7', fontSize: '22px' }} /> {settings.city}</h1>
                    <h2 className="arrivalDate"><span style={{ color: '#41522E' }}>{dayjs(settings.date).format('DD MMMM YYYY')}</span></h2>
            </div>


            <Carousel show={3.5} slide={3} swiping={true} className="carousel" useArrowKeys={false}>
                <img src="https://s3-alpha-sig.figma.com/img/fb52/f3d5/761a5c3d956c7a5e8785a9cfdd0000e8?Expires=1675036800&Signature=dTYNCuqBqGl-5C~4gTYTUyc9eTS3aV8MtDURnl6OBwLdaeiJflGwvssyey5xgBZO6XmChwM~ny~M~Z4cAtOrfBv6ROm0ilw1jOt6sbKmCgc2mCSJJ8iTUQS~nNLqSBMnKpyXz5F8FAR60HamMbGyzSNKPXXRMv9brLtIQWpcyehqz8emsbgAJuGIx2gS86yAKDNxlRT6VwRrz8kTKB~Vma-AKDPlGV5KgEL43g-gl6abdHD2F1lCX5S0Ss84HU8xMx2sdsYaLeKBfAuZNdKn5sJF1wd9MtUpR5Fh~oCy6uqCo9tVsK2rpIXOdhryPC5z6O4Ze~pvXw4JybxdXLkpNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="road" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d2a4/71f4/e777b38f94e7048b5c9f3a202666d591?Expires=1675036800&Signature=MXQA5NNxdtQI7qkN7KCcupeW-cKGlMF1l5khMG2hpY2DQcNgYmoZ3w~QpV5IIeggkg9mnKd2T0qPvxVwUBedTkMSTxMiG4Q70OSPd6zTDofc0BtuYyv03CkD7SHr~HT3EBWtd5Cyldo3WAS84fF4bUsttQLJ5zQnZwn8~1qWvXVVn4IC-L-tYBJAt~mkRx26X~uNoIXDoFgKUOft3e-FD2MFLLRoY1~EahSfkKMbYR1~aqK9zj0HkoveLfsnRnFzPCKOh1YkbvNxKGR58CR1~MKs~xwIkihHJXw0n6RqkVb1uZ9w~2qPwJlDs~v7a4g1VGMr1p13wN7xx1Ft8jV9EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="forest" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d24d/f4c0/11b700cbbec1b90478095ff8f098c27d?Expires=1675036800&Signature=hCWFIV0~xpceP7rCJBIMU3jQOq78CFPbuGxEr5mqY7~HNqSXOb0vppiGSObJGENGjkMyv54J5ca1CyEAmqUu50hp7PNCb5EF-3Nx68M5dX-p0ou1CcZ9g0Ps9BfMPICZOPWO4VUc3-7tdDuseXjKcUj18gc6-WrqwIfOT2DRQaEx7ay6IQi697aEY9NMlYcF3tZDREJGPMrKLcv-ujuGN1wZLnuNAUzOYVTzgWrVOgoACdFWHLhX691G1JciQ11f~jkhlbxzttIamgY7Es1dzEyYPtTxgcx3ahnky5SS~6fB8cIIg-xCre0OJZ4qb4hQuB~vCU0n2oC8Ta38tVxrFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="house" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d2a4/71f4/e777b38f94e7048b5c9f3a202666d591?Expires=1675036800&Signature=MXQA5NNxdtQI7qkN7KCcupeW-cKGlMF1l5khMG2hpY2DQcNgYmoZ3w~QpV5IIeggkg9mnKd2T0qPvxVwUBedTkMSTxMiG4Q70OSPd6zTDofc0BtuYyv03CkD7SHr~HT3EBWtd5Cyldo3WAS84fF4bUsttQLJ5zQnZwn8~1qWvXVVn4IC-L-tYBJAt~mkRx26X~uNoIXDoFgKUOft3e-FD2MFLLRoY1~EahSfkKMbYR1~aqK9zj0HkoveLfsnRnFzPCKOh1YkbvNxKGR58CR1~MKs~xwIkihHJXw0n6RqkVb1uZ9w~2qPwJlDs~v7a4g1VGMr1p13wN7xx1Ft8jV9EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="forest" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d24d/f4c0/11b700cbbec1b90478095ff8f098c27d?Expires=1675036800&Signature=hCWFIV0~xpceP7rCJBIMU3jQOq78CFPbuGxEr5mqY7~HNqSXOb0vppiGSObJGENGjkMyv54J5ca1CyEAmqUu50hp7PNCb5EF-3Nx68M5dX-p0ou1CcZ9g0Ps9BfMPICZOPWO4VUc3-7tdDuseXjKcUj18gc6-WrqwIfOT2DRQaEx7ay6IQi697aEY9NMlYcF3tZDREJGPMrKLcv-ujuGN1wZLnuNAUzOYVTzgWrVOgoACdFWHLhX691G1JciQ11f~jkhlbxzttIamgY7Es1dzEyYPtTxgcx3ahnky5SS~6fB8cIIg-xCre0OJZ4qb4hQuB~vCU0n2oC8Ta38tVxrFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="house" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
            </Carousel>

            <div className="countFavourite">
                Добавлено в Избранное: <span className="numberOfHotels"> &nbsp;{favouriteHotels.length}</span>
                {((favouriteHotels.length % 10) !== 1 && ((favouriteHotels.length % 10) === 0 || (favouriteHotels.length % 10) > 4 ) || (favouriteHotels.length> 10 && favouriteHotels.length < 16) ) && <> отелей</>}
                {((favouriteHotels.length % 10) > 1 && (favouriteHotels.length % 10) < 5 && ((favouriteHotels.length < 5) || (favouriteHotels.length > 15))) && <> отеля</>}
                {((favouriteHotels.length % 10) === 1 && (favouriteHotels.length % 100) !== 11 ) && <> отель</>}
            </div>
            <div className="hotelsList">
                <List
                    locale={{emptyText: "Не найдено"}}
                    dataSource={hotels}
                    renderItem={(item) => (
                        <List.Item key={item.hotelId} style={{ paddingLeft: 0 }}>
                            <List.Item.Meta
                                avatar={<Avatar size={64} style={{ backgroundColor: 'rgba(135, 135, 135, 0.2)' }} icon={<HomeFilled style={{ color: 'rgba(65, 82, 46, 1)', fontSize: '32px' }} />} />}

                                title={<>
                                    <div className="title">{item.hotelName}</div>
                                    <div className="buttonFavourite">

                                        { chooseIcon(item.hotelId) && 
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

    );
};

export default MainCard;