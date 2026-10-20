# Random Computer Solutions website

The public website for Random AI and the Random Trading App. Plain HTML and CSS, no build step.

```
index.html            home
random-ai/index.html  Random AI (accounting software)
trading/index.html    Random Trading App
about/index.html      About us: company and Random XP history
assets/               stylesheet, script, logo, pictures and app screenshots (img/screens)
deploy/               nginx config for the Lightsail server
```

## Preview locally

```
python -m http.server 8080
```

then open http://localhost:8080.

## Hosting

Served free by GitHub Pages from the `main` branch at https://randomai.in (see `CNAME`).
Merging a pull request into `main` updates the live site within a minute or two.

The Random Trading App will run separately on the AWS Lightsail server at `app.randomai.in`.
`deploy/nginx-site.conf` is kept for that server.

The Download and Subscribe buttons only show a "Launching soon" message for now; nothing is collected.

Nothing secret belongs in this repository: no `.env`, passwords, keys or app data.
