import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
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

// Firebase configuration strictly loaded from environment variables with production fallbacks
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyD6oGXWcQIAa46ZiO6E9fBWOXqiNCAL4-c',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'jumper-b15aa.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'jumper-b15aa',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'jumper-b15aa.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1051842479371',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1051842479371:web:cd0dca2c1eab0e44b58e0e'
};

// Initialize Firebase App singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

import { UserService } from '../services/userService';

/**
 * Real Google OAuth 2.0 Sign In via Firebase Auth
 */
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userData = {
      uid: user.uid,
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      avatar: user.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      provider: 'Google OAuth 2.0'
    };
    
    // Automatically sync to Firebase Firestore 'users' collection with AIM119 & JUMPER handles
    const syncedData = await UserService.syncUserToFirestore(userData);
    return syncedData || userData;
  } catch (error) {
    console.error('[Firebase Auth Error]', error);
    throw error;
  }
}

/**
 * Sign out user from Firebase Auth
 */
export async function logoutFirebase() {
  try {
    await signOut(auth);
    localStorage.removeItem('best_user_session');
    return true;
  } catch (error) {
    console.error('[Firebase Logout Error]', error);
    throw error;
  }
}

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
