import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedRecipes: ''
        }
    }
    searchPressed() {
        this.props.fetchRecipes('apples,flour,sugar');
    }
    render() {
        return (
            <View style={{marginTop: 20}}>
                <View>
                    <TouchableHighlight onPress={ () => this.searchPressed()}>
                        <Text>Search</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView>

                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);