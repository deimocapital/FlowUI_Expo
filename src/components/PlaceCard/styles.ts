import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '93%',
    height: '32%',
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
  cardImage: {
    height: 220,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  country: {
    fontSize: 16,
    color: '#fff',
  },
  price: {
    fontSize: 16,
    color: '#fff',
    padding: 7,
    fontWeight: '500',
  },
});

export default styles;
