import React from 'react';
import { Text, ScrollView, View, TextInput, StyleSheet } from 'react-native';
const User = props => {
    return (



        <ScrollView>

            <View>
                <Text style={{ padding: 10 }}>{props.user.name}</Text>
                <Text style={{ padding: 10 }}>{props.user.phone}</Text>
                <Text style={{ padding: 10 }}>{props.user.website}</Text>
            </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({

    txtstyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20
    }
});
export default User;