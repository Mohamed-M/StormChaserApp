import CustomButton from "@/app/components/CustomButton";
import StormSkeleton from "@/app/components/StormSkeleton";
import WeatherCard from "@/app/components/WeatherCard";
import { useAppTheme } from "@/app/hooks/ThemeProvider";
import useGeoLocation from "@/app/hooks/useGeoLocation";
import { addToStorms } from "@/app/redux/reducers/stormReducer";
import { fetchWeather } from "@/app/redux/actions/weatherActions";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";


export default function StormScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const weather = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const cameraRef = useRef(null);
    const { currentLocation } = useGeoLocation();
    const { theme } = useAppTheme();

    useEffect(() => {
        // Add API KEY
        const apiKey = '72ec5b108e49622eafc3a7523608d58a';
        if (currentLocation) {
          const lat = currentLocation.coords.latitude;
          const lon = currentLocation.coords.longitude;
          dispatch(fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`));
        }

        // Mock Data if needed, add to dependencies below as well
        // dispatch(fetchWeather(mockData));
    }, [currentLocation]);

    const addToStormsList = async () => {
        try {
            if (!cameraRef.current) {
                console.log('Camera not ready')
                return;
            }

            const photo = await cameraRef.current.takePictureAsync({
                quality: 0.8,
                skipProcessing: true
            })

            dispatch(addToStorms({
                id: Date.now(),
                image: photo.uri,
                data: weather.data,
                capturedAt: new Date().toISOString()
            }))
        }
        catch (error) {
            console.log(error)
        }
    }

    if (!permission) return <View />;

    if (!permission.granted) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={{ marginBottom: 20 }}>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title={'grant permission'} />
                </View>
            </SafeAreaView>
        )
    }

    if (!weather) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text>Not Found</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CameraView
                ref={cameraRef}
                facing="back"
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.container}>
                {(weather.fetchStatus === 'loading' || weather.fetchStatus === '') && (
                    <StormSkeleton />
                )}

                {weather.fetchStatus === 'success' && (
                    <>
                        <View>
                            <WeatherCard weather={weather} />
                            <CustomButton
                                containerStyles={[styles.addButtonContainer, { backgroundColor: theme === 'light' ? "#FF0000" : '#000'}]}
                                textStyles={styles.addButtonText}
                                title="Add to Storms"
                                icon={false}
                                onPress={addToStormsList}
                            />
                        </View>
                    </>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonContainer: {
        padding: 20,
        backgroundColor: 'red',
        borderColor: '#fff',
        borderRadius: 10
    },
    addButtonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff'
    },
})