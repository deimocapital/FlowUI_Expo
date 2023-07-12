import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    padding: 10,
    height: '100%',
    backgroundColor: '#242323',
  },
  cardsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 90,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 13,
  },
  inputContainer:{
    marginVertical: 10,
    marginHorizontal: 5,
  },
  inputTitle:{
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  input:{
    color: '#fff',
    height: 40,
    width: '100%',
    alignSelf:'center',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});

export default styles;
