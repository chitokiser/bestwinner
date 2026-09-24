import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where 
} from 'firebase/firestore';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD6oGXWcQIAa46ZiO6E9fBWOXqiNCAL4-c",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "jumper-b15aa.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "jumper-b15aa",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "jumper-b15aa.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1051842479371",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1051842479371:web:cd0dca2c1eab0e44b58e0e"
};

// Initialize Firebase App singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Core collection definitions (per project database specifications)
// Collection names: products, departures, bookings, users
export const COLLECTIONS = {
  PRODUCTS: 'products',
  DEPARTURES: 'departures',
  BOOKINGS: 'bookings',
  USERS: 'users'
};

/**
 * Fetch all documents from a specified collection
 */
export async function fetchCollection(collectionName) {
  try {
    const colRef = collection(db, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.warn(`[Firebase DB] Error fetching ${collectionName}:`, error);
    return [];
  }
}

/**
 * Add a document to a collection
 */
export async function addDocument(collectionName, data) {
  try {
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(`[Firebase DB] Error adding document to ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Update a document by ID
 */
export async function updateDocument(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error(`[Firebase DB] Error updating document ${docId} in ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Delete a document by ID
 */
export async function deleteDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(`[Firebase DB] Error deleting document ${docId} in ${collectionName}:`, error);
    throw error;
  }
}

export default app;
