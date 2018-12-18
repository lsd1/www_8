@echo off
color 0b
mode con cols=80 lines=25
echo -----------------------------------------------------------------
echo                          顽固文件删除
echo -----------------------------------------------------------------
echo ******************************************************************
echo Tips:
echo 输入*:删除当前目录下的node_modules
echo 输入其它:则会删除对应文件名的文件夹
echo ******************************************************************
set /p deleFile=请输入您要删除的文件:
if %deleFile% == * (goto deleNodeModules) else (goto deleUserFile)

:deleNodeModules
md deleEmptyFile
robocopy deleEmptyFile node_modules /purge
rd node_modules
rd deleEmptyFile
exit

:deleUserFile
md deleEmptyFile
robocopy deleEmptyFile %deleFile% /purge
rd %deleFile%
rd deleEmptyFile
exit