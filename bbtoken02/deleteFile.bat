@echo off
color 0b
mode con cols=80 lines=25
echo -----------------------------------------------------------------
echo                          ����ļ�ɾ��
echo -----------------------------------------------------------------
echo ******************************************************************
echo Tips:
echo ����*:ɾ����ǰĿ¼�µ�node_modules
echo ��������:���ɾ����Ӧ�ļ������ļ���
echo ******************************************************************
set /p deleFile=��������Ҫɾ�����ļ�:
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