import {firebase} from '../../config';
import { getUser } from './UserApi';


export const addReservation = (accomodation) => {
   firebase.firestore()
     .collection('reservations')
     .add({
       currentGuest
       creator 
       houseTitle 
       address 
       date 
     }).then((snapshot) => snapshot.get()).catch((error) => console.log(error));
};