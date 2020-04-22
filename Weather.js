import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#00c3ff", "#ffff1c"],
    content: "Sunny day",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0f0c29", "#302b63", "#24243e"],
    content: "So fucking day",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#a8c0ff", "#3f2b96"],
    content: "Drizzle.. it's okay",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00c6ff", "#0072ff"],
    content: "Fucking rain",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#b2fefa", "#0ed2f7"],
    content: "Snow white",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2980b9", "#2c3e50"],
    content: "So cloudy -.-",
  },
};

export default function weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons size={90} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.text}>{temp}°</Text>
      </View>
      <View style={styles.halfcontainer}>
        <Text style={styles.text}>{weatherOptions[condition].content}</Text>
      </View>
    </LinearGradient>
  );
}

weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    color: "white",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
