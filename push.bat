@echo off
cd /d "%~dp0"
echo ========================================================
echo  Pushing Child Development & Autism Therapy Center
echo  Target: https://github.com/HTMLStaticWorks-Org/Child_Development_Autism_Therapy_Center
echo ========================================================
echo.
git push origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Git repository successfully updated on GitHub!
) else (
    echo [ERROR] Push failed. If prompted, please authenticate with your GitHub credentials.
)
echo.
pause
