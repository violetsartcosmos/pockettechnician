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

const Profile = () => {
    return (
        <View>
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
                    <Text style={styles.profileText}>Your Profile</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 150, 
        height: 100,
    },
    text: {
        color: 'ghostwhite',
    },
    profileText: {
        color: 'ghostwhite',
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

export default Profile;