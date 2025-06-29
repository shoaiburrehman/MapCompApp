import React from "react";
import {
    View,
    Image,
    StyleSheet,
    ImageSourcePropType,
    FlexStyle,
    ImageStyle,
    TouchableOpacity,
    GestureResponderEvent
} from "react-native";

import { wp } from "../../utils/style.utils";

import { ThemeColors } from "../../styles";

type IconProps = {
    width?: number;
    height?: number;
    color?: ThemeColors | string;
    source: ImageSourcePropType | any;
    containerStyles?: FlexStyle;
    imageStyles?: ImageStyle;
    onPress?: (event: GestureResponderEvent) => void;
    onLoadStart?: () => void;
    onLoadEnd?: () => void;
    resizeContain?: boolean;
    activeOpacity?: number;
    hitSlop?: boolean;
};

const Icon: React.FC<IconProps> = (props) => {
    const {
        width,
        height,
        source,
        color,
        containerStyles = {},
        imageStyles = {},
        onPress,
        onLoadStart = () => {},
        onLoadEnd = () => {},
        resizeContain = true,
        hitSlop = false,
        activeOpacity = 0.8
    } = props;

    const isPressable: boolean = !!(onPress && typeof onPress === "function");

    const renderImage = () => (
        <Image
            source={source}
            style={[
                styles.image,
                resizeContain && { resizeMode: "contain" },
                { ...(color && { tintColor: color }), ...imageStyles }
            ]}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
        />
    );

    return isPressable ? (
        <TouchableOpacity
            style={{ width, height, ...containerStyles }}
            onPress={onPress}
            activeOpacity={activeOpacity}
            {...(!!hitSlop && { hitSlop: styles.hitSlop })}
        >
            {renderImage()}
        </TouchableOpacity>
    ) : (
        <View style={{ width, height, ...containerStyles }}>{renderImage()}</View>
    );
};

const styles = StyleSheet.create<any>({
    image: {
        width: "100%",
        flex: 1
    },
    hitSlop: {
        right: wp(20),
        top: wp(20),
        left: wp(20),
        bottom: wp(20)
    }
});

export default Icon;
