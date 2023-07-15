import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    display: 'flex',
    backgroundColor: '#242323',
    height: '100%',
    width: '100%',
  },
  cardsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 10,
  },
  logInPrompt: {
    flexDirection: 'row',
    width: '100%',
    height: 85,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3bff86',
    backgroundColor: '#000',
    marginTop: '60%',
    justifyContent: 'center',
    marginRight: 10,
    alignItems: 'center',
  },
});

export default styles;
