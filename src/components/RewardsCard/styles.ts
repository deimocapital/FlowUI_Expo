import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '97%',
    height: 'auto',
    alignSelf: 'center',
    borderRadius: 18,
    marginVertical: 12,
    marginHorizontal: 8,
    backgroundColor: '#0a0909',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '90%',
    height: '35%',
    marginTop: '6%',
    marginBottom: 40,
    borderRadius: 18,
    alignItems: 'center',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  level: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  infoContainer: {
    width: '90%',
    height: '33%',
    marginTop: -20,
    marginHorizontal: 20,
  },
  levelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 30,
  },
  outerProgressionBar: {
    height: 25,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 13,
    backgroundColor: '#fff',
  },
  innerProgressionBar: {
    height: 25,
    width: '40%',
    borderRadius: 13,
    backgroundColor: '#3bff86',
  },
  progression: {
    color: '#fff',
    position: 'absolute',
    right: 0,
    bottom: -30,
    fontSize: 16,
  },
  rewardsContainer: {
    marginTop: 40,
  },
  rewardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  rewards: {
    color: '#fff',
    fontSize: 15,
    padding: 5,
  },
});

export default styles;
