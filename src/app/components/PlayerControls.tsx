import { colors } from "../constants/tokens";
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';

type PlayerControlsProps = {
	style?: ViewStyle;
}

type PlayerButtonProps = {
	style?: ViewStyle;
	iconSize?: number;
}

export const PlayerControls = ({ style }: PlayerControlsProps) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<SkipToPreviousButton />
				<PlayPauseButton />
				<SkipToNextButton />
			</View>
		</View>
	);
}

export const PlayPauseButton = ({ style, iconSize = 48 }: PlayerButtonProps) => {
	const { playing } = useIsPlaying();

	const handlePlayPause = async () => {
		if (playing) {
			await TrackPlayer.pause();
		} else {
			await TrackPlayer.play();
		}
	};

	return (
		<View style={[{ height: iconSize }, style]}>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={handlePlayPause}
			>
				<FontAwesome6 name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
			</TouchableOpacity>
		</View>
	);
}

export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonProps) => {
	const handleSkipNext = async () => {
		await TrackPlayer.skipToNext(); // Pula para a próxima faixa
	};

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={handleSkipNext}>
			<FontAwesome6 name="forward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
}

export const SkipToPreviousButton = ({ iconSize = 30 }: PlayerButtonProps) => {
	const handleSkipPrevious = async () => {
		await TrackPlayer.skipToPrevious(); // Volta para a faixa anterior
	};

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={handleSkipPrevious}>
			<FontAwesome6 name={'backward'} size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});