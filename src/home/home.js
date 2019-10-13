import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableNativeFeedback,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({
    navigation
}) => {
    goToProfile = () => {
        navigation.navigate('Profile');
    }
    return (
        <ImageBackground
            source={require('../assets/futureWorld.jpeg')}
            style={{width: '100%', height: '100%'}}
            >
            <View style={{flex: 1, padding: 10}}>
                <View style={{flex: .4, alignSelf: 'flex-end', padding: 10}}>
                    <Image 
                        source={require('../assets/carEducation.png')}
                        style={styles.carEducation}
                    />
                    <Text style={styles.text}>Education</Text>
                </View>
                <View style={{flex: .4}}>
                    <Image 
                        source={require('../assets/carBreakdown.png')}
                        style={styles.carBreakdown}
                    />
                    <Text style={styles.text}>Something's Wrong?</Text>
                </View>
                <View style={{flex: .2, alignSelf: 'flex-end'}}>
                    <TouchableNativeFeedback
                        onPress={goToProfile}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                        >
                        <Image 
                            source={require('../assets/VWGolf.png')}
                            style={styles.profileImage}
                        />
                    </TouchableNativeFeedback>
                    <Text style={styles.text}>Your Profile</Text>
                </View>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 150, 
        height: 100,
    },
    text: {
        color: 'ghostwhite',
        backgroundColor: 'black',
        width: 100,
        textAlign: 'center',
        alignSelf: 'center',
    },
    carBreakdown: {
        width: 200,
        height: 70,
        resizeMode: 'contain'
    },
    carEducation: {
        width: 100, 
        height: 80,
        resizeMode: 'contain'
    }
});

export default Home;