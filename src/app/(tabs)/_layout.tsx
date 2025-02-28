import { Tabs } from "expo-router"
import { colors, fontSize } from "../constants/tokens"
import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons"

const TabsNavigation = () =>{
    return( 
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: "500",
        },
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            paddingTop: 4,
            height: 60,
        },
        tabBarBackground: () => <BlurView intensity={50} 
        style= {{
            ...StyleSheet.absoluteFillObject,
            overflow:"hidden",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }}
        />,
    }}>
        <Tabs.Screen name= "Favoritos" options={{
            title: "Favoritos",
            tabBarIcon: ({color}) => <FontAwesome name='heart' size={20} color={color}/>
        }}/>
        <Tabs.Screen name= "Playlists" options={{
            title: "Playlists",
            tabBarIcon: ({color}) => <MaterialCommunityIcons name='playlist-play' size={28} color={color}/>
        }}/>
        <Tabs.Screen name= "(songs)" options={{
            title: "Músicas",
            tabBarIcon: ({color}) => <Ionicons name='musical-notes-sharp' size={24} color={color}/>
        }} />
        <Tabs.Screen name= "Artistas" options={{
            title: "Artistas",
            tabBarIcon: ({color}) => <FontAwesome6 name='users-line' size={20} color={color}/>
        }} />
    </Tabs>
    )

}

export default TabsNavigation