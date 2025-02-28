import { StackScreenWithSearchBar } from "@/app/constants/layout"
import { defaultStyles } from "@/app/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const ArtistasScreenLayout = () =>{
    return <View style={defaultStyles.container}>
    <Stack>
        <Stack.Screen name="index" options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Artistas",
        }} />
    </Stack>
    </View>
}

export default ArtistasScreenLayout