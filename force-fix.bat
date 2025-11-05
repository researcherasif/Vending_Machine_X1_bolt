@echo off
echo Force fixing Vite project...
cd /d "e:\### WORK ###\@ (SOHUB) Solution Hub Technologies\SVM_landing 2.0\SVM_landing 2.0_bolt"

echo Killing all Node processes...
taskkill /f /im node.exe /t 2>nul
taskkill /f /im npm.exe /t 2>nul
timeout /t 3

echo Force removing node_modules...
rd /s /q node_modules 2>nul
del package-lock.json 2>nul
del yarn.lock 2>nul

echo Clearing npm cache...
npm cache clean --force

echo Installing with npm...
npm install --no-package-lock

echo Starting server on different port...
npx vite --port 3000 --host localhost

pause