import { createSlice } from '@reduxjs/toolkit';


export type Hotel = {
    hotelId: number,
    priceAvg: number,
    pricePercentile: {},
    locationId: number;
    stars: number;
    location: {
        state: null,
        name: string,
        country: string,
        geo: {
            lat: number,
            lon: number,
        }
    }
    hotelName: string,
    priceFrom: number,
    numberDays: number,
    firstDay: string,
};

type HotelState = {
    hotels: Hotel[],
    isLoading: boolean,
    settings: {
        date: string,
        city: string,
        days: number,
    },
    favouriteHotels: Hotel[],
    sortedByStars: boolean,
    conditionStars: number,
    conditionPrice: number,
};

const date = new Date();
const todayDate =  date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');

const initialState: HotelState = {
    hotels: [],
    isLoading: false,
    settings: {
        date: todayDate,
        city: 'Москва',
        days: 1,
    },
    favouriteHotels: [],
    sortedByStars: false,
    conditionStars: 0,
    conditionPrice: 0,
};

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        getHotelsRequest(state){
            state.isLoading = true;
        },

        updateHotels(state, action){
            state.hotels = action.payload;
            state.isLoading = false;
            state.hotels.forEach(element => {
                element.firstDay = state.settings.date
                element.numberDays = state.settings.days
            });
        },

        updateQuerySettings(state, action){
            state.settings = action.payload;
        },

        addFavouriteHotel(state, action){
            if(state.favouriteHotels){
                let favouriteCondition = state.favouriteHotels.some((element) => {
                    return element.hotelId === action.payload.hotelId
                })

                if(!favouriteCondition){
                    state.favouriteHotels.push(action.payload)
                } else {
                    state.favouriteHotels =  state.favouriteHotels.filter( el => el.hotelId !== action.payload.hotelId)
                }

                if(state.favouriteHotels.length === 0) {
                    state.conditionPrice = 0
                    state.conditionStars = 0
                }
            }
        },

        sortFavouriteHotelsByStars(state){
            state.conditionPrice = 0
            if(!state.sortedByStars){
                state.favouriteHotels.sort((a, b) => {return a.stars - b.stars} ).reverse()
                state.sortedByStars = true
                state.conditionStars = 1
            } else {
                state.favouriteHotels.sort((a, b) => {return a.stars - b.stars})
                state.sortedByStars = false
                state.conditionStars = 2
            }
        }, 

        sortFavouriteHotelsByPrice(state){
            state.conditionStars = 0
            if(!state.sortedByStars){
                state.favouriteHotels.sort((a, b) => {return a.priceAvg - b.priceAvg} ).reverse()
                state.sortedByStars = true
                state.conditionPrice = 1
            } else {
                state.favouriteHotels.sort((a, b) => {return a.priceAvg - b.priceAvg})
                state.sortedByStars = false
                state.conditionPrice = 2

            }
        }, 



    },
});

export const { getHotelsRequest, updateHotels, updateQuerySettings, addFavouriteHotel, sortFavouriteHotelsByStars, sortFavouriteHotelsByPrice } = hotelSlice.actions

export default hotelSlice.reducer