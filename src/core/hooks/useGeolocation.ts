import { useState, useEffect } from 'react';

interface GeolocationState {
    loading: boolean;
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    timestamp: number | null;
    error: string | null;
}

export const useGeolocation = (options: PositionOptions = {}): GeolocationState => {
    const [state, setState] = useState<GeolocationState>({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
        error: null,
    });

    useEffect(() => {
        let isMounted = true;
        const onEvent = ({ coords, timestamp }: GeolocationPosition) => {
            if (isMounted) {
                setState({
                    loading: false,
                    timestamp,
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    altitude: coords.altitude,
                    accuracy: coords.accuracy,
                    altitudeAccuracy: coords.altitudeAccuracy,
                    heading: coords.heading,
                    speed: coords.speed,
                    error: null,
                });
            }
        };

        const onEventError = (error: GeolocationPositionError) => {
            if (isMounted) {
                setState(s => ({ ...s, loading: false, error: error.message }));
            }
        };

        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        const watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);

        return () => {
            isMounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, [options]);

    return state;
};
