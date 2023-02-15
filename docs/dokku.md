# Dokku

## Dokku setup
**Add a git remote for Dokku**<br>
`git remote add dokku dokku@<yourserver.com>:<dokku-app-name>`

## Dokku deploy command
`git push dokku main`

## Buildpacks
Static: https://github.com/dokku/heroku-buildpack-nginx 


```bash
dokku buildpacks:clear personal-site
dokku buildpacks:set personal-site BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs.git#v203
dokku buildpacks:set personal-site BUILDPACK_URL=https://github.com/dokku/heroku-buildpack-nginx.git#v22
```



## Miscellaneous Notes
- Dokku deployment [Dokku docs](https://dokku.com/docs/deployment/application-deployment/)

- Deploy a static site with Dokku [John Franey blog](https://johnfraney.ca/blog/build-deploy-static-site-dokku/)

- Dokku deploy errors (ssh-related) [DigitalOcan Questions](https://www.digitalocean.com/community/questions/git-push-dokku-master-is-returning-permission-denied)

- Deploy subdirectories to Dokku [Gist](https://gist.github.com/svschannak/c2eb2d921719a9de9660f26aca2f60e1)

- Dokku SSL [Tim Perry - blog](https://medium.com/@pimterry/effortlessly-add-https-to-dokku-with-lets-encrypt-900696366890)

- Dokku setup (total) [Vito Botta blog](https://vitobotta.com/2022/02/16/deploying-an-app-with-dokku/)