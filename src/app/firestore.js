/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need

import {
    conFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
    arrayUnion,
    arrayRemove,
  } from './config.js';
  
  export const saveTask = (description, uid) => {
    addDoc(collection(conFirestore, 'tasks'), {
      uid,
      description,
      likes: [],
    });
  };
    
  export const onGetTasks = (funcion) => onSnapshot(collection(conFirestore, 'tasks'), funcion);
  
  export const deleteTask = (id) => deleteDoc(doc(conFirestore, 'tasks', id));
  
  export const getTask = (id) => getDoc(doc(conFirestore, 'tasks', id));
  
  export const updateTask = (id, nuevosCampos) => {
    updateDoc(doc(conFirestore, 'tasks', id), nuevosCampos);
  };
  
  // -----LIKES----------------------
  
  export const giveLike = (id, nuevoLike) => {
    updateDoc(doc(conFirestore, 'tasks', id), {
      likes:
        arrayUnion(
          nuevoLike,
        ),
    });
  };
  
  export const disLike = (id, viejoLike) => {
    updateDoc(doc(conFirestore, 'tasks', id), {
      likes:
        arrayRemove(
          viejoLike,
        ),
    });
  };
  
  export {
    conFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
    arrayUnion,
    arrayRemove,
  };
  