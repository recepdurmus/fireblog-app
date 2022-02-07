import { getDatabase, ref, set, push, onValue, query } from "firebase/database";
import { useEffect, useState } from "react";


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
      });
    }, []);
  
    return { cardList };
  };
  