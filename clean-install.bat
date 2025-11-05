@echo off
echo Cleaning and reinstalling project...
cd /d "e:\### WORK ###\@ (SOHUB) Solution Hub Technologies\SVM_landing 2.0\SVM_landing 2.0_bolt"

echo Stopping all Node processes...
taskkill /f /im node.exe 2>nul
timeout /t 2

echo Removing node_modules...
rmdir /s /q node_modules 2>nul

echo Removing package-lock.json...
del package-lock.json 2>nul

echo Installing fresh dependencies...
npm install

echo Starting development server...
npm run dev

pause