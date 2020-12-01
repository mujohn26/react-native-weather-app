import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import Weather from './weather.component';
import Loading from '../helpers/Loader';
import {getWeather,getWeatherSuccess,getWeatherFailure} from '../redux/actions/weatherAction';
 
class  App extends Component{
    constructor(props) {
        super(props);
        this.state = {
     lat:"",
     lan:""
      }
    }
    UNSAFE_componentWillMount(){
      const {getWeather} = this.props;
      // const {lat,lan}=this.state;
      getWeather();
  }
  render(){
  return ( 
    <View style={styles.container}>
     {this.props.currentWeather!=null?<Weather currentWeather={this.props.currentWeather} weatherData={this.props.weatherData}/>:<Loading/>}
    </View>
  );}
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const mapStateToProps = (state) => {
    return {
      currentWeather: state.weatherReducer.weather,
      weatherData:state.weatherReducer.data
    };
  };
const connectedAppScreen = connect(mapStateToProps, {
    getWeather,getWeatherSuccess,getWeatherFailure
})(App);

export default connectedAppScreen;