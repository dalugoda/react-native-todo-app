import React, {Component} from 'react';
import {View, Text, Button, TextInput, Switch} from 'react-native';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      completed: false,
    };
  }

  createTodo = async () => {
    const {todo, completed} = this.state;

    const result = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      body: JSON.stringify({
        todo: todo,
        completed: completed,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(response => response);

    console.log(result);
  };

  onChangeTodo = todo => this.setState({todo});
  onChangeCompleted = () => this.setState({completed: !this.state.completed});

  render() {
    const {todo, completed} = this.state;

    return (
      <View>
        <Text>Create Todo</Text>
        <TextInput
          placeholder="To Do"
          value={todo}
          onChangeText={this.onChangeTodo}
        />
        <Switch value={completed} onChange={this.onChangeCompleted} />
        <Button title="Create" onPress={this.createTodo} />
      </View>
    );
  }
}
