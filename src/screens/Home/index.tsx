import { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ClipboardText, PlusCircle } from 'phosphor-react-native';

import logoImg from '../../assets/logo.png';

import { styles } from './styles';
import { Task } from '../../components/Task';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isComplete) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputText) {
      Alert.alert(
        'Falha ao adicionar tarefa',
        'Para adicionar uma tarefa você precisa definir um texto para a mesma.'
      );
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title: inputText,
      isComplete: false,
    };

    setInputText('');
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleRemoveTask(item: Task) {
    Alert.alert(
      'Remover tarefa',
      'Você tem certeza que deseja remover essa tarefa?',
      [
        {
          text: 'Sim',
          onPress: () =>
            setTasks((oldTasks) =>
              oldTasks.filter(
                (task: Task) => task.id !== item.id ?? { ...task }
              )
            ),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  }

  function handleToogleCompleteTask(item: Task) {
    setTasks((oldTasks) =>
      tasks.map((task: Task) =>
        task.id === item.id
          ? { ...task, isComplete: !item.isComplete }
          : { ...task }
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isFocused ? styles.inputFocused : {}]}
            placeholderTextColor='#808080'
            placeholder='Adicione uma nova tarefa'
            value={inputText}
            onChangeText={setInputText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <PlusCircle color='#FFF' />
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <Task
              task={item}
              toogleCompleteTask={handleToogleCompleteTask}
              removeTask={handleRemoveTask}
            />
          )}
          ListHeaderComponent={
            <View style={styles.taskHeader}>
              <View style={styles.taskInfo}>
                <Text style={styles.taskInfoText}>Criadas</Text>
                <View style={styles.taskInfoCount}>
                  <Text style={styles.taskInfoCountText}>{tasks.length}</Text>
                </View>
              </View>

              <View style={styles.taskInfo}>
                <Text style={[styles.taskInfoText, styles.taskInfoTextPurple]}>
                  Concluídas
                </Text>
                <View style={styles.taskInfoCount}>
                  <Text style={styles.taskInfoCountText}>
                    {checkedTasksCounter}
                  </Text>
                </View>
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.emptyContent}>
              <ClipboardText size={56} color='#808080' />
              <Text style={styles.emptyContentBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyContentText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
