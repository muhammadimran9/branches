import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC1dRJtLFMhBqieIj6JrtZsd4j0jd1xM_Y',
  authDomain: 'branches-app-ff0a2.firebaseapp.com',
  projectId: 'branches-app-ff0a2',
  storageBucket: 'branches-app-ff0a2.appspot.com',
  messagingSenderId: '817543103901',
  appId: '1:817543103901:web:0f1de5eacc949505dc9b74',
}

// Initialize Firebase app
let app: FirebaseApp
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

// Initialize Firebase services
export const db: Firestore = getFirestore(app)
export const storage: FirebaseStorage = getStorage(app)

// Storage configuration
export const STORAGE_CONFIG = {
  maxFileSize: 200 * 1024, // 200KB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  uploadPath: 'logos'
}

export default app