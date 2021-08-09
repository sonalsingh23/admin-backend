import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveWeatherData } from '../../store/weatherSlice';

import CitySelect from '../../Components/CitySelect/CitySelect';
import TempDisplay from '../../Components/TempDisplay/TempDisplay';
import axios from 'axios';

function MainLayout() {
    const dispatch = useDispatch();

    const { city } = useSelector((state) => state.weather);

    const onCityChange = async () => {
        console.log(city);
        const result = await axios('http://api.weatherapi.com/v1/current.json?key=d35adc0e36cd4b09b1591010211007&q=' + city);
        console.log(result.data);
        dispatch(saveWeatherData(result.data));
    };
    // useEffect(() => {
    //   if (city) {
    //     onCityChange(city);
    //   }
    // }, [city, onCityChange]);

    /* call api to get data*/
    /* save data */
    return (
        <center>
            {' '}
            <div className="App">
                <div className="App2">
                    <div className="Header">
                        <h3>Check Wheather of your city</h3>
                    </div>

                    <CitySelect />
                    <div>
                        <button type="submit" className="btn" onClick={onCityChange}>
                            Search
                        </button>
                    </div>
                    <TempDisplay />
                </div>
            </div>
        </center>
    );
}
export default MainLayout;
