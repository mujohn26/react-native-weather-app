import weatherReducer from '../src/redux/reducer/weatherReducer';
import {
	getWeatherSuccessAction,
	getWeatherFailureAction,
} from '../__mockData__/weather.mockData';

describe('Get weather tests', () => {
	it('Should  GET_WEATHER_SUCCESS', () => {
		const getState = weatherReducer({}, getWeatherSuccessAction);
		expect(getState).toEqual({
            data: getWeatherSuccessAction.payload,
            weather:getWeatherSuccessAction.weather
		});
	});
	it('Should  GET_WEATHER_FAILURE', () => {
		const getState = weatherReducer({}, getWeatherFailureAction);
		expect(getState).toEqual({
			errorMessage: getWeatherFailureAction.message,
		});
	});
});
