@echo off
REM 小说助手 - Git 提交辅助脚本
REM 使用方法：commit.bat "feat: 添加新功能描述"

SET /P TITLE=%~1
IF "%~1"=="" (
    ECHO [91m[错误] 请输入提交信息！
    ECHO [93m 用法: commit.bat "feat: 添加新功能"
    ECHO [93m 类型前缀:
    ECHO [93m   feat:     新功能
    ECHO [93m   fix:      修复问题
    ECHO [93m   docs:     文档更新
    ECHO [93m   style:    代码风格
    ECHO [93m   refactor:  代码重构
    ECHO [93m   perf:     性能优化
    ECHO [93m   test:     添加测试
    ECHO [93m   chore:    构建/工具
    GOTO :EOF
)

SET /P MSG=%~2
SET "TYPE=%~3"

:PARSE_TYPE
FOR /f "tokens=1,2 delims=:" %%a in (%TYPE%) DO (
    SET "FIRST_WORD=%%a"
    GOTO :FOUND
)

:FOUND
IF "%FIRST_WORD%"=="feat" SET "CN_NAME=新增"
IF "%FIRST_WORD%"=="fix" SET "CN_NAME=修复"
IF "%FIRST_WORD%"=="docs" SET "CN_NAME=文档"
IF "%FIRST_WORD%"=="style" SET "CN_NAME=样式"
IF "%FIRST_WORD%"=="refactor" SET "CN_NAME=重构"
IF "%FIRST_WORD%"=="perf" SET "CN_NAME=优化"
IF "%FIRST_WORD%"=="test" SET "CN_NAME=测试"
IF "%FIRST_WORD%"=="chore" SET "CN_NAME=构建"
IF "%FIRST_WORD%"=="build" SET "CN_NAME=构建"
SET "CN_NAME=其他"

:EXECUTE
ECHO [92m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ECHO [96m %TITLE%
ECHO [93m 类型: %CN_NAME%
ECHO [96m %MSG%
ECHO [92m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

git add .
IF %ERRORLEVEL% NEQ 0 (
    git commit -m "%TITLE%"
    ECHO [92m✅ Git 提交成功！
) ELSE (
    ECHO [91m❌ Git 提交失败！
    ECHO [93m 请检查是否有未提交的更改
)

:EOF
PAUSE
