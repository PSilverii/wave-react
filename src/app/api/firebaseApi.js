import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';

export const createProduct = async (obj) => {
    const colRef = collection(db, 'products');
    const data = await addDoc(colRef, obj);
    return data.id;
}

export const updateProduct = async (id, obj) => {
    const colRef = collection(db, 'products');
    await updateDoc(doc(colRef, id), obj)
}

export const getProducts = async () => {
    const colRef = collection(db, 'products');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getProductsByCondition = async (value) => {
    const colRef = collection(db, 'products');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getProductById = async (id) => {
    const colRef = collection(db, 'products');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

export const deleteProduct = async (id) => {
    const colRef = collection(db, 'products');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}