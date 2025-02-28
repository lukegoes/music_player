import { StackScreenWithSearchBar } from "@/app/constants/layout"
import { defaultStyles } from "@/app/styles"
import { Stack } from "expo-router"
import { View, StyleSheet, useColorScheme } from "react-native"

const SongsScreenLayout = () => {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === "dark" ? "#000" : "#fff"; // Ajuste a cor de fundo conforme o modo

    return (
        <View style={styles.container}>
            <Stack>
                <Stack.Screen 
                    name="index" 
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: "Músicas",
                        headerBackground: () => (
                            <View style={[styles.headerBackground, { backgroundColor }]} />
                        ),
                    }}
                />
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...defaultStyles.container,
    },
    headerBackground: {
        flex: 1,
    },
});

export default SongsScreenLayout