import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Post } from "@/types";


const COLLECTION_NAME = "posts";

export const createPost = (post: Post) => {
    return addDoc(collection(db, COLLECTION_NAME), post)
};

export const getPosts = () => {
    const q = query(collection(db, COLLECTION_NAME), orderBy("date"));
    return getDocs(q);
};

export const getPostByUserId = (id: string) => {
    const q = query(collection(db, COLLECTION_NAME), where("userId", "==", id))
    return getDocs(q)
}

// export const getPost = (id:)