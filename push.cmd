chcp 65001

:: 先push生成文档
call npm run dbuild
cd ./docs/.vuepress/dist
git init
git add *
git commit -m%time%
git push -f git@github.com:320wuyanzu/blogs.git master:gh-pages

:: 再push源文档
cd ../../../
git add *
git commit -m"添加数据结构和程序设计"
git push -f git@github.com:320wuyanzu/blogs.git master:master