import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    height: 170,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 70,
  },
  content: {
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    marginTop: -28,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: '#FFF',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#262626',
  },
  inputFocused: {
    borderColor: '#5E60CE',
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  taskInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskInfoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  taskInfoTextPurple: {
    color: '#8284FA',
  },
  taskInfoCount: {
    width: 26,
    height: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginLeft: 8,
  },
  taskInfoCountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  emptyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    borderTopWidth: 1,
    borderColor: '#333333',
  },
  emptyContentBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    marginTop: 16,
  },
  emptyContentText: {
    fontSize: 14,
    color: '#808080',
  },
});
