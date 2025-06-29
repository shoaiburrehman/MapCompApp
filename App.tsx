import React from "react";
import { Platform, StatusBar, StyleSheet, UIManager } from "react-native";

import { LightTheme } from "./src/styles";
import AppNavigator from "./src/navigation/AppNavigator";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {

    return (
        <React.Fragment>
            <StatusBar backgroundColor={LightTheme.BodyPrimary} barStyle={"dark-content"} />
            <AppNavigator />
        </React.Fragment>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LightTheme.BodyPrimary
    }
});

export default App;
