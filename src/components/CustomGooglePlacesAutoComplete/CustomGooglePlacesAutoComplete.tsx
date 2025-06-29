import React, { useEffect, useState } from "react";
import { 
    View, 
    Image, 
    FlexStyle, 
    Dimensions, 
    TouchableOpacity, 
    ScrollView 
} from "react-native";
import {
    GooglePlacesAutocomplete,
    GooglePlaceData,
} from "react-native-google-places-autocomplete";

import { clearSearchHistory, getSearchHistory, removeItemFromSearchHistory } from "../../store/serchHistory.store";
import Config from "../../../Config";
import { Text } from "../Text";
import { Icon } from "../Icon";

import { SCREEN_HEIGHT, SCREEN_WIDTH, wp } from "../../utils/style.utils";
import { LightTheme, ThemeColors } from "../../styles";
import basicStyle from "../../styles/basicStyle";
import styles from "./styles";

type GoogleAutoCompleteProps = {
    onChange?: (val: string) => void;
    containerStyles?: FlexStyle | Array<FlexStyle>;
    value?: string;
    placeholder?: string;
    onSelect: (data: any, details: any) => void;
    onPressSearch?: () => void;
    error?: Boolean;
    label?: string;
};

const LibConfig = {
    key: Config.GOOGLE_GEOCODING_API_KEY,
    language: "en"
};

const SearchedListRow = ({ data, index }: { data: GooglePlaceData, index: number }) => {
    return (
        <View key={index} style={styles.listRow}>
            <Text
                textProps={{ numberOfLines: 1 }}
                width={SCREEN_WIDTH - wp(90)}
                size={12}
                color={ThemeColors.Black}
            >
                {data?.description}
            </Text>
        </View>
    );
};

const CustomGooglePlacesAutoComplete: React.FC<GoogleAutoCompleteProps> = (props) => {
    const {
        onChange = () => {},
        onPressSearch,
        containerStyles = {},
        value = "",
        placeholder = "",
        onSelect = () => {},
        error,
        label
    } = props;
    const [history, setHistory] = useState<any[]>([]);
    const [showHistory, setShowHistory] = useState(true);

    useEffect(() => {
        loadHistory();
    }, []);

    useEffect(() => {
        if (!value) setShowHistory(true);
        else setShowHistory(false);
    }, [value]);

    const loadHistory = async () => {
        const stored = await getSearchHistory();
        setHistory(stored);
    };

    const onSelecthandle = async (data: any, details: any) => { 
        onSelect(data, details); 
        setTimeout(() => loadHistory(), 100); 
    }

    const handleHistory = (item: any) => {
        let details = {
            lat: item?.latitude,
            lng: item?.longitude,
            place_id: item?.place_id,
            description: item?.description
        }
        onSelect(null, details);
        onChange(item.description);
        setTimeout(() => loadHistory(), 100)
    }

    const handleClearHistory = async () => {
        await clearSearchHistory();
        loadHistory();
    }

    return (
        <View style={containerStyles}>
            <View style={styles.labelContainer}>
                {!!label && (
                    <Text regular size={14} color={LightTheme.TextPrimary}>
                        {label}
                    </Text>
                )}
            </View>

            <View style={styles.wrapper}>
                <GooglePlacesAutocomplete
                    placeholder={placeholder}
                    fetchDetails={true}
                    predefinedPlaces={[]}
                    enablePoweredByContainer={false}
                    textInputProps={{
                        value: value,
                        onChangeText: (text: string) => onChange(text),
                        placeholderTextColor: LightTheme.TextSecondary,
                        selectionColor: LightTheme.Primary,
                        autoFocus: false,
                    }}
                    keyboardShouldPersistTaps='always'
                    styles={{
                        description: { color: LightTheme.TextPrimary },
                        textInput: styles.input,
                        style: styles.input
                    }}
                    minLength={1}
                    onPress={(data, details = null) => onSelecthandle(data, details) }
                    query={LibConfig}
                    debounce={500}
                    listViewDisplayed={showHistory}
                    isRowScrollable={true}
                    onTimeout={() => console.log('timeout')}
                    onNotFound={() => console.log('not found')}
                    onFail={(error) => console.error('error: ', error)}
                    renderRow={(data, index) => <SearchedListRow data={data} index={index} />}
                    listEmptyComponent={() => (
                        <View style={{flex: 1, backgroundColor: ThemeColors.White, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>No results were found</Text>
                        </View>
                    )}
                />

                <View style={styles.iconContainer}>
                    <Image
                        source={require("../../assets/icons/marker.png")}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </View>
            </View>
            {showHistory && history.length > 0 && (
                <>
                    <ScrollView bounces={false} style={{maxHeight: SCREEN_HEIGHT * 0.2, backgroundColor: ThemeColors.White}}>
                        {history.map((item, index) => {  
                            return(
                                <View key={item.place_id}>
                                    <TouchableOpacity
                                        onPress={handleHistory}
                                        activeOpacity={0.8}
                                        style={[styles.wrapper, basicStyle.flexDirectionRow, basicStyle.alignItemsCenter, { borderRadius: 0, padding: wp(12) }]}
                                    >
                                        <Text width={SCREEN_WIDTH - wp(107)} size={12} color={ThemeColors.Black}>
                                            {item.description}
                                        </Text>
                                        <Icon
                                            source={require("../../assets/icons/close.png")}
                                            width={wp(14)}
                                            height={wp(14)}
                                            hitSlop
                                            color={LightTheme.TextSecondary}
                                            containerStyles={styles.imageContainerStyle}
                                            onPress={async () => {
                                                await removeItemFromSearchHistory(item.place_id);
                                                loadHistory();
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </ScrollView>
                    <View style={[styles.wrapper, { borderRadius: 0, padding: wp(12) }]}>
                        <TouchableOpacity style={styles.clearView} onPress={handleClearHistory}>
                        <Text size={12} color={LightTheme.Primary} underlined>
                            Clear History
                        </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {Boolean(error) && (
                <Text color={ThemeColors.Red} regular size={14}>
                    {error}
                </Text>
            )}
        </View>
    );
};

export default CustomGooglePlacesAutoComplete;

