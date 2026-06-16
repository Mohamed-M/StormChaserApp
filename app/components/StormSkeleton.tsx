import { View, StyleSheet, Text } from "react-native";

export default function StormSkeleton() {
    return (
        <View style={styles.container}>
            <View style={styles.image} />
            <View style={styles.textBlock}>
                <Text style={{ fontSize: 48 }}>Loading...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 40,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray",
    },
    image: {
        width: 300,
        height: 200,
        backgroundColor: "#E0E0E0",
        borderRadius: 10,
    },

    textBlock: {
        width: "100%",
        gap: 10,
        alignItems: "center",
    },
});