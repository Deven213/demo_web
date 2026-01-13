@echo off
git remote -v > info.txt
git branch >> info.txt
git status >> info.txt
echo DONE >> info.txt
