import {firebase} from '../../config';
import { makeId } from './makeId';
import {getAndUpdateCounter} from './UserApi';


const confirmationCode = makeId(9);

export const addReservation = (reservation) => {
   firebase.firestore()
     .collection('reservations')
     .add({
       currentGuest: '0x981mkjp78t3',
       creator: reservation.owner,
       houseTitle: reservation.title, 
       address: reservation.address, 
       image: reservation.image,
       dates: reservation.dates,
       confirmationCode: confirmationCode,
       instructions: reservation.instructions,
       rules: reservation.rules,
       guests: reservation.guests,
     }).then((snapshot) => snapshot.get()).catch((error) => console.log(error));
    
     getAndUpdateCounter('kC7AaPtlUi3dZmBZ2ni4');
};


export const getReservations = async() => {
  const snapshot = await firebase.firestore().collection('reservations').get();
  const reservations = snapshot.docs.map(doc => doc.data());
  // console.log(accomodations);
  return reservations;
};