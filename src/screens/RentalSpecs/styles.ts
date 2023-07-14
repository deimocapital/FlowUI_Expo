import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#242323',
  },
  prevButtonContainer:{
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 90,
  },
  headingContainer: {
    marginHorizontal: 15, 
  },
  title: {
    fontSize: 28,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  lastTitles: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  lastTexts: {
    fontSize: 14,
    color: '#fff',
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
