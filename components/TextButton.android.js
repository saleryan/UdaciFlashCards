import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TextButton({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.AndroidSubmitBtn}>
            <Text style={{ color: 'white' }}>{children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    AndroidSubmitBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    }
});