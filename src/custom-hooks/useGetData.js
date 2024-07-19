import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs ,onSnapshot} from "firebase/firestore";
const useGetData =  (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const unsubscribe =  onSnapshot(collectionRef, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return { data, loading ,setLoading };
};
export default useGetData;
