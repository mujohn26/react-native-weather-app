const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_WEATHER_DATA_SUCCESS":
        return {
          ...state,
          data: action.payload,
          weather: action.weather
        };
        case "GET_WEATHER_DATA_FAILURE":
          return {
            ...state,
            errorMessage: action.message,
          };
      default:
        return state;
    }
  };
  export default weatherReducer;
  