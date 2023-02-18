#!/usr/bin/env sh

set -e

npm run build

cd dist

echo > .nojekyll

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Holgermueller/sociallinks.git master:gh-pages

cd -