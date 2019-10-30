import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TextButton({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.iosSubmitBtn}>
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

    }
});