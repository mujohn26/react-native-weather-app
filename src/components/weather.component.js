import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import cloudyImage from "../assets/Images/forest_cloudy.png";
import { format } from "date-fns";

import imageHelper from "../helpers/imageHelper";
import seasonTitle from "../helpers/seasonTittleHelper";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDays: [],
    };
  }
  UNSAFE_componentWillMount() {
    const daysByHour = this.props.weatherData.list.map((day) => {
      const dt = new Date(day.dt * 1000);
      return {
        date: dt,
        hour: dt.getHours(),
        name: format(dt, "EEEE"),
        temp: Math.round(day.main.temp),
        weather: day.weather[0].main,
      };
    });
    daysByHour.forEach((obj) => {
      if (!this.state.weekDays.some((o) => o.name === obj.name)) {
        this.state.weekDays.push({ ...obj });
      }
    });

  }
  render() {
    let seasonStyle; 
    if(this.props.currentWeather.weather[0].main ==="Clouds"){
      seasonStyle = styles.cloudSeasonStyle;
    }
    else if(this.props.currentWeather.weather[0].main ==="Rain"){
      seasonStyle = styles.rainSeasonStyle;

    }
    else{
      seasonStyle = styles.sunSeasonStyle;

    }
    return (
      <View style={styles.container}>
        <View style={styles.uppContainer}>
          <ImageBackground
            source={imageHelper[this.props.currentWeather.weather[0].main]}
            style={styles.image}
          >
            <View>
              <View style={styles.currentDayStatUpper}>
                <Text style={styles.text}>
                  {Math.round(this.props.currentWeather.main.temp)}°
                </Text>
                <Text style={styles.text}>
                  {seasonTitle[this.props.currentWeather.weather[0].main]}
                </Text>
              </View>
              <View style={styles.currentDayStatContainer}>
                <View>
                  <Text style={styles.currentDayStat}>
                    {Math.round(this.props.currentWeather.main.temp_min)}°
                  </Text>
                  <Text style={styles.currentDayStatTitle}>Min</Text>
                </View>
                <View>
                  <Text style={styles.currentDayStat}>
                    {Math.round(this.props.currentWeather.main.temp)}°
                  </Text>
                  <Text style={styles.currentDayStatTitle}>Current</Text>
                </View>
                <View>
                  <Text style={styles.currentDayStat}>
                    {Math.round(this.props.currentWeather.main.temp_max)}°
                  </Text>
                  <Text style={styles.currentDayStatTitle}>Max</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.downContainer, seasonStyle]} >
          {this.state.weekDays.length != 0 ? (
            this.state.weekDays.map((data, index) => {
              return (
                <View style={styles.flexRow} key={data.name}> 
                  <View style={styles.alignItem}>
                    <Text style={styles.alignItemText}>{data.name}</Text>
                  </View>
                  <View style={styles.alignItem}>
                    <Image
                      style={styles.icons}
                      source={
                        imageHelper[
                          data.weather === "Rain" ? "rainIcon" : "sunnyIcon"
                        ]
                      }
                    />
                  </View>
                  <View style={styles.alignItem}>
                    <Text style={styles.alignItemText}>
                      {Math.round(data.temp)}°
                    </Text>
                  </View>
                </View>
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  uppContainer: {
    height: 380,
    width: 400,
  },
  downContainer: {
    height: 370,
    width: 400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    overflow: "scroll",
  },
  defaultSeasonStyle:{
    backgroundColor: "#57575D",

  },
  rainSeasonStyle:{
    backgroundColor: "#57575D",

  },
  cloudSeasonStyle:{
    backgroundColor: "#54717A",

  },
  sunSeasonStyle:{
    backgroundColor: "#47AB2F",

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  currentDayStat: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  currentDayStatTitle: {
    color: "white",
  },
  currentDayStatUpper: {
    marginTop: 60,
  },
  currentDayStatContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 110,
  },
  icons: {
    height: 40,
    width: 40,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  alignItem: {
    textAlign: "center",
    width: "33%",
    marginLeft: 100,
  },
  alignItemText: {
    color: "white",
  },
});
export default Weather;
