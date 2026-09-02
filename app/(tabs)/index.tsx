import CustomButton from "@/app/components/CustomButton";
import { useAppTheme } from "@/app/hooks/ThemeProvider";
import { useEvent } from 'expo';
import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const videoSource = require('@/assets/videos/storm-video.mp4');

export default function HomeScreen() {
  const router = useRouter();
  const {theme} = useAppTheme();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
  });

  const { status } = useEvent(player, 'statusChange', {
    status: player.status,
  });

  useEffect(() => {
    if (status === 'readyToPlay') {
      player.play();
    }
  }, [status, player]);

  const bgColor = theme === 'light';

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor ? '#fff' : '#000' }}>
        <View style={styles.container}>
          <VideoView
            style={styles.video}
            player={player}
            contentFit="fill"
            />
          <View style={styles.container}> 
            <Text style={styles.header}>Storm Chaser App</Text>
            <Text style={[styles.intro, { color: bgColor ? '#000' : '#fff'}]}>Storm Chaser application that allows meteorology enthusiasts to track and document weather events</Text>
            <Text style={{ color: bgColor ? '#000' : '#fff'}}>Made by Mohamed Mohamud (contact@mohamed-m.ca)</Text>
              <CustomButton
                  containerStyles={styles.cameraButtonContainer}
                  textStyles={styles.cameraButtonText}
                  title="Camera"
                  onPress={()=> router.replace('/camera')}
              />
          </View>
        </View>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    video: {
      position: 'absolute',
      opacity: .2
    },
    header: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    intro: {
        textAlign: 'center'
    },
    cameraButtonContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginTop: 20,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 2
    },
    cameraButtonText: {
        textTransform: "uppercase",
        fontWeight: 'bold',
        color: 'red'
    }

});