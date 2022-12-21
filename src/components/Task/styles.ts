import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 8,
  },
  taskItemComplete: {
    borderColor: '#262626',
  },
  taskButtonCheck: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 9,
  },
  taskButtonCheckComplete: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
    paddingLeft: 1,
  },
  taskItemText: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 14,
    color: '#F2F2F2',
  },
  taskItemTextComplete: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  taskButtonRemove: {},
});
