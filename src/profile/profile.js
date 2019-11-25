import React from 'react';
import {
    FlatList,
    Button,
    Alert,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const personalInfo = [
    {
        name: 'First Name',
        id: 'firstName'
    },
    {
        name: 'Last Name',
        id: 'lasttName'
    },
    {
        name: 'Phone Number',
        id: 'phoneNumber'
    },
    {
        name: 'Username',
        id: 'username'
    },
    {
        name: 'Password',
        id: 'pswd'
    },
    {
        name: 'Make',
        id: 'make'
    },
    {
        name: 'Model',
        id: 'model'
    },
    {
        name: 'Year',
        id: 'year'
    },
    {
        name: 'Engine',
        id: 'engine'
    },
    {
        name: 'Vin',
        id: 'vin'
    } 
]

const Profile = () => {
    return (
        <View style={{flex: 1, height:400}}>
            <ScrollView style={{padding: 10}}>
                    <TouchableNativeFeedback
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                    >
                        <Image 
                            source={require('../assets/VWGolf.png')}
                            style={styles.profileImage}
                        />

                    </TouchableNativeFeedback>
                    <FlatList
                        data={personalInfo}
                        renderItem={({ item }) => (
                            <View id={item.id}>
                                <Text style={styles.profileText}>{item.name}</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                />
                            </View>
                        )
                    }
                        keyExtractor={item => item.id}
                    />





                   
                    <TouchableNativeFeedback
                        onPress={() =>{ Alert.alert('Enter your credit card information. Ads will be disabled.')}}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                    >
                        <Text style={styles.profileText}>Pro Tech Go Pro - No ads</Text>
                    </TouchableNativeFeedback>
            </ScrollView>
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
        color: 'black',
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