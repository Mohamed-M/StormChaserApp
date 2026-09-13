# Storm Chaser App

This is the Storm Chasers App by Mohamed Mohamud (contact@mohamed-m.ca)

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

## Info
- Expo 54 for cross platform support
- File-based routing using Stacks and Tabs
- Redux Toolkit for state management
- expo-location for GeoLocation
- expo-camera for taking the picture

# Features
- ✅ Fetch and display current weather data based on the device's current location
- ✅ Display key meteorological information relevant to storm chasers
- ✅ Show a "Not found" view if weather data cannot be retrieved
- ✅ Capture photos using the device camera 
- ✅Add metadata to photos including: 
  - ✅Weather conditions 
  - ✅Location 
  - ✅coordinates 
  - ✅Date and time 
  - ✅Notes/description 
  - ✅Storm type/classification
- ✅ Delete storms from the list
- ✅The ability to navigate between different sections of the app with intuitive UI/UX
- ✅ Mock Data
- ✅ Pull To Refresh
- ✅ Dark Mode Support
- ✅ Skeleton Screen
- ✅ Jest Unit Test
