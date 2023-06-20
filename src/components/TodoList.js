import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTodo} from '../redux/actions/todoAction';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.complete}</Text>
          <Text
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}>
            {todo.text}
          </Text>
          <Button
            title={todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
            onPress={() => handleToggleTodo(todo.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default TodoList;
