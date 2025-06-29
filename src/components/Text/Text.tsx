import React from "react";
import { Text as RNText, StyleSheet, TextStyle, TextProps } from "react-native";

import { FontFamily, FontFamilyPoppins, ThemeColors, types as styleTypes } from "../../styles";
import { wp } from "../../utils/style.utils";


type TextComponentProps = {
    regular?: boolean;
    regularPoppins?: boolean;
    medium?: boolean;
    bold?: boolean;
    boldItalic?: boolean;
    extraBold?: boolean;
    extraLight?: boolean;
    extraLightItalic?: boolean;
    extraBoldItalic?: boolean;
    italic?: boolean;
    light?: boolean;
    lightItalic?: boolean;
    semiBoldItalic?: boolean;
    semiBold?: boolean;
    thin?: boolean;
    thinItalic?: boolean;
    centered?: boolean;
    end?: boolean;
    right?: boolean;
    inverse?: boolean;
    underlined?: boolean;
    textProps?: TextProps;
    color?: ThemeColors | string;
    size?: number;
    weight?: styleTypes.FontWeights;
    leftSpacing?: number;
    rightSpacing?: number;
    topSpacing?: number;
    bottomSpacing?: number;
    letterSpacing?: number;
    style?: TextStyle;
    width?: number | undefined;
    numberOfLines?: number;
    capitalize?: boolean;
    lowerCase?: boolean;
    children: any;
};

const Text: React.FC<TextComponentProps> = (props) => {
    const {
        regular,
        regularPoppins,
        medium,
        bold,
        boldItalic,
        extraBold,
        extraLight,
        extraLightItalic,
        extraBoldItalic,
        italic,
        light,
        lightItalic,
        semiBoldItalic,
        semiBold,
        thin,
        thinItalic,
        centered,
        end,
        right,
        underlined,
        textProps,
        color,
        size,
        weight,
        leftSpacing,
        rightSpacing,
        topSpacing,
        bottomSpacing,
        letterSpacing,
        children,
        width = undefined,
        numberOfLines,
        capitalize,
        lowerCase,
        style = {}
    } = props;
    return (
        <RNText
            numberOfLines={numberOfLines}
            style={[
                styles.default,
                regular && { fontFamily: FontFamily.Regular },
                regularPoppins && { fontFamily: FontFamilyPoppins.Regular },
                medium && { fontFamily: FontFamily.Medium },
                bold && { fontFamily: FontFamily.Bold },
                boldItalic && { fontFamily: FontFamily.BoldItalic },
                extraBold && { fontFamily: FontFamily.ExtraBold },
                extraLight && { fontFamily: FontFamily.ExtraLight },
                extraLightItalic && { fontFamily: FontFamily.ExtraLightItalic },
                extraBoldItalic && { fontFamily: FontFamily.ExtraBoldItalic },
                italic && { fontFamily: FontFamily.Italic },
                light && { fontFamily: FontFamily.Light },
                lightItalic && { fontFamily: FontFamily.LightItalic },
                semiBold && { fontFamily: FontFamily.SemiBold },
                semiBoldItalic && { fontFamily: FontFamily.SemiBoldItalic },
                thin && { fontFamily: FontFamily.Thin },
                thinItalic && { fontFamily: FontFamily.ThinItalic },
                centered && styles.centered,
                end && styles.alignEnd,
                right && styles.right,
                underlined && styles.underlined,
                capitalize && styles.capitalize,
                lowerCase && styles.lowerCase,
                !!color && { color },
                !!size && { fontSize: wp(size) },
                !!weight && { fontWeight: weight },
                !!leftSpacing && { marginLeft: wp(leftSpacing) },
                !!rightSpacing && { marginRight: wp(rightSpacing) },
                !!topSpacing && { marginTop: wp(topSpacing) },
                !!bottomSpacing && { marginBottom: wp(bottomSpacing) },
                !!letterSpacing && { letterSpacing: wp(letterSpacing) },
                !!width && { width: wp(width) },
                style
            ]}
            {...textProps}
        >
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    default: {
        fontFamily: FontFamily.Regular,
        fontSize: wp(16),
        color: ThemeColors.White
    },
    centered: {
        textAlign: "center"
    },
    alignEnd: {
        alignSelf: "flex-end"
    },
    right: {
        textAlign: "right"
    },
    underlined: {
        textDecorationLine: "underline"
    },
    capitalize: {
        textTransform: "capitalize"
    },
    lowerCase: {
        textTransform: "lowercase"
    }
});

export default Text;
