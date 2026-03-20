# GitHub to Vercel Automatic Deployment Setup

## 🔧 **Ensure Automatic Deployments from GitHub to Vercel**

### **Step 1: Connect GitHub to Vercel**
1. Go to [vercel.com](https://vercel.com) and login
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your `branches` repository from GitHub
5. **Authorize Vercel** to access your GitHub account

### **Step 2: Configure Deployment Settings**
1. **Framework Preset**: Next.js (should auto-detect)
2. **Root Directory**: `./` (default)
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

### **Step 3: Environment Variables**
Add these in Vercel Dashboard → Project Settings → Environment Variables:

#### **Firebase Configuration (Public)**
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

#### **Firebase Admin (Private)**
```
FIREBASE_ADMIN_PRIVATE_KEY=your_private_key
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PROJECT_ID=your_project_id
```

#### **Site Configuration**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=PakBizBranches
```

### **Step 4: Deployment Triggers**
✅ **Automatic Deployments Should Be Set For:**
- **Main Branch**: `main` → Production
- **Other Branches**: Preview deployments
- **Pull Requests**: Preview deployments

### **Step 5: Verify GitHub Integration**
1. In Vercel Dashboard → Project → **"Git Integration"**
2. Should show: **"Connected to GitHub"**
3. **Branch Settings**: Main branch should auto-deploy
4. **Webhooks**: Should be active

### **Step 6: Test Automatic Deployment**
1. **Make a small change** to any file
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "test deployment"
   git push origin main
   ```
3. **Check Vercel Dashboard** → Should show new deployment
4. **Visit your domain** → Changes should be live

### **Troubleshooting If Not Working**

#### **Issue 1: GitHub Not Connected**
- **Solution**: Reconnect GitHub in Vercel settings
- **Check**: Vercel Dashboard → Git Integration

#### **Issue 2: Environment Variables Missing**
- **Solution**: Add all required environment variables
- **Check**: Vercel Project Settings → Environment Variables

#### **Issue 3: Build Failures**
- **Solution**: Check build logs in Vercel Dashboard
- **Common**: Missing dependencies, Firebase config issues

#### **Issue 4: Branch Not Auto-Deploying**
- **Solution**: Check branch settings in Vercel
- **Verify**: Main branch auto-deployment is enabled

### **Current Configuration Status**
✅ **vercel.json**: Properly configured
✅ **Build Settings**: npm commands set
✅ **Environment Variables**: Defined in config
✅ **Framework**: Next.js detected
✅ **Output Directory**: .next configured

### **Next Steps to Fix**
1. **Connect GitHub** to Vercel if not already connected
2. **Set Environment Variables** in Vercel Dashboard
3. **Verify Branch Settings** for auto-deployment
4. **Test with a small commit** to verify flow
5. **Monitor Deployment Logs** for any issues

### **Verification Checklist**
- [ ] GitHub repository connected to Vercel
- [ ] Main branch auto-deployment enabled
- [ ] Environment variables configured
- [ ] Build command working
- [ ] Domain pointing to Vercel
- [ ] Test deployment successful

### **Expected Behavior After Setup**
✅ **Push to main** → Automatic production deployment
✅ **Push to other branches** → Preview deployments
✅ **Pull requests** → Preview deployments
✅ **Build failures** → Email notifications
✅ **Deployment logs** → Available in Vercel Dashboard

### **Contact Support If Needed**
- **Vercel Support**: support@vercel.com
- **Documentation**: vercel.com/docs
- **Status Page**: status.vercel.com

---

**Once properly configured, every `git push origin main` will automatically deploy to your Vercel domain!** 🚀

The current configuration is correct - you just need to ensure GitHub and Vercel are properly connected with the right settings.
