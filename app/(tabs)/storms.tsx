import {FlatList, Text, View, StyleSheet, RefreshControl} from 'react-native';
import {useSelector} from "react-redux";
import {SafeAreaView} from "react-native-safe-area-context";
import WeatherCard from "@/app/components/WeatherCard";
import {useEffect, useState} from "react";
import {useRefetch} from "expo-router/build/rsc/router/host";
import {useAppTheme} from "@/app/hooks/ThemeProvider";
import StormSkeleton from "@/app/components/StormSkeleton";

export default function StormScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const { storms } = useSelector(state => state.storms);
  const { theme } = useAppTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (storms.length > 0) {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
        return () => clearTimeout(timer);
    }
  }, [storms]);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  }

  if (storms.length < 1) {
      return (
          <SafeAreaView style={{ flex: 1, backgroundColor: theme ===  'light' ? "#FFF" : "#000" }}>
              <View style={styles.container}>
                  <Text style={{ color: theme ===  'light' ? "#000" : "#fff" }}>No Storms Saved</Text>
              </View>
          </SafeAreaView>
      )
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme ===  'light' ? "#FFF" : "#000"}]}>
        {loading ? <StormSkeleton /> : (
             <FlatList
              data={storms}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View>
                  <WeatherCard weather={item} />
                </View>
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
            )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})