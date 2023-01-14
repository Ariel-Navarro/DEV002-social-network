import {
    setDoc,
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
} from './config.js';

export const saveTask = (description, nameUser, photoUrl, emailUser, idUser) => {
    return addDoc(collection(db, 'tasks'),
        {
            description,
            nameUser,
            photoUrl,
            emailUser,
            idUser,
        });
};

const storeUser = (description, userName, urlPhoto, userEmail, userId) => {
    return setDoc(collection(db, 'users'), {
        description,
        userName,
        urlPhoto,
        userEmail,
        userId,
    });
};

const getUsers = () => getDocs(query(collection(db, 'users')));

const getUser = () => async (id) => getDoc(doc(db, 'users', id));

const getTasks = () => getDocs(collection(db, 'tasks'));

const onGetTasks = (funcion) => onSnapshot(collection(conFirestore, 'tasks'), funcion);

const deleteTask = (id) => deleteDoc(doc(conFirestore, 'tasks', id));

const getTask = (id) => getDoc(doc(conFirestore, 'tasks', id));

const updateTask = (id, nuevosCampos) => {
    updateDoc(doc(conFirestore, 'tasks', id), nuevosCampos);
};

export {
    db,
    collection,
    doc,
    getDocs,
    deleteDoc,
    storeUser,
    saveTask,
    getUsers,
    getUser,
    getTasks,
    onGetTasks,
    deleteTask,
    getTask,
    updateTask,
}