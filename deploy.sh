#!/usr/bin/env sh


sudo git pull
sudo git add .

echo commit message

read varname

sudo git commit -m "$varname"
sudo git push --all
ng deploy --build-target=app-shell:production --base-href=/holify/


