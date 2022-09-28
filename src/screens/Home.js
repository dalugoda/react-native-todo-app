import React, {Component} from 'react';
import {View, Text, Button, Switch, ScrollView, StyleSheet} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
    };
  }

  componentDidMount() {
    this.getToDos();
  }

  getToDos = async () => {
    const toDoResponse = await fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(response => response);

    this.setState({toDos: toDoResponse.todos});
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {this.state.toDos.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.label}>{item.todo}</Text>
            <View style={styles.switchContainer}>
              <Switch value={item.completed} />
            </View>
          </View>
        ))}

        <Button
          title="Create"
          onPress={() => this.props.navigation.navigate('Create')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {padding: 10},
  itemContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {flex: 1, fontSize: 16, marginRight: 10},
  switchContainer: {flex: 0.2},
});
