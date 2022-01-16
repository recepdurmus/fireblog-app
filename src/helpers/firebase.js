import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, onValue, query } from "firebase/database";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const AddNewBlog = (values) => {
  const db = getDatabase();
  const userRef = ref(db, "contact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: values.title,
    imgUrl: values.imgUrl,
    content: values.content,
    email: values.email,
  });
};

export const useFetch = () => {
  const [isLoading, setisLoading] = useState();
  const [cardList, setcardList] = useState();

  useEffect(() => {
    setisLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contact");

    onValue(query(userRef), (snapshot) => {
      const cards = snapshot.val();
      const cardsArray = [];
      for (let id in cards) {
        cardsArray.push({ id, ...cards[id] });
      }
      setcardList(cardsArray);
      console.log(isLoading)
    });
  }, []);

  return { cardList };
};
