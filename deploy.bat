 bat
@echo off
title SSC MOCK - One Click Deploy
cd /d "D:\Arpit Pandey"

echo.
echo ====================================
echo       SSC MOCK WEBSITE DEPLOY
echo ====================================
echo.

git add .
if errorlevel 1 goto error

git diff --cached --quiet
if not errorlevel 1 (
    echo Koi naya change nahi mila.
    goto finish
)

git commit -m "Update website"
if errorlevel 1 goto error

git push
if errorlevel 1 goto error

echo.
echo SUCCESS! GitHub par changes upload ho gaye.
echo Netlify ab automatic deployment karega.
goto finish

:error
echo.
echo ERROR! Upload complete nahi hua.
echo Upar diya gaya error check karo.

:finish
echo.
pause 