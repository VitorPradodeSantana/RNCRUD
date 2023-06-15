import React from "react";
import { View, Text, FlatList } from 'react-native';
import users from '../data/Users';
import { ListItem, Avatar } from "@react-native-material/core";

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leadingMode="avatar"
                leading={<Avatar image={{ uri: user.avatarUrl }} />}
                key={user.id}
                title={user.name}
                secondaryText={user.email}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }


    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}