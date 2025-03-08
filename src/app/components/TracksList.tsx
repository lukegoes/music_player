import { FlatList, FlatListProps, View } from "react-native";
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from "../styles";
import TrackPlayer, { Track } from "react-native-track-player";
import libraryData from '../../../assets/data/library.json';
import { useEffect, useState } from "react";

export type TracksListProps = Partial<FlatListProps<Track>>;

const ItemDivider = () => {
    return (
        <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
    );
}

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
    const [musicTracks, setMusicTracks] = useState<Track[]>([]);

    useEffect(() => {
        setMusicTracks(libraryData.tracks);
    }, []);

    const handleTrackSelect = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }

    return (
        <FlatList
            data={musicTracks}
            contentContainerStyle={{ paddingTop: 100, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => <TrackListItem track={track} onTrackSelect={handleTrackSelect} />}
            {...flatlistProps}
        />
    );
}
