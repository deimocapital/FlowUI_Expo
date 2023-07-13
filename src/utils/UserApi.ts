import {firebase} from '../../config';
import {getFirestore, doc, getDoc} from "firebase/firestore";


export const getUser = async() => {
    const db = getFirestore();
    const docRef = doc(db,"user","goCtvYZrmzPtd0otCAb7");
    const docSnap = await getDoc(docRef);
   console.log(docSnap.data());
};
