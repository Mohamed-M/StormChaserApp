import { useAppTheme } from "@/app/hooks/ThemeProvider";
import { StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function StormScreen() {
    const { theme, toggleTheme } = useAppTheme();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === 'light' ? '#FFF' : '#000'}}>
            <Text style={{fontSize: 40, padding: 20, fontWeight: 'bold', alignSelf: 'flex-start', color: theme === 'light' ? '#000' : '#FFF'}}>Settings</Text>

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