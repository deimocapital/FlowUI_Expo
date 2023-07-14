import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 12,
    height: '100%',
    width: '100%',
    backgroundColor: '#242323',
  },
  flowInfoContainer:{
    flexDirection: 'row',
    width: '100%',
    height: 85,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3bff86',
    backgroundColor: '#000',
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  innerFlowInfoContainer:{
    flexDirection: 'column',
    justifyContent:'space-between',
    padding: 15,
  },
  titleFlowContainer:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonFlowContainer:{
    alignSelf: 'center',
    marginRight: 15,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 10,
  },
  message:{
    fontSize: 14,
    color: '#fff',
    alignSelf: 'left',
    textAlign: 'center',
  }
});

export default styles;
