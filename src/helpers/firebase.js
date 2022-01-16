import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getDatabase, ref, set, push, onValue, query } from "firebase/database";
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/AuthContext";


const firebaseConfig = {
  apiKey: "AIzaSyDJUq9egwp-vTbBtT1csjh_SGhWJbKDN_k",
  authDomain: "fire-blog-69494.firebaseapp.com",
  projectId: "fire-blog-69494",
  storageBucket: "fire-blog-69494.appspot.com",
  messagingSenderId: "439089959599",
  appId: "1:439089959599:web:661b883d46a02747d87a5a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const AddNewBlog = (values) => {

  const db = getDatabase();
  const userRef = ref(db, 'contact')
  const newUserRef = push(userRef)
  set(newUserRef,{
    title: values.title,
    imgUrl:values.imgUrl,
    content:values.content,
    email:values.email
  })
}

export  const useFetch = () => {
  const [isLoading, setisLoading] = useState()
  const [cardList, setcardList] = useState()
  useEffect(() => {
    setisLoading(true)
    const db = getDatabase()
    const userRef = ref(db,"contact")

    onValue(query(userRef), snapshot => {

      const cards = snapshot.val()
      const cardsArray = []
      for (let id in cards){
        cardsArray.push({id, ...cards[id]})
      }
      setcardList(cardsArray)
    })
}, [])
console.log(cardList)

  return {cardList}
}