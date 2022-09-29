import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';

// CREATE
export const createProduct = async(obj) => {
    const colRef = collection(db, 'products');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateProduct = async (id, obj) => {
    const colRef = collection(db, 'products');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getProducts= async ()  => {
    const colRef = collection(db, 'products');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
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

// DELETE
export const deleteProduct = async (id) => {
    const colRef = collection(db, 'products');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}