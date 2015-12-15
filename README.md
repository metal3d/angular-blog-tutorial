# Simple tutorial Angular

Ce petit didacticiel permet de voir comment créer un mini-blog avec une API REST via Angular et yeoman. L'utilisation de Docker.io et docket-compose simplifie le travail.

Une version >= 1.8 de Docker est nécessaire afin d'avoir accès à des options particulières.

L'installation de docker-compose se fait via `pip install --user docker-compose`.

# Un "step" par branche

Afin de commencer, ouvrir un terminal et faire:

```
make init
git checkout -f step1
```

Ouvrir un second terminal et faire:

```
make serve
```

L'application est servie sur http://127.0.0.1:9000 et l'api sur http://127.0.0.1:3000

Dans le premier terminal, il est alors possible de faire:

```
git checkout -f step2
git checkout -f step3
etc...
```

**Attention**, dans les pages du didacticiel il est précisé de faire `docker-compose restart`. Cela n'est finalement par recommandé. Cette demande permet de rafraichir l'api qui parfois ne retourne pas les nouvelles entrées qu'un branche peut ajouter à la base. Le plus viable étant d'aller dans le terminal 2, couper docker-compose via le racourci "CTRL+C" et delancer `make serve`

En général, cela n'est pas nécessaire.

