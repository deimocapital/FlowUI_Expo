import {firebase} from '../../config';

export const addAccomodation = (accomodation) => {
   firebase.firestore()
     .collection('accomodations')
     .add({
       owner: '0x768nbme12wres',
       location: accomodation.location,
       houseTitle: accomodation.houseTitle,
       address: accomodation.address,
       description: accomodation.description,
       price: accomodation.price,
       images: accomodation.images,
       rules: accomodation.rules,
       instructions: accomodation.instructions,
       isReserved: false,
     }).then((snapshot) => snapshot.get()).catch((error) => console.log(error));
};

export const getAccomodations = async() => {
  const snapshot = await firebase.firestore().collection('accomodations').get();
  const accomodations = snapshot.docs.map(doc => doc.data());
  // console.log(accomodations);
  return accomodations;
};