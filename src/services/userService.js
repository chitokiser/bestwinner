/**
 * Firebase Firestore User Management & AIM119 & JUMPER Synchronization Service
 * Collection: 'users'
 */

import { db, COLLECTIONS, addDocument } from '../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';

export const SUPER_ADMIN_EMAILS = [
  'daguri75@gamil.com',
  'daguri75@gmail.com',
  'chitokiser@gmail.com',
  'admin@bestwinnervn.com'
];

export function isSuperAdminEmail(email) {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return SUPER_ADMIN_EMAILS.some(e => e.toLowerCase() === normalized);
}

export class UserService {
  /**
   * Sync & Upsert user data into Firebase Firestore ('users' collection)
   * automatically populating AIM119 and JUMPER integration handles.
   */
  static async syncUserToFirestore(userData) {
    if (!userData || !userData.uid) {
      console.warn('[UserService] Cannot sync empty user data');
      return null;
    }

    try {
      const userRef = doc(db, COLLECTIONS.USERS, userData.uid);
      const existingSnap = await getDoc(userRef);

      const aim119Id = `AIM119-${userData.uid.slice(0, 8).toUpperCase()}`;
      const jumperId = `JUMPER-${userData.uid.slice(0, 8).toUpperCase()}`;

      const now = new Date().toISOString();
      const isSuperAdmin = isSuperAdminEmail(userData.email);

      const userRecord = {
        uid: userData.uid,
        email: userData.email || '',
        name: userData.name || userData.displayName || 'BEST Member',
        avatar: userData.avatar || userData.photoURL || '',
        provider: userData.provider || 'Google OAuth 2.0',
        
        // AIM119 & JUMPER Sync Handles
        aim119Id,
        jumperId,
        syncStatus: {
          aim119: 'SYNCED',
          jumper: 'SYNCED',
          lastSyncedAt: now
        },
        
        // Role & Metadata
        role: isSuperAdmin ? 'super_admin' : (userData.email && (userData.email.includes('admin') || userData.email.includes('bestwinner'))) ? 'admin' : 'member',
        isSuperAdmin,
        lastLoginAt: now,
        updatedAt: now
      };

      if (!existingSnap.exists()) {
        userRecord.createdAt = now;
      }

      await setDoc(userRef, userRecord, { merge: true });
      console.log(`[UserService] Successfully synced user ${userData.uid} to Firestore (AIM119: ${aim119Id}, JUMPER: ${jumperId})`);

      // Update LocalStorage Session with synced handles
      const currentSession = JSON.parse(localStorage.getItem('best_user_session') || '{}');
      const updatedSession = { ...currentSession, ...userRecord };
      localStorage.setItem('best_user_session', JSON.stringify(updatedSession));

      return userRecord;
    } catch (err) {
      console.error('[UserService] Failed to sync user to Firestore:', err);
      return userData;
    }
  }

  /**
   * Fetch all members from Firestore ('users' collection)
   */
  static async getAllUsers() {
    try {
      const colRef = collection(db, COLLECTIONS.USERS);
      const snapshot = await getDocs(colRef);
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (err) {
      console.error('[UserService] Error fetching users list:', err);
      return [];
    }
  }
}
