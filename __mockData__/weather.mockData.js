import {
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE,
} from "../src/redux/actions/weatherAction";

export const props = {
  weatherData: {
    list: [
      {
        clouds: {
          all: 97,
        },
        dt: 1606878000,
        dt_txt: "2020-12-02 03:00:00",
        main: {
          feels_like: 16.61,
          grnd_level: 852,
          humidity: 93,
          pressure: 1013,
          sea_level: 1013,
          temp: 15.77,
          temp_kf: 0,
          temp_max: 15.77,
          temp_min: 15.77,
        },
        pop: 0.46,
        sys: {
          pod: "n",
        },
        visibility: 10000,
        weather: [
          {
            description: "overcast clouds",
            icon: "04n",
            id: 804,
            main: "Clouds",
          },
        ],
        wind: {
          deg: 293,
          speed: 0.93,
        },
      },
      {
        clouds: {
          all: 97,
        },
        dt: 1606878000,
        dt_txt: "2020-12-02 03:00:00",
        main: {
          feels_like: 16.61,
          grnd_level: 852,
          humidity: 93,
          pressure: 1013,
          sea_level: 1013,
          temp: 15.77,
          temp_kf: 0,
          temp_max: 15.77,
          temp_min: 15.77,
        },
        pop: 0.46,
        sys: {
          pod: "n",
        },
        visibility: 10000,
        weather: [
          {
            description: "overcast clouds",
            icon: "04n",
            id: 804,
            main: "Clouds",
          },
        ],
        wind: {
          deg: 293,
          speed: 0.93,
        },
      },
    ],
  },
  currentWeather: {
    clouds: {
      all: 97,
    },
    dt: 1606878000,
    dt_txt: "2020-12-02 03:00:00",
    main: {
      feels_like: 16.61,
      grnd_level: 852,
      humidity: 93,
      pressure: 1013,
      sea_level: 1013,
      temp: 15.77,
      temp_kf: 0,
      temp_max: 15.77,
      temp_min: 15.77,
    },
    pop: 0.46,
    sys: {
      pod: "n",
    },
    visibility: 10000,
    weather: [
      {
        description: "overcast clouds",
        icon: "04n",
        id: 804,
        main: "Clouds",
      },
    ],
    wind: {
      deg: 293,
      speed: 0.93,
    },
  },
};

export const getWeatherFailureAction = {
  type: GET_WEATHER_DATA_FAILURE,
  message: "failed to get weather data",
};
export const getWeatherSuccessAction = {
  type: GET_WEATHER_DATA_SUCCESS,
  payload: {
    feels_like: 16.61,
    grnd_level: 852,
    humidity: 93,
    pressure: 1013,
    sea_level: 1013,
    temp: 15.77,
    temp_kf: 0,
    temp_max: 15.77,
    temp_min: 15.77,
  },
  weather:{
    feels_like: 16.61,
    grnd_level: 852,
    humidity: 93,
    pressure: 1013,
    sea_level: 1013,
    temp: 15.77,
    temp_kf: 0,
    temp_max: 15.77,
    temp_min: 15.77,
  },
};
