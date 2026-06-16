export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    main: {
        temp: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
        gust: number;
    };
    name: string;
}

export interface Storm {
    id: string;
    image: string;
    createdAt: string;
    weatherData: WeatherData;
}