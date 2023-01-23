import React, { FC } from "react";
import { Button, Card } from "antd";
import './Auth.css';
import { Link } from "react-router-dom";

import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from "../../hook";
import { updateAuth } from "../../store/authSlice";



const Auth: FC = () => {

    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm();

    const onSubmit = () => {
        if (isValid) {
            dispatch(updateAuth())
            window.location.href = 'hotels';
        }
    }


    return (
        <>
            <div className="background">
                <div className="blur"></div>
            </div>

            <div className="cardPlace">
                <Card className="authCard">
                    <span className="authTitle">{!isAuth && "Simple Hotel Check"}</span>
                    {isAuth &&
                        <div style={{ marginTop: '100px' }}>
                            <span className="authTitle">Вы уже авторизованы</span><br />
                            <Link style={{ fontSize: '20px', color: '#41522E' }} to="/hotels">Перейти к отелям</Link>
                        </div>
                    }
                    {!isAuth &&
                        <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="formInputs">
                                <label >
                                    <span className="authLabel">Логин</span>
                                    <input className="authInput" {...register('email',
                                        {
                                            required: 'Поле обязательно к заполнению',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                                message: 'Введите корректную почту'
                                            },
                                        })}

                                    />
                                </label>
                                {errors.email && <p className="authError">{(errors.email as any).message}</p>}
                            </div>


                            <div className="formInputs">
                                <label >
                                    <span className="authLabel">Пароль</span>
                                    <input type='password' className="authInput" {...register('password',
                                        {
                                            required: 'Поле обязательно к заполнению',
                                            pattern: {
                                                value: /^[^а-яё]+$/,
                                                message: 'Необходимо использовать латинские буквы'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Пароль должен содержать как минимум 8 символов'
                                            }
                                        }
                                    )} />
                                    {errors.password && <p className="authError">{(errors.password as any).message}</p>}
                                </label>
                            </div>
                            <Button className="authButton" htmlType="submit">
                                Войти
                            </Button>
                        </form>
                    }

                </Card>
            </div>

        </>
    );
};

export default Auth;