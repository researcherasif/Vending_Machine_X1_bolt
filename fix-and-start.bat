@echo off
echo Fixing MIME type issues and starting development server...
cd /d "e:\### WORK ###\@ (SOHUB) Solution Hub Technologies\SVM_landing 2.0\SVM_landing 2.0_bolt"

echo Clearing all caches...
if exist node_modules\.vite rmdir /s /q node_modules\.vite
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Installing dependencies...
call npm install

echo Starting development server with force flag...
call npm run dev -- --force --host 127.0.0.1 --port 5173

pause