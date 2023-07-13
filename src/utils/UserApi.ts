import {firebase} from '../../config';
import {collection, query, where, getFirestore, getDocs} from "firebase/firestore";


export const getUser = async(walletAddress) => {
    const db = getFirestore();
    const userRef = collection(db, "user");
    const q = query(userRef, where("walletAddress", "==", walletAddress));
    
    const querySnapshot = await getDocs(q);
    let user;
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
     user = {doc: doc.id , data: doc.data()};
    });
    return user;
};

// import {getFirestore, doc, getDoc} from "firebase/firestore";


// export const getUser = async(walletAddress) => {
//     const db = getFirestore();
//     const docRef = doc(db,"user","goCtvYZrmzPtd0otCAb7");
//     const docSnap = await getDoc(docRef);
//    return docSnap.data();
// };
