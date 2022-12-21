import { Text, TouchableOpacity, View } from 'react-native';
import { Check, Trash } from 'phosphor-react-native';

import { styles } from './styles';

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: Task;
  toogleCompleteTask: (task: Task) => void;
  removeTask: (task: Task) => void;
}

export function Task({ task, toogleCompleteTask, removeTask }: TaskProps) {
  return (
    <View
      style={[styles.taskItem, task.isComplete ? styles.taskItemComplete : {}]}
    >
      <TouchableOpacity
        style={[
          styles.taskButtonCheck,
          task.isComplete ? styles.taskButtonCheckComplete : {},
        ]}
        onPress={() => toogleCompleteTask(task)}
      >
        {task.isComplete && <Check size={12} color='#F2F2F2' weight='bold' />}
      </TouchableOpacity>
      <Text
        style={[
          styles.taskItemText,
          task.isComplete ? styles.taskItemTextComplete : {},
        ]}
      >
        {task.title}
      </Text>
      <TouchableOpacity
        style={styles.taskButtonRemove}
        onPress={() => removeTask(task)}
      >
        <Trash size={16} color='#808080' />
      </TouchableOpacity>
    </View>
  );
}
