import { StyleSheet } from "react-native";

import { BasicStyle, LightTheme, ThemeColors } from "../../styles";

import { hp, wp } from "../../utils/style.utils";
import basicStyle from "../../styles/basicStyle";

const styles = StyleSheet.create<any>({
    wrapper: {
        flex: 1,
        backgroundColor: ThemeColors.White
    },
    headerContainerStyle: {
        marginTop: hp(25),
        marginLeft: wp(20)
    },
    locationBtn: {
        alignSelf: "flex-end",
        width: wp(56),
        height: wp(56),
        borderRadius: wp(28),
        marginBottom: hp(60),
        backgroundColor: LightTheme.Primary,
        borderColor: LightTheme.Primary
    },
    container: {
        flex: 1,
        marginTop: hp(30),
        marginHorizontal: wp(25)
    },
    logo: {
        alignSelf: "center",
        marginTop: hp(10),
        marginBottom: hp(20)
    },
    location: {
        position: "absolute",
        left: wp(15),
        top: hp(18),
        width: wp(17),
        height: wp(17),
        zIndex: 5
    },
    imageStyle: {
        width: wp(17),
        height: wp(17)
    },
    inputStyles: {
        container: {
            marginTop: hp(2),
            // marginBottom: hp(20),
            flex: 0,
            padding: 0
        },
        textInput: {
            fontSize: wp(14),
            paddingRight: wp(18),
            paddingLeft: wp(40),
            color: LightTheme.Primary,
            height: wp(50),
            borderRadius: wp(15),
            backgroundColor: ThemeColors.White,
            shadowColor: ThemeColors.Black,
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 6
        },
        row: {
            padding: 0
        },
        listView: {
            marginHorizontal: wp(5)
        },
        separator: {
            // marginHorizontal: wp(6),
            height: wp(1),
            backgroundColor: ThemeColors.Black
        }
    },
    containerStyle: {
        marginVertical: hp(20)
    },
    /////
    scrollContainer: {
        // position: 'absolute',
        flex: 1,
        justifyContent: "space-between",
        marginVertical: hp(40),
        marginHorizontal: wp(25),
        // width: '87%',
        // height: '88%',
        zIndex: 5
    },
    autocompleteContainer: {
        marginTop: hp(50),
        marginHorizontal: wp(25),
        zIndex: 6,
        // margin: 20,
    },
    bottomContainer: {
        // flex: 1,
        position: "absolute",
        width: "87%",
        bottom: 0,
        // justifyContent: "flex-end",
        marginBottom: hp(20),
        marginHorizontal: wp(25)
    },
    buttonContainer: {
        backgroundColor: LightTheme.Primary,
        borderColor: ThemeColors.Black
        // margin: 20,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject
        // flex: 1,
    },
    map: {
        height: "100%"
        // flex: 1,
    },
    imageContainerStyle: {
        position: "absolute",
        top: "46%",
        left: "46%",
        zIndex: 1
    },
    imageStyles: {
        width: wp(30),
        height: wp(30)
    },
    locationWrapper: {
        width: wp(40),
        height: wp(40),
        alignSelf: 'flex-end',
        backgroundColor: LightTheme.Primary,
        borderRadius: wp(5),
        marginBottom: wp(15),
        ...BasicStyle.justifyContentCenter,
        ...BasicStyle.alignItemsCenter,
        ...BasicStyle.positionRelative
    },
});

export default styles;
