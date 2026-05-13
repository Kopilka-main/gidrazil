@echo off
REM Запусти этот файл после правок — он зальёт изменения на GitHub,
REM и сайт автоматически обновится через 30-60 секунд.
cd /d "%~dp0"

REM Сообщение коммита можно передать аргументом: deploy.bat "fix header"
REM Если не передал — будет автогенерированное с датой и временем.
set "MSG=%~1"
if "%MSG%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "DT=%%a"
    set "MSG=update %DT:~0,4%-%DT:~4,2%-%DT:~6,2% %DT:~8,2%:%DT:~10,2%"
)

echo === Проверяю изменения ===
git status --short

echo.
echo === Коммичу: %MSG% ===
git add -A
git diff --cached --quiet
if %errorlevel%==0 (
    echo Изменений нет — выходим.
    pause
    exit /b 0
)
git commit -m "%MSG%"

echo.
echo === Push на GitHub ===
git push

echo.
echo === Готово ===
echo Сайт обновится через 30-60 секунд: https://kopilka-main.github.io/gidrazil/
echo Статус сборки: https://github.com/Kopilka-main/gidrazil/actions
pause
