import { StyleSheet } from "react-native";
import { BasicStyle, LightTheme, ThemeColors } from "../../styles";
import { wp } from "../../utils/style.utils";

const styles = StyleSheet.create({
    wrapper: {
        ...BasicStyle.flexDirectionRow,
        backgroundColor: ThemeColors.White,
        borderWidth: 1,
        borderColor: LightTheme.Silver,
        borderRadius: wp(5),
        zIndex: 10,
    },

    input: {
        color: LightTheme.TextPrimary,
        fontSize: wp(14),
        ...BasicStyle.flexOne,
        paddingLeft: wp(16)
    },
    iconContainer: {
        ...BasicStyle.flexDirectionRow,
        ...BasicStyle.justifyContentCenter,
        marginTop: wp(12),
        width: wp(45)
    },
    icon: {
        width: wp(18),
        height: wp(18),
        tintColor: LightTheme.TextSecondary
    },
    listRow: {
        flex: 1,
        backgroundColor: ThemeColors.White,
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: wp(10)
    },
    imageContainerStyle: {
        width: wp(14),
        height: wp(14),
    },
    clearView: {
        position: 'absolute',
        top: wp(5),
        right: wp(5)
    }
});

export default styles;
