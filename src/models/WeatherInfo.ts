export interface WeatherInfo {
    base: string;
    clouds: {
        all: number;
    }
    cod: number;
    coord: {
        lat: number;
        lon: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
    };
    name: string;
    sys: {};
    weather: [{
        description: string;
        icon: String;
        id: number
        main: string
    }],
    wind: {
        speed: number;
        deg: number;
        gust: number;
    }
}