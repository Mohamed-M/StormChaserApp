import { Alert } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useGeoLocation = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== "granted") {
                    Alert.alert("Permission denied", "Location permission is required");
                    setErrorMsg("Permission denied");
                    return;
                }

                const location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                });

                setCurrentLocation(location);
            } catch (error: any) {
                Alert.alert("Error", error.message);
                setErrorMsg(error.message);
            }
        })();
    }, []);

    return { currentLocation, errorMsg };
};

export default useGeoLocation;