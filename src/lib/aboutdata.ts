// lib/useAboutData.ts
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface AboutData {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
}

const useAboutData = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, "mainsite", "aboutsection");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as AboutData;
          setData(data);
        } else {
          setError("No such document!");
        }
      } catch (err) {
        setError("Failed to load about section data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return { data, loading, error };
};

export default useAboutData;