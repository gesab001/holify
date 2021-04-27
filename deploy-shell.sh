#!/usr/bin/env sh


sudo git pull
sudo git add .

echo commit message

read varname

sudo git commit -m "$varname"
sudo git push --all

ng run holify:app-shell:production
ng deploy --no-build --base-href=/holify/


