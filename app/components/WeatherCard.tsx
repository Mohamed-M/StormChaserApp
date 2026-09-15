import CustomButton from "@/app/components/CustomButton";
import { useAppTheme } from "@/app/hooks/ThemeProvider";
import { Storm } from "@/app/models/WeatherData";
import { removeStorm } from "@/app/redux/reducers/stormReducer";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";


const WeatherCard = ({ weather }) => {
    const { theme } = useAppTheme();
    const dispatch = useDispatch();

    const remove = (weather: Storm) => {
        dispatch(removeStorm(weather))
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
                <Text>
                  <Text style={styles.attr}>Current Location:</Text> {weather.name}</Text>
                <Text>
                  <Text style={styles.attr}>Date and Time:</Text> {new Date(Date.now()).toLocaleDateString()}</Text>
                <Text>
                  <Text style={styles.attr}>Temperature:</Text> {Math.round(weather.main.temp)}°</Text>
                <Text>
                  <Text style={styles.attr}>Conditions:</Text> {(weather.weather[0].description)}</Text>
                <Text>
                  <Text style={styles.attr}>Longitude:</Text> {weather.coord.lon}</Text>
                <Text>
                  <Text style={styles.attr}>Latitude:</Text> {weather.coord.lat}</Text>
                <Text>
                  <Text style={styles.attr}>Wind Speed:</Text> {weather.wind.speed} m/s</Text>
                <Text>
                  <Text style={styles.attr}>Wind Pressure:</Text> {weather.main.pressure} hPa</Text>
                <Text>
                  <Text style={styles.attr}>Gust:</Text> {weather.wind.gust} m/s</Text>
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
        gap: 20,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 20
    },
    attr: {
      fontWeight: 'bold'
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
