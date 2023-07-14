import {firebase} from '../../config';
import { makeId } from './makeId';
import {getAndUpdateCounter} from './UserApi';
import {collection, doc, setDoc, updateDoc, query, where, getFirestore, getDocs} from "firebase/firestore";


const confirmationCode = makeId(9);

export const addReservation = (reservation) => {
   firebase.firestore()
     .collection('reservations')
     .add({
       currentUser: reservation.visitor,
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
    
     getAndUpdateCounter(reservation.visitor);
};

export const getReservationById = async(walletID) => {
  const db = getFirestore();
  const userRef = collection(db, "reservations");
  const q = query(userRef, where("currentUser", "==", walletID));
  
  const querySnapshot = await getDocs(q);
  let reservations= [];
  querySnapshot.forEach((doc) => {
    
    reservations.push(doc.data());
    
  });
  return reservations;
};


export const getReservations = async() => {
  const snapshot = await firebase.firestore().collection('reservations').get();
  const reservations = snapshot.docs.map(doc => doc.data());
  return reservations;
};