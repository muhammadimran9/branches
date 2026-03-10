@echo off
echo Applying CORS configuration to Firebase Storage...
echo.
echo Make sure you have Firebase CLI installed and are logged in:
echo   npm install -g firebase-tools
echo   firebase login
echo.
echo Applying CORS configuration...
gsutil cors set storage-cors.json gs://branches-app-ff0a2.appspot.com
echo.
echo CORS configuration applied successfully!
echo.
echo To verify the configuration:
gsutil cors get gs://branches-app-ff0a2.appspot.com
pause