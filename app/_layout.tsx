import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import 'react-native-reanimated';
import {store} from "@/app/redux/store";
import { ThemeProvider } from "@/app/hooks/ThemeProvider";
import 'react-native-reanimated';

export default function RootLayout() {
  return (
      <Provider store={store}>
          <ThemeProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
              <StatusBar style="auto" />
          </ThemeProvider>
      </Provider>
  );
}
