import React from "react";
import { TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { addToSearchHistory, getSearchHistory, shiftToTopHistory } from "../../store/serchHistory.store";
import { CustomGooglePlacesAutoComplete } from "../../components/CustomGooglePlacesAutoComplete";
import useCustomtMapContainer from "../../hooks/useCustomMapContainer";
import { Icon } from "../../components/Icon";
import { wp } from "../../utils/style.utils";
import styles from "./styles";

const LocationIcon = require("../../assets/icons/geolocation.png");
const LocationMarker = require("../../assets/icons/location-marker.png");

const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

const Home: React.FC = () => {
    const {
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
    } = useCustomtMapContainer();

    return (
        <View style={styles.wrapper}>
            <View style={styles.mapContainer}>
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={INITIAL_REGION}
                    showsMyLocationButton={false}
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                    onRegionChangeComplete={onRegionChangeComplete}
                    showsScale={true}
                    // region={meLocation}
                    customMapStyle={[]}
                    userInterfaceStyle={"dark"}
                />
                <Icon
                    source={LocationMarker}
                    width={wp(30)}
                    height={wp(30)}
                    containerStyles={styles.imageContainerStyle}
                />
            </View>
            <View style={styles.autocompleteContainer}>
                <CustomGooglePlacesAutoComplete
                    placeholder="Enter Your Address"
                    value={address}
                    onChange={(val) => { console.log('a: ', val); setAddress(val) }}
                    onSelect={async (data, details: any = null) => {
                        setAddress(details?.formatted_address);

                        animateToRegion({
                            latitude: data?.place_id ? details?.geometry?.location?.lat : details?.lat,
                            longitude: data?.place_id ? details?.geometry?.location?.lng : details?.lng,
                        });
                        setAddressObj({
                            latitude: data?.place_id ? details?.geometry?.location?.lat : details?.lat,
                            longitude: data?.place_id ? details?.geometry?.location?.lng : details?.lng,
                            address: details?.formatted_address
                        });
                        if(data?.place_id){
                            const stored = await getSearchHistory();
                            const payload = {
                                place_id: stored.length + 1,
                                description: details?.formatted_address,
                                latitude: details?.geometry?.location?.lat,
                                longitude: details?.geometry?.location?.lng
                            }
                            await addToSearchHistory(payload);
                        } else {
                            await shiftToTopHistory(details)
                        }
                    }}
                />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.locationWrapper}
                    onPress={getLocation}
                >
                    <Icon source={LocationIcon} width={wp(18)} height={wp(30)} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
