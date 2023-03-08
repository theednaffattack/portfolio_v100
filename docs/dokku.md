# Dokku

## Dokku setup

**Add a git remote for Dokku**<br>
`git remote add dokku dokku@<yourserver.com>:<dokku-app-name>`

## Dokku deploy command

`git push dokku main`<br>
`git subtree push --prefix dist dokku main`

## Dokku zero downtime deploys

[Dokku docs - deploy](https://dokku.com/docs/deployment/zero-downtime-deploys/)

## Buildpacks

Static: https://github.com/dokku/heroku-buildpack-nginx

### Using multiple buildpacks

[Dokku docs](https://dokku.com/docs~v0.5.8/deployment/buildpacks/#using-multiple-buildpacks)

**.buildpacks file example**

```bash
https://github.com/heroku/heroku-buildpack-nodejs.git#v203
https://github.com/dokku/heroku-buildpack-nginx.git#v22
```

try again

## Miscellaneous Notes

-   Dokku deployment [Dokku docs](https://dokku.com/docs/deployment/application-deployment/)

-   Deploy a static site with Dokku [John Franey blog](https://johnfraney.ca/blog/build-deploy-static-site-dokku/)

-   Dokku deploy errors (ssh-related) [DigitalOcan Questions](https://www.digitalocean.com/community/questions/git-push-dokku-master-is-returning-permission-denied)

-   Deploy subdirectories to Dokku [Gist](https://gist.github.com/svschannak/c2eb2d921719a9de9660f26aca2f60e1)

-   Dokku SSL [Tim Perry - blog](https://medium.com/@pimterry/effortlessly-add-https-to-dokku-with-lets-encrypt-900696366890)

-   Dokku setup (total) [Vito Botta blog](https://vitobotta.com/2022/02/16/deploying-an-app-with-dokku/)
