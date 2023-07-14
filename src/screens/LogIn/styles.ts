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
    alignSelf: 'left',
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
  providersContainer:{
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProviders:{
    height: 20,
    width: 20,
    marginTop:3,
    marginBottom:2,
    marginRight:5,
  }
});

export default styles;
