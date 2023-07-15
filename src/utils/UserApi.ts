import {firebase} from '../../config';
import {collection, doc, setDoc, updateDoc, query, where, getFirestore, getDocs} from "firebase/firestore";

export const addUser = async(walletID) => {
        // firebase.firestore()
        // .collection('user')
        // .add({
        // rewardCounter: 0,
        // walletID: walletID,
        // }).then((snapshot) => snapshot.get()).catch((error) => console.log(error)); 
        await setDoc(doc(getFirestore(), "user", walletID), {
            rewardCounter: 3,
            isPrimeUser: false,
            walletID: walletID,
        }, { merge: true });
};

export const getUser = async(walletID) => {
    const db = getFirestore();
    const userRef = collection(db, "user");
    const q = query(userRef, where("walletID", "==", walletID));
    
    const querySnapshot = await getDocs(q);
    let user;
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    user = doc.data();
    });
    return user;
};

export const getAndUpdateCounter = (walletAddress) => {
    const db = getFirestore(); // initialize Firestore
    const docRef = doc(db, "user", walletAddress);

    const data = {
        rewardCounter: firebase.firestore.FieldValue.increment(1)
    }

    updateDoc(docRef, data)
    .then(docRef => {
        console.log("Value of an Existing Document Field has been updated");
    })
    .catch(error => {
        console.log(error);
    })
}





// import {getFirestore, doc, getDoc} from "firebase/firestore";


// export const getUser = async(walletAddress) => {
//     const db = getFirestore();
//     const docRef = doc(db,"user","goCtvYZrmzPtd0otCAb7");
//     const docSnap = await getDoc(docRef);
//    return docSnap.data();
// };
