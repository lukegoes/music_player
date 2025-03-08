import { useState, useEffect, useRef } from "react"
import TrackPlayer, { RepeatMode } from "react-native-track-player"

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10,
    })
    await TrackPlayer.setVolume(0.5);
    
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    
}

const resetPlayer = async () => {
    await TrackPlayer.stop()
    await TrackPlayer.reset()
    await setupPlayer()
}

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
    const isInitialized = useRef(false)
    const [isPlayerReady, setPlayerReady] = useState(false)

    useEffect(() => {
        if (!isInitialized.current) {
            setupPlayer()
                .then(() => {
                    isInitialized.current = true
                    setPlayerReady(true)
                    onLoad?.()
                })
                .catch((error) => {
                    isInitialized.current = false
                    console.error(error)
                })
        }

        return () => {
            if (isInitialized.current) {
                resetPlayer().catch((error) => console.error("Failed to reset player", error))
            }
        }
    }, [onLoad])

    return isPlayerReady
}
