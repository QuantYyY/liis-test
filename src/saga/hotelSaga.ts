import { put, takeEvery, call, select } from 'redux-saga/effects'
import { updateHotels } from '../store/hotelSlice'
import axios from 'axios';

const getHotels = async (city: string, date: string, days: number) =>{
    let request;
    let firstDate = new Date(Date.parse(date));
    let daysToAdd:number = firstDate.getDate() + (+days);
    firstDate.setDate(daysToAdd)
    let secondDate =  firstDate.getFullYear() + '-' + String(firstDate.getMonth() + 1).padStart(2, '0') + '-' + String(firstDate.getDate()).padStart(2, '0');

    await axios.get(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${date}&checkOut=${secondDate}&limit=10`)
    .then((response) => { 
        request = response.data;
    })
    .catch(() => {
        request = []
    })
    return request;

}

function* hotelWorker() {
    // @ts-expect-error
    const settings = yield select(state => state.hotel.settings)
    // @ts-expect-error
    const hotelData = yield call(getHotels, settings.city, settings.date, settings.days);
    yield put(updateHotels(hotelData));
}


function* hotelSaga(){
    yield takeEvery('hotel/getHotelsRequest', hotelWorker)
};

export default hotelSaga;