import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#242323',
  },
  prevButton:{
    backgroundColor: '#fff',
    borderRadius: 50,
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
});

export default styles;
