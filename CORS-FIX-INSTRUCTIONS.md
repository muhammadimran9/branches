# Firebase Storage CORS Fix Instructions

## Problem
Firebase Storage CORS error when uploading from Vercel-hosted Next.js app.

## Solution Steps

### 1. Install Google Cloud SDK (if not already installed)
```bash
# Download and install from: https://cloud.google.com/sdk/docs/install
# Or use package manager:
# Windows (Chocolatey): choco install gcloudsdk
# macOS (Homebrew): brew install --cask google-cloud-sdk
```

### 2. Authenticate with Google Cloud
```bash
gcloud auth login
gcloud config set project branches-app-ff0a2
```

### 3. Apply CORS Configuration
```bash
# Navigate to project directory
cd c:\Users\Developer\Desktop\branches

# Apply CORS configuration
gsutil cors set storage-cors.json gs://branches-app-ff0a2.appspot.com
```

### 4. Verify CORS Configuration
```bash
gsutil cors get gs://branches-app-ff0a2.appspot.com
```

### 5. Alternative: Use Firebase CLI
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Set project
firebase use branches-app-ff0a2

# Apply CORS (requires gsutil)
gsutil cors set storage-cors.json gs://branches-app-ff0a2.appspot.com
```

## Security Best Practices

### 1. Firebase Storage Rules
```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /logos/{fileName} {
      allow read: if true;
      allow write: if request.resource.size < 200 * 1024 // 200KB limit
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

### 2. Client-side Validation
- File size limit: 200KB
- File types: JPEG, PNG, WebP only
- Filename sanitization

### 3. Server-side Alternative (Optional)
Create API route for server-side uploads to avoid CORS entirely:

```javascript
// pages/api/upload.js
import { storage } from '../../lib/firebase-admin'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  // Handle file upload server-side
  // This bypasses CORS issues completely
}
```

## Troubleshooting

### If CORS still doesn't work:
1. Clear browser cache
2. Wait 5-10 minutes for changes to propagate
3. Check Firebase Storage rules
4. Verify domain spelling in CORS config
5. Use browser dev tools to inspect preflight requests

### Common Issues:
- Typo in domain name
- Missing protocol (https://)
- Cached CORS policy
- Firebase Storage rules blocking uploads

## Testing
After applying CORS configuration:
1. Deploy to Vercel
2. Test image upload on live site
3. Check browser console for errors
4. Verify files appear in Firebase Storage console