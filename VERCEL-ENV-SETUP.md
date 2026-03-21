# Vercel Environment Variables Setup Guide

## 🔧 **Fix Missing Firebase Secrets in Vercel**

### **Error Message**
```
Environment Variable "NEXT_PUBLIC_FIREBASE_API_KEY" references Secret "firebase_api_key", which does not exist.
```

### **Solution: Add Firebase Secrets to Vercel**

#### **Step 1: Go to Vercel Dashboard**
1. Login to [vercel.com](https://vercel.com)
2. Go to your **Project Dashboard**
3. Click **"Settings"** tab
4. Select **"Environment Variables"**

#### **Step 2: Add All Firebase Environment Variables**

**Public Environment Variables (NEXT_PUBLIC_*)**
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1dRJtLFMhBqieIj6JrtZsd4j0jd1xM_Y
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=branches-app-ff0a2.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=branches-app-ff0a2
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=branches-app-ff0a2.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=817543103901
NEXT_PUBLIC_FIREBASE_APP_ID=1:817543103901:web:0f1de5eacc949505dc9b74
```

**Private Environment Variables (Firebase Admin)**
```
FIREBASE_ADMIN_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
Your_Private_Key_Here
-----END PRIVATE KEY-----
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@branches-app-ff0a2.iam.gserviceaccount.com
FIREBASE_ADMIN_PROJECT_ID=branches-app-ff0a2
```

#### **Step 3: Get Your Firebase Admin Private Key**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `branches-app-ff0a2`
3. Go to **"Project Settings"** → **"Service accounts"**
4. Click **"Generate new private key"**
5. Download the JSON file
6. Copy the `private_key` value (include the BEGIN/END lines)
7. Copy the `client_email` value

#### **Step 4: Add Variables in Vercel**
For each variable:
1. **Variable Name**: Enter the exact name (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
2. **Value**: Paste the corresponding value
3. **Environment**: Select **"Production"**, **"Preview"**, and **"Development"**
4. Click **"Save"**
5. Repeat for all variables

#### **Step 5: Redeploy**
1. Go to **"Deployments"** tab in Vercel
2. Click **"Redeploy"** or wait for next automatic deployment
3. Deployment should succeed with all environment variables

### **Complete Environment Variables List**

#### **Required Public Variables**
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1dRJtLFMhBqieIj6JrtZsd4j0jd1xM_Y
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=branches-app-ff0a2.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=branches-app-ff0a2
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=branches-app-ff0a2.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=817543103901
NEXT_PUBLIC_FIREBASE_APP_ID=1:817543103901:web:0f1de5eacc949505dc9b74
```

#### **Required Private Variables**
```
FIREBASE_ADMIN_PRIVATE_KEY=Your_Private_Key_Here
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@branches-app-ff0a2.iam.gserviceaccount.com
FIREBASE_ADMIN_PROJECT_ID=branches-app-ff0a2
```

#### **Optional Site Variables**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=PakBizBranches
```

### **Verification Steps**
- [ ] All environment variables added in Vercel
- [ ] Firebase admin private key downloaded and added
- [ ] All environments selected (Production, Preview, Development)
- [ ] Vercel deployment succeeds
- [ ] Website loads without Firebase errors
- [ ] Add business form works correctly

### **Troubleshooting**

#### **If Deployment Still Fails**
1. Check all variable names are **exact** (case-sensitive)
2. Ensure private key includes **BEGIN/END** lines
3. Verify all environments are selected
4. Check Firebase project ID matches exactly

#### **If Website Shows Firebase Errors**
1. Clear browser cache
2. Check browser console for specific errors
3. Verify environment variables are loaded
4. Test Firebase connection in development

### **Expected Results**
✅ Vercel deployment succeeds
✅ Website loads without Firebase errors
✅ Add business form works correctly
✅ All Firebase operations functional
✅ Connected domain updates properly

---

**Once you add these environment variables in Vercel, the deployment will succeed and your website will work correctly!** 🚀
