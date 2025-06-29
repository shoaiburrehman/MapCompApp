import { FlexStyle, ImageStyle, Insets, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { ThemeColors } from "./colors";
import { wp } from "../utils/style.utils";

type BasicStyleTypes = {
    justifyContentStart: FlexStyle;
    justifyContentCenter: FlexStyle;
    justifyContentEnd: FlexStyle;
    justifyContentBetween: FlexStyle;
    justifyContentAround: FlexStyle;
    alignItemsStart: FlexStyle;
    alignItemsCenter: FlexStyle;
    alignItemsEnd: FlexStyle;
    alignSelfCenter: FlexStyle;
    alignSelfEnd: FlexStyle;
    alignSelfStart: FlexStyle;
    justifyContentEvenly: FlexStyle;
    flexDirectionRow: FlexStyle;
    flexOne: FlexStyle;
    flexDirectionCol: FlexStyle;
    halfWidth: FlexStyle;
    flexOneFullWidth: FlexStyle;
    flexGrow: FlexStyle;
    flexBasis10: FlexStyle;
    flexBasis20: FlexStyle;
    flexBasis78: FlexStyle;
    flexBasis75: FlexStyle;
    flexBasis70: FlexStyle;
    flexBasis80: FlexStyle;
    flexBasis90: FlexStyle;
    flexWrap: FlexStyle;
    rowCenter: FlexStyle;
    rowCenterBetween: FlexStyle;
    rowCenterenter: FlexStyle;
    flexOneCenter: FlexStyle;

    positionRelative: FlexStyle;
    positionAbsolute: FlexStyle;

    height0: FlexStyle;
    height80: FlexStyle;
    height100: FlexStyle;

    marginTop0: FlexStyle;

    width10: FlexStyle;
    width20: FlexStyle;
    width30: FlexStyle;
    width40: FlexStyle;
    width50: FlexStyle;
    width60: FlexStyle;
    width70: FlexStyle;
    width80: FlexStyle;
    width90: FlexStyle;
    width100: FlexStyle;
    maxWidth10p: FlexStyle;
    maxWidth20p: FlexStyle;
    maxWidth30p: FlexStyle;
    maxWidth40p: FlexStyle;
    maxWidth50p: FlexStyle;
    maxWidth60p: FlexStyle;
    maxWidth70p: FlexStyle;
    maxWidth80p: FlexStyle;
    maxWidth90p: FlexStyle;
    maxWidth100p: FlexStyle;

    opacity50: ViewStyle;
    opacity60: ViewStyle;
    minHeight1: FlexStyle;

    textCenter: TextStyle;
    textLeft: TextStyle;
    textDecorationUnderline: TextStyle;
    textRight: TextStyle;
    textTransformCapitalize: TextStyle;
    textTransformUppercase: TextStyle;
    textTransformLowercase: TextStyle;

    backgroundColorTransparent: ViewStyle;

    imageStyle: FlexStyle | ImageStyle;
    resizeContain: ImageStyle;
    resizeCover: ImageStyle;

    dNone: FlexStyle;
    hitSlop: Insets;
    dropShadow: FlexStyle | ViewStyle;
};

export default StyleSheet.create<BasicStyleTypes>({
    // ========= Flex ================= //
    justifyContentStart: {
        justifyContent: "flex-start"
    },
    justifyContentCenter: {
        justifyContent: "center"
    },
    justifyContentEnd: {
        justifyContent: "flex-end"
    },
    justifyContentBetween: {
        justifyContent: "space-between"
    },
    justifyContentAround: {
        justifyContent: "space-around"
    },
    alignItemsStart: {
        alignItems: "flex-start"
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    alignSelfCenter: {
        alignSelf: "center"
    },
    alignSelfEnd: {
        alignSelf: "flex-end"
    },
    alignSelfStart: {
        alignSelf: "flex-start"
    },
    justifyContentEvenly: {
        justifyContent: "space-evenly"
    },
    flexDirectionRow: {
        flexDirection: "row"
    },
    flexOne: {
        flex: 1
    },
    flexDirectionCol: {
        flexDirection: "column"
    },
    halfWidth: {
        width: "50%"
    },
    flexOneFullWidth: {
        width: "100%",
        flex: 1
    },
    flexGrow: {
        flexGrow: 1
    },
    flexBasis10: {
        flexBasis: "10%"
    },
    flexBasis20: {
        flexBasis: "20%"
    },
    flexBasis78: {
        flexBasis: "78%"
    },
    flexBasis75: {
        flexBasis: "75%"
    },
    flexBasis70: {
        flexBasis: "70%"
    },
    flexBasis80: {
        flexBasis: "80%"
    },
    flexBasis90: {
        flexBasis: "90%"
    },

    flexWrap: {
        flexWrap: "wrap"
    },

    rowCenter: {
        flexDirection: "row",
        alignItems: "center"
    },

    rowCenterBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowCenterenter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    flexOneCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // ========= Position ================= //
    positionRelative: {
        position: "relative"
    },
    positionAbsolute: {
        position: "absolute"
    },
    // ========= Height ================= //
    height0: {
        height: 0
    },
    height80: {
        height: "80%"
    },
    height100: {
        height: "100%"
    },
    // ========= Margin ================= //

    marginTop0: {
        marginTop: 0
    },
    // ========= Width ================= //
    width10: {
        width: "10%"
    },
    width20: {
        width: "20%"
    },
    width30: {
        width: "30%"
    },
    width40: {
        width: "40%"
    },
    width50: {
        width: "50%"
    },
    width60: {
        width: "60%"
    },
    width70: {
        width: "70%"
    },
    width80: {
        width: "80%"
    },
    width90: {
        width: "90%"
    },
    width100: {
        width: "100%"
    },
    maxWidth10p: {
        maxWidth: "10%"
    },
    maxWidth20p: {
        maxWidth: "20%"
    },
    maxWidth30p: {
        maxWidth: "30%"
    },
    maxWidth40p: {
        maxWidth: "40%"
    },
    maxWidth50p: {
        maxWidth: "50%"
    },
    maxWidth60p: {
        maxWidth: "60%"
    },
    maxWidth70p: {
        maxWidth: "70%"
    },
    maxWidth80p: {
        maxWidth: "80%"
    },
    maxWidth90p: {
        maxWidth: "90%"
    },
    maxWidth100p: {
        maxWidth: "100%"
    },

    // ========= Opacity ================= //
    opacity50: {
        opacity: 0.5
    },

    opacity60: {
        opacity: 0.6
    },
    minHeight1: {
        minHeight: 1
    },
    // ========= Text ================= //
    textCenter: {
        textAlign: "center"
    },
    textLeft: {
        textAlign: "left"
    },
    textDecorationUnderline: {
        textDecorationLine: "underline"
    },
    textRight: {
        textAlign: "right"
    },
    textTransformCapitalize: {
        textTransform: "capitalize"
    },
    textTransformUppercase: {
        textTransform: "uppercase"
    },
    textTransformLowercase: {
        textTransform: "lowercase"
    },

    // ========= Background Color ================= //

    backgroundColorTransparent: {
        backgroundColor: "transparent"
    },

    // ========= Image ================= //
    imageStyle: {
        width: "100%",
        resizeMode: "contain",
        flex: 1
    },
    resizeContain: {
        resizeMode: "contain"
    },
    resizeCover: {
        resizeMode: "cover"
    },
    // ========= Spacing ================= //
    dNone: {
        display: "none"
    },
    /// ========= HitSlop ================= //
    hitSlop: {
        right: wp(20),
        top: wp(20),
        left: wp(20),
        bottom: wp(20)
    },
    /// ========== DropShadow ===============//
    dropShadow: {
        shadowColor: ThemeColors.Black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2
    }
});
