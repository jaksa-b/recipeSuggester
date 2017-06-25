import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class AppContainer extends Component {
    addRecipe() {
        this.props.addRecipe();
    }
    render() {
        return (
            <View>
                <Text style={{marginTop: 20}}>
                    AppContainer count: {this.props.recipeCount}
                </Text>
                <TouchableHighlight onPress={() => this.addRecipe()}>
                    <Text>Increment Count</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        recipeCount: state.recipeCount
    }
}, mapDispatchToProps)(AppContainer);