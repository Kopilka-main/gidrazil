@echo off
REM Запусти этот файл двойным кликом или из cmd: push.bat
cd /d "%~dp0"

echo === Инициализация git ===
git init -b main
git config user.email "shlyapnikovna@gmail.com"
git config user.name "NikitaShlyapnikov"

echo === Привязываю remote ===
git remote remove origin 2>nul
git remote add origin https://github.com/NikitaShlyapnikov/gidrazil.git

echo === Коммит и push ===
git add .
git commit -m "Initial commit: landing page"
git branch -M main
git push -u origin main

echo.
echo === Готово ===
echo Дальше: https://github.com/NikitaShlyapnikov/gidrazil/settings/pages
pause
