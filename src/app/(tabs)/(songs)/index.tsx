import { TracksList } from "@/app/components/TracksList"
import { defaultStyles } from "@/app/styles"
import { ScrollView, View } from "react-native"



const SongsScreen = () =>{
    return (<View style={defaultStyles.container}>
        <ScrollView>
            <TracksList scrollEnabled={false} />
        </ScrollView>
    </View>)
}

export default SongsScreen