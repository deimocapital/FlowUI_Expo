import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '92%',
    height: 'auto',
    marginVertical: 10,
    borderRadius: 18,
    borderColor: '#3bff86',
    borderWidth: 2,
  },
  cardElevated: {
    backgroundColor: '#000',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  row: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    padding: 10,
    marginTop: 5,
  },
  miscContainer: {
    flex: 0.9,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 10,
  },
  place: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  date: {
    fontSize: 17,
    color: '#fff',
  },
});

export default styles;
