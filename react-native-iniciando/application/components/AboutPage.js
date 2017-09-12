import React, { Component } from  'react';
import { Text, View } from 'react-native';

export default class AboutPage extends Component {
    constructor() {
        super();
    }

    render() {
        let data = JSON.stringify(this.props.data).toString();
        return(
            <View>
                <Text>'Hello this is my about page'</Text>
                <Text>{data}</Text>
            </View>
        );
    }
}