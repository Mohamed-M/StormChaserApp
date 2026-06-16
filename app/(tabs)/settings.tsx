import {FlatList, Text, View, StyleSheet, RefreshControl, Switch} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import WeatherCard from "@/app/components/WeatherCard";
import {useAppTheme} from "@/app/hooks/ThemeProvider";

export default function StormScreen() {
    const { theme, toggleTheme } = useAppTheme();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === 'light' ? '#FFF' : '#000'}}>
            <View style={styles.container}>
                <Text style={{ color: theme === 'light' ? '#000' : '#FFF'}}>Theme Settings: {theme}</Text>
                <View>
                    <Switch
                        value={theme === 'light'}
                        onValueChange={toggleTheme}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    }
})