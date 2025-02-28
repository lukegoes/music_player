import { FlatList, FlatListProps, View } from "react-native"
import library from "@/assets/data/library.json"
import { TrackListItem } from "./TrackListItem"
import { utilsStyles } from "../styles"

export type TracksListProps = Partial<FlatListProps<any>>

const ItemDivider = () => {
    return (
        <View style={{...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60}} />
    );
}

export const TracksList = ({...flatlistProps}: TracksListProps) =>{
    return <FlatList 
        data={library} 
        renderItem={({item: track}) => <TrackListItem track={{
            ...track,
            image: track.artwork,
        }} />} 
        keyExtractor={(item, index) => index.toString()} 
        nestedScrollEnabled={true} 
        contentContainerStyle={{ paddingTop: 90, paddingBottom: 70, flexGrow: 1 }} 
        keyboardShouldPersistTaps="handled"
        ItemSeparatorComponent={ItemDivider}
        {...flatlistProps}
    />
}