import React, { Component } from 'react';
import { View, Button, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Styles from './Styles';

export default class HomeView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={Styles.container}>
                <Text></Text>

                <Button title="Fetch Data" onPress={this.props.fetchData} />
            </View>

        );
    }
}