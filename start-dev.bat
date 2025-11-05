@echo off
cd /d "e:\### WORK ###\@ (SOHUB) Solution Hub Technologies\SVM_landing 2.0\SVM_landing 2.0_bolt"
echo Clearing cache...
if exist node_modules\.vite rmdir /s /q node_modules\.vite
echo Starting development server...
npx vite --force --host
pause