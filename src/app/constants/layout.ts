import {NativeStackNavigationOptions} from "@react-navigation/native-stack"
import { colors } from "./tokens"


export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
    headerTitleStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: colors.text,},
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: true,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
}