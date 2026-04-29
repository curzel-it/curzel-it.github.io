@echo off
if "%1"=="" (
    set PORT=8000
) else (
    set PORT=%1
)
python -m http.server %PORT%