import React, { FC } from 'react';

import { ExportOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hook';
import { updateAuth } from '../../store/authSlice';

import MainCard from '../Cards/MainCard';
import SettingsCard from './SettingsCard';
import FavouriteCard from './FavouriteCard'
import './GroupCards.css';

const GroupCards: FC = () => {

    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);

    const onClick = () =>{
        dispatch(updateAuth())
        window.location.href = '/';
    }

    return (
        <>
            {isAuth && <div>
                <div className='projectName'>Simple Hotel Check</div>
                <Button type='text' className='exit' onClick={() => onClick()}>Выйти <ExportOutlined /> </Button>
                <div className='groupCards'>
                    <Card className='mainCard'>
                        <MainCard />
                    </Card>
                    <Card className='settingsCard'>
                        <SettingsCard />
                    </Card>
                    <Card className='favouriteCard'>
                        <FavouriteCard />
                    </Card>
                </div>
            </div>}
        </>
    )

};

export default GroupCards;