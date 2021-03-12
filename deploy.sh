git checkout -f
git pull origin master
npm i -ci
npm run migration:run
npm run build
pm2 restart next
