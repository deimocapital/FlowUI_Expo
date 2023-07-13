import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import {firebase} from '../../../config';

const FetchFirebase = () => {
  
  const[users, setUsers] = useState([]);
  const usersRef =firebase.firestore().collection('user');  

  useEffect(() => {
    usersRef
    .onSnapshot(
        querySnapshot => {
            const users =[]
            querySnapshot.forEach((doc) => {
                const {walletAddress, username} = doc.data();
                users.push({
                    id: doc.id,
                    walletAddress,
                    username,
                })
            })
            setUsers(users);
        }
    )        
  },[]);

  return (
    <View style={{flex:1, marginTop:100}}>
      <FlatList
        style={{height:'100%'}}
        data={users}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
              style={styles.container}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.wallet}>{item.walletAddress}</Text>
                    <Text style={styles.username}>{item.username}</Text>
                </View>
            </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
    },
    innerContainer:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    wallet:{
        fontWeight: 'bold',
    },
    username:{
        fontWeight: '300',
    },
});

export default FetchFirebase;