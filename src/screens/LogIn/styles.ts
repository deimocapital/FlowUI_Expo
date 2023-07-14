import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#242323',
  },
  imageContainer:{
    marginTop: '10%',
    height: '40%',
    width: '80%',
    alignSelf: 'center',
  },
  cardImage: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },
  headingContainer:{
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 13,
  },
  message:{
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
  blocto:{
    backgroundColor: '#3bff86',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#a15e1b',
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
