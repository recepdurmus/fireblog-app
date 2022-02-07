import { getDatabase, ref, onValue, query } from "firebase/database";
import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [cardList, setcardList] = useState([]);

  const getBlogs = () => {
    try {
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
        setisLoading(false)
      });
    return { cardList };
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BlogContext.Provider value={{ cardList, getBlogs, isLoading }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
