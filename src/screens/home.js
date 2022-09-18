import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Users from '../components/Users';
const HomeScreen = props => {
    return (
        <View>
            <TextInput
                style={styles.txtstyle} />
            <Users navigation={props.navigation} />
        </View>


    );
};
HomeScreen.navigationOptions = {
    title: 'User List'
};
const styles = StyleSheet.create({

    txtstyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20
    }
});

export default HomeScreen;