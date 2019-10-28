import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'

export default function TextButton({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={
            Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
        }>
            <Text style={{ color: 'white' }}>{children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,

    },
    AndroidSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,

    },
});