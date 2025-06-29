import { useEffect, useRef, useState } from "react";
import { AddressComponent } from "react-native-google-places-autocomplete";
import MapView, { Region } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import { CustomMapFormType } from "../screens/Home/types";
import useLocation from "../services/location.service";

export default function useCustomtMapContainer() {
    const { locationData, locationFetching, getLocation } = useLocation();
    const mapRef = useRef<MapView>(null);
    const [addressObj, setAddressObj] = useState<CustomMapFormType>();
      const [address, setAddress] = useState("");

    useEffect(() => {
        if (locationData.location?.coords) {
            const state = locationData.geoCodingResponse?.results[0]?.address_components.find(
                (item: AddressComponent) => item.types.includes("administrative_area_level_1")
            );
            const city = locationData.geoCodingResponse?.results[0]?.address_components.find(
                (item: AddressComponent) => item.types.includes("locality")
            );
            const country = locationData.geoCodingResponse?.results[0]?.address_components.find(
                (item: AddressComponent) => item.types.includes("country")
            );

            setAddressObj({
                latitude: locationData.location?.coords?.latitude,
                longitude: locationData.location?.coords?.longitude,
                address: locationData.geoCodingResponse?.results[0]?.formatted_address
            });

            animateToRegion(locationData.location?.coords);
        }
    }, [
        locationData.location?.coords?.latitude,
        locationData.location?.coords?.longitude,
        locationFetching
    ]);

    const onRegionChangeComplete = async (region: Region) => {
        let response = await Geocoder.from(region?.latitude, region?.longitude);

        // changeFormValues(response);
        const state = response?.results[0]?.address_components.find((item) =>
            item.types.includes("administrative_area_level_1")
        );
        const city = response?.results[0]?.address_components.find((item) =>
            item.types.includes("locality")
        );
        const country = response?.results[0]?.address_components.find((item) =>
            item.types.includes("country")
        );

        setAddressObj({
            latitude: String(region?.latitude),
            longitude: String(region?.longitude),
            address: response?.results[0]?.formatted_address
        });
    };

    const animateToRegion = (value: { latitude: any; longitude: any }) => {
        mapRef?.current?.animateToRegion(
            {
                latitude: value.latitude,
                longitude: value.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            1000
        );
    };


    return {
        mapRef,
        addressObj,
        locationData,
        locationFetching,
        address, 
        setAddress,
        getLocation,
        animateToRegion,
        onRegionChangeComplete,
        setAddressObj,
    };
}
