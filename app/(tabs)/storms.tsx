import StormSkeleton from "@/app/components/StormSkeleton";
import WeatherCard from "@/app/components/WeatherCard";
import { useAppTheme } from "@/app/hooks/ThemeProvider";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useStorms } from "../redux/hooks/useStorms";

export default function StormScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const { storms } = useStorms()
  const { theme } = useAppTheme();
  const [loading, setLoading] = useState(true);

  console.log('storms', storms);

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
          <Text style={{fontSize: 40, padding: 20, fontWeight: 'bold', alignSelf: 'flex-start', color: theme === 'light' ? '#000' : '#fff'}}>Storms List</Text>
              <View style={styles.container}>
                  <Text style={{ color: theme ===  'light' ? "#000" : "#fff" }}>No Storms Saved</Text>
              </View>
          </SafeAreaView>
      )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme ===  'light' ? "#FFF" : "#000"}}>
        <Text style={{fontSize: 40, padding: 20, fontWeight: 'bold', alignSelf: 'flex-start', color: theme === 'light' ? '#000' : '#fff'}}>Storms List</Text>
        <View style={styles.container}>
        {loading ? <StormSkeleton /> : (
             <FlatList
              data={storms}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <WeatherCard 
                    weather={item.data}
                    image={item.image} 
                    id={item.id} />
                </View>
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
            )}
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})