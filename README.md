# Storm Chaser App

This is the Storm Chasers App by Mohamed Mohamud (contact@mohamed-m.ca)

Demo video can be downloaded from this repo (https://github.com/Mohamed-M/StormChaserApp/blob/main/Demo%20-%20Mohamed%20Mohamud%20-%20React%20Native%20Assessment.MOV)

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
- I also have a mock data that mimics OpenWeatherAPI response, if needed (line 35 in (tabs)/_camera, comment out the API call and just run the dispatch in line 35, and remove currentLocation dependency in line 36 and instead add mockData dependency instead)

## Info
- Expo 54 for cross platform support
- File-based routing using Stacks and Tabs
- Redux Toolkit for state management
- I intentionally used StyleSheet.create({}) to demonstrate I can write vanilla CSS. I prefer to use TailwindCSS
- expo-location for GeoLocation
- expo-camera for taking the picture
- Jest unit test


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
- ✅The ability to navigate between different sections of the app with intuitive UI/UX
- ⚠️ I couldn't get the data to persist. When I do backend, I usually use an ORM that comes with Rails or Django. I'm not comfortable writing SQL queries and it was time consuming trying to connect my Redux to the AsyncStorage package. When I usually do backend, I just send a payload to a API URL and follow the pattern the backend team uses, not SQL queries. I hope this doesn't hinder my chances.
- ✅ Mock Data 

# Bonus Features
- ✅ Pull To Refresh
- ✅ Dark Mode Support
- ✅ Skeleton Screen
- ✅ Jest Unit Test


## AI Usage
- All the code is hand typed. I used AI for; debugging errors, finding mismatch dependencies, etc. I did not copy or paste any code. I used previous projects as reference.