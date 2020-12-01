import React from 'react';
import renderer from "react-test-renderer";
import {Weather} from '../src/components/weather.component';
import { props } from '../__mockData__/weather.mockData';


describe('Render weather  component', () => {
	it('should weather successfully', () => {
        const component = renderer.create(<Weather weatherData={props.weatherData} currentWeather={props.currentWeather} />);
        const instance = component.getInstance();
		expect(instance).toBeDefined();
	});

});
