import { useEffect, useState } from "react";
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";
import Config from "../../Config";

export const LOCATION_STATUS = {
    GRANTED: 1,
    DENIED: 2
};

Geocoder.init(Config.GOOGLE_GEOCODING_API_KEY);

export const hasLocationPermission = async (request = true) => {
    if (Platform.OS === "ios") {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
    }

    if (Platform.OS === "android" && Platform.Version < 23) {
        return true;
    }

    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (!request) {
        return hasPermission;
    }

    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show("Location permission denied by user.", ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show("Location permission revoked by user.", ToastAndroid.LONG);
    }

    return false;
};

const hasPermissionIOS = async () => {
    const openSetting = () => {
        Linking.openSettings().catch(() => {
            Alert.alert("Unable to open settings");
        });
    };
    const status = await Geolocation.requestAuthorization("whenInUse");

    if (status === "granted") {
        return true;
    }

    if (status === "denied") {
        Alert.alert("Location permission denied");
    }

    if (status === "disabled") {
        Alert.alert("Turn on Location Services to allow FRNDZ to determine your location.", "", [
            { text: "Go to Settings", onPress: openSetting },
            { text: "Don't Use Location", onPress: () => {} }
        ]);
    }
    return false;
};

const useLocation = (initialFetch = true) => {
    useEffect(() => {
        if (initialFetch) getLocation();
    }, []);

    const [locationData, setLocationData] = useState<any>({
        status: null,
        location: {},
        formattedAddress: "",
        geoCodingResponse: {}
    });
    const [locationFetching, setLocationFetching] = useState<boolean>(false);

    const getAddressFromCoordinates = async (position: any) => {
        try {
            const { coords } = position;
            let response = await Geocoder.from(coords.latitude, coords.longitude);
            return response;
        } catch (e) {
            console.log(e);
        }
    };

    const getLocation = async () => {
        setLocationFetching(true);
        return new Promise(async (resolve, reject) => {
            try {
                const hasPermission = await hasLocationPermission();

                if (!hasPermission) {
                    let preparedData = {
                        ...locationData,
                        status: LOCATION_STATUS.DENIED,
                        location: null
                    };
                    setLocationData(preparedData);
                    resolve(preparedData);
                    setLocationFetching(false);
                    return;
                }
                Geolocation.getCurrentPosition(
                    async (position) => {
                        let geoCodingResponse = await getAddressFromCoordinates(position);
                        let formattedAddress = geoCodingResponse?.results[0]?.formatted_address;
                        let preparedData = {
                            ...locationData,
                            status: LOCATION_STATUS.GRANTED,
                            location: position,
                            formattedAddress,
                            geoCodingResponse
                        };
                        setLocationData(preparedData);
                        resolve(preparedData);
                        setLocationFetching(false);
                    },
                    (error) => {
                        let preparedData = {
                            ...locationData,
                            status: LOCATION_STATUS.DENIED,
                            error
                        };
                        setLocationData(preparedData);
                        reject(preparedData);
                        setLocationFetching(false);
                    },
                    {
                        accuracy: {
                            android: "high",
                            ios: "best"
                        },
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                        distanceFilter: 0
                    }
                );
            } catch (e) {
                reject(e);
                setLocationFetching(false);
            }
        });
    };

    return {
        getLocation,
        locationData,
        locationFetching
    };
};

export default useLocation;
