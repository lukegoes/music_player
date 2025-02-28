import { StackScreenWithSearchBar } from "@/app/constants/layout"
import { defaultStyles } from "@/app/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const FavoritosScreenLayout = () =>{
    return (
    <View style={defaultStyles.container}>
    <Stack>
        <Stack.Screen name="index" options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Favoritos",
        }} />
    </Stack>
    </View>
    )
}

export default FavoritosScreenLayout