import React, { FC, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Button, DatePicker } from 'antd'
import './SettingsCard.css'

import dayjs from "dayjs";

import { useAppDispatch, useAppSelector } from "../../../hook";
import { getHotelsRequest, updateQuerySettings } from "../../../store/hotelSlice";

const SettingsCard: FC = () => {

    const dispatch = useAppDispatch();
    const settings = useAppSelector(state => state.hotel.settings);

    const {
        control,
        register, 
        formState: { errors },
        handleSubmit
    } = useForm();

    const day = dayjs().format('YYYY-MM-DD')
    
    const onSubmit = (data: {city: string, date: string, days: number}) => {
        if(typeof(data.date) === 'string'){
            dispatch(updateQuerySettings(data))
            dispatch(getHotelsRequest())
        } 
        else {
            data.date = dayjs(data.date).format('YYYY-MM-DD')
            dispatch(updateQuerySettings(data))
            dispatch(getHotelsRequest())
        }
        
    } 

    useEffect(() => {
        dispatch(getHotelsRequest())
    }, [dispatch]);



    return (
        <>

            <form onSubmit={
                // @ts-ignore
                handleSubmit(onSubmit)}>

                <div >
                    <label htmlFor="">
                        <span className="settingsLabel">Локация</span>  <br />
                        <input className="authInput" {...register('city')} defaultValue={"Москва"} />
                    </label>
                </div>

                <div className="settingsForm">
                    <label htmlFor="">
                        <span className="settingsLabel">Дата заселения</span><br />
                        <Controller
                            control={control}
                            name='date'
                            render={({ field }) => (
                                <DatePicker
                                    className="authInput"
                                    defaultValue={dayjs(day)}
                                    onChange={(dateString) => {
                                        field.onChange(dateString)
                                    }}

                                />
                            )}
                        />
                    </label>
                </div>

                <div className="settingsForm">
                    <label htmlFor="">
                        <span className="settingsLabel">Количество дней</span>  <br />
                        <input className="authInput" type="number" {...register('days')} defaultValue={1} />
                    </label>
                </div>

                <div className="blockSettingsButton">
                    <Button className="authButton"  htmlType="submit">Найти</Button>
                </div>
            </form>

        </>
    );
};  

export default SettingsCard;