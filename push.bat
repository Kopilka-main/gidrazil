@echo off
REM Запусти этот файл двойным кликом или из cmd: push.bat
cd /d "%~dp0"

echo === Проверяю git ===
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    git init -b main
)
git config user.email "shlyapnikovna@gmail.com"
git config user.name "Kopilka-main"

echo === Привязываю remote ===
git remote remove origin 2>nul
git remote add origin https://github.com/Kopilka-main/gidrazil.git

echo === Добавляю и коммичу файлы ===
git add -A
git diff --cached --quiet || git commit -m "Initial commit: landing page"
git branch -M main

echo.
echo === Push ===
git push -u origin main --force

echo.
echo === Готово ===
echo Дальше: https://github.com/Kopilka-main/gidrazil/settings/pages
pause
