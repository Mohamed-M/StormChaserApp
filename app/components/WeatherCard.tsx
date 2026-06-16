import {Text, View, StyleSheet, Image} from "react-native";
import {Storm} from "@/app/models/WeatherData";


const WeatherCard = ({ weather } : Storm) => {
    return (
        <View style={styles.container}>
            {weather.image !== undefined && (
                <View>
                    <Image
                        source={{ uri: weather.image }}
                        style={{
                            width: 300,
                            height: 200
                        }}
                    />
                </View>
            )}
            <View>
                <Text>Current Location: {weather.data.name}</Text>
                <Text>Date and Time: {new Date(Date.now()).toString()}</Text>
                <Text>Temperature: {Math.round(weather.data.main.temp)}°</Text>
                <Text>Conditions: {(weather.data.weather[0].description)}</Text>
                <Text>Longtitude: {weather.data.coord.lon}</Text>
                <Text>Latitude: {weather.data.coord.lat}</Text>
                <Text>Wind Speed: {weather.data.wind.speed} m/s</Text>
                <Text>Wind Pressure: {weather.data.main.pressure} hPa</Text>
                <Text>Gust: {weather.data.wind.gust} m/s</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
        alignItems: "center",
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray'
    }
})

export default WeatherCard;
