import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCity } from '../../store/weatherSlice';

const CitySelect = () => {
    const dispatch = useDispatch();
    const onChange = (city) => {
      dispatch(saveCity(city));
    };

    return (
        <div>
            <select
                className="drop"
                onChange={(e) => {
                    const selectedCity = e.target.value;
                    onChange(selectedCity);
                }}
            >
                <option value="delhi" >
                    Delhi
                </option>
                <option value="lucknow" >
                    Lucknow
                </option>
                <option value="patna" >
                    Patna
                </option>
            </select>
        </div>
    );
};
export default CitySelect;
