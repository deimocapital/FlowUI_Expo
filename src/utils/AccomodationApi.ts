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
       isReserved: false,
     }).then((snapshot) => snapshot.get()).catch((error) => console.log(error));
};