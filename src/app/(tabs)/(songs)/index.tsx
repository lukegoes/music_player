import React from "react";
import { View } from "react-native";
import { TracksList } from "@/app/components/TracksList";
import { defaultStyles } from "@/app/styles";

const SongsScreen = () => {
    return (
        <View style={[defaultStyles.container, { paddingHorizontal: 16 }]}>
            <TracksList contentInsetAdjustmentBehavior="automatic" />
        </View>
    );
};

export default SongsScreen;
