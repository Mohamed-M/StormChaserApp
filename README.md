![Storm Chaser Logo](./assets/images/typhoon.png)
# Storm Chaser App

A cross-platform React Native application designed for storm chasers to monitor local weather conditions, capture storm photographs, and document storm observations in the field.

The app uses device geolocation and the OpenWeather API to retrieve current weather information, while integrating camera functionality to capture photos and attach detailed meteorological and location-based metadata.

[Download Demo Video (MP4)](./StormChaser-Demo-Video.MP4)

## Key Features
- **Live Weather Data**: Retrieve and display current weather conditions based on the device's location.

- **Storm Documentation**: Capture photographs and record weather conditions, location, GPS coordinates, date, time, notes, and storm classification.

- **Storm Management**: Review and delete documented storm entries.

- **Location Services**: Use device geolocation to provide location-specific weather information.

- **User Experience**: Dark mode support, skeleton loading screens, pull-to-refresh, and intuitive tab-based navigation.

- **Mock Data**: Simulated weather responses for development and testing without requiring an API key.

--- 

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
   yarn run start
   ```
   
3. API
- I used OpenWeatherAPI (https://openweathermap.org/)
- Add your API key in the (tabs)/_camera.tsx file at line 27
- I also have a mock data that mimics OpenWeatherAPI response, if needed (line 35 in (tabs)/_camera.tsx, comment out the API call and just run the dispatch in line 35, and remove currentLocation dependency in line 36 and instead add mockData dependency instead)

## Tools
- Expo 58
- File-based routing using `Stacks` and `Tabs`
- Redux Toolkit for state management
- `expo-location` for geolocation
- `expo-camera` for taking the picture
