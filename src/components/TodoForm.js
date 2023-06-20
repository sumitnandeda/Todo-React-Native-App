import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todoAction';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add a to-do item"
        value={text}
        onChangeText={newText => setText(newText)}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default TodoForm;
