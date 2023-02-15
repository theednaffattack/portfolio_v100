# Dokku

## Dokku setup
**Add a git remote for Dokku**
`git remote add dokku dokku@<yourserver.com>:<dokku-app-name>`

## Dokku deploy
git push dokku main

## Dokku set letsencrypt email
dokku config:set --no-restart personal-site DOKKU_LETSENCRYPT_EMAIL=blahblah@example.com

## Miscellaneous Notes
- Dokku deployment [Dokku docs](https://dokku.com/docs/deployment/application-deployment/)

- Deploy a static site with Dokku [John Franey blog](https://johnfraney.ca/blog/build-deploy-static-site-dokku/)

- Dokku deploy errors (ssh-related) [DigitalOcan Questions](https://www.digitalocean.com/community/questions/git-push-dokku-master-is-returning-permission-denied)

- Deploy subdirectories to Dokku [Gist](https://gist.github.com/svschannak/c2eb2d921719a9de9660f26aca2f60e1)

- Dokku SSL [Tim Perry - blog](https://medium.com/@pimterry/effortlessly-add-https-to-dokku-with-lets-encrypt-900696366890)