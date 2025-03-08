import { PlayPauseButton, SkipToNextButton } from "./PlayerControls";
import { unknownTrackImageUri } from "../constants/images";
import { useLastActiveTrack } from "../../hooks/useLastActiveTrack";
import { defaultStyles } from "../styles";
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useActiveTrack } from 'react-native-track-player';
import { StatusBar } from 'react-native';

export const FloatingPlayer = ({ style }: ViewProps) => { 
    const activeTrack = useActiveTrack();
    const lastActiveTrack = useLastActiveTrack();

    console.log("activeTrack:", activeTrack);
    console.log("lastActiveTrack:", lastActiveTrack);

    const displayedTrack = activeTrack ?? lastActiveTrack;

    const trackTitle = displayedTrack?.title ?? "Escolha uma música";
    const trackImageUri = displayedTrack?.artwork ?? unknownTrackImageUri;

    const statusBarHeight = StatusBar.currentHeight || 0;

    return (
        <TouchableOpacity activeOpacity={0.9} style={[styles.container, style, { bottom: 34 + statusBarHeight }]}>
            <FastImage
                source={{
                    uri: trackImageUri,
                }}
                style={styles.trackArtworkImage}
            />

            <View style={styles.trackTitleContainer}>
                <Text style={styles.trackTitle}>{trackTitle}</Text>
            </View>

            <View style={styles.trackControlsContainer}>
                <PlayPauseButton iconSize={24} />
                <SkipToNextButton iconSize={22} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,
        justifyContent: 'space-between',
        position: 'absolute',
        left: 8,
        right: 8,
    },
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10,
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    trackControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
});
