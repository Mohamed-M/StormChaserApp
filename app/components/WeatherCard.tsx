import CustomButton from "@/app/components/CustomButton";
import { useAppTheme } from "@/app/hooks/ThemeProvider";
import { Storm } from "@/app/models/WeatherData";
import { removeFromStorms } from "@/app/services/stormSlice";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";


const WeatherCard = ({ weather } : Storm) => {
    const { theme } = useAppTheme();
    const dispatch = useDispatch();

    const remove = (weather: Storm) => {
        dispatch(removeFromStorms(weather))
    }

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
                <Text>Date and Time: {new Date(Date.now()).toLocaleDateString()}</Text>
                <Text>Temperature: {Math.round(weather.data.main.temp)}°</Text>
                <Text>Conditions: {(weather.data.weather[0].description)}</Text>
                <Text>Longitude: {weather.data.coord.lon}</Text>
                <Text>Latitude: {weather.data.coord.lat}</Text>
                <Text>Wind Speed: {weather.data.wind.speed} m/s</Text>
                <Text>Wind Pressure: {weather.data.main.pressure} hPa</Text>
                <Text>Gust: {weather.data.wind.gust} m/s</Text>
            </View>

            {weather.image !== undefined && (
                <CustomButton
                    containerStyles={[styles.removeButtonContainer, { backgroundColor: theme === 'light' ? "#FF0000" : '#000'}]}
                    textStyles={styles.removeButtonText}
                    title="Remove"
                    onPress={() => remove(weather)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 20
    },
    removeButtonContainer: {
        padding: 20,
        backgroundColor: 'red',
        borderColor: '#fff',
        borderRadius: 10
    },
    removeButtonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff'
    },
})

export default WeatherCard;
