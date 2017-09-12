import React, { Component } from  'react';
import { Text, Button, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View>
                <Text>'Hello this is my home page'</Text>

                <TouchableHighlight>
                    <Text>Highlight</Text>
                </TouchableHighlight>

                <TouchableOpacity>
                    <Text>Opacity</Text>
                </TouchableOpacity>

                <TouchableNativeFeedback>
                    <Text>Native</Text>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback>
                    <View>
                        <Text>Without</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Button onPress={this.goToMyAboutPage} title="Go to about page"></Button>
                <Button onPress={this.goToMyTasklist} title="Tasklist"></Button>
                <Button onPress={this.goToMyFetchPage} title="FetchPage"></Button>
            </View>
        );
    }

    goToMyAboutPage = () => {
        this.props.navigator.push({
            name: 'About',
            title: 'About',
            passProps: {
                data: {
                    id: 1,
                    arr: [{
                        name: 'Leonan',
                        age: 20
                    }]
                }
            }
        })
    }

    goToMyTasklist = () => {
        this.props.navigator.push({
            name: 'Task',
            title: 'Task',
            passProps: {}
        })
    }

    goToMyFetchPage = () => {
        this.props.navigator.push({
            name: 'HTTP',
            title: 'Fetch',
            passProps: {}
        })
    }
}