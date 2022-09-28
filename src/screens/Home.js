import React, {Component} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.toDos.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.label}>{item.todo}</Text>
              <View style={styles.switchContainer}>
                <Switch value={item.completed} />
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => this.props.navigation.navigate('Create')}>
          <Icon name="plus" size={30} color="#01a699" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollContainer: {padding: 10},
  itemContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {flex: 1, fontSize: 16, marginRight: 10},
  switchContainer: {flex: 0.2},
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});
