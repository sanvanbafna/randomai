# Random Computer Solutions website

The public website for Random AI and the Random Trading App. Plain HTML and CSS, no build step.

```
index.html            home and contact
random-ai/index.html  Random AI (accounting software)
trading/index.html    Random Trading App (sign-in link goes to app.DOMAIN)
assets/               stylesheet, logo and pictures
deploy/               nginx config for the Lightsail server
```

## Preview locally

```
python -m http.server 8080
```

then open http://localhost:8080.

## Hosting

Served by nginx on the AWS Lightsail server in ap-south-1 (Mumbai). The Random Trading App runs on the
same server on 127.0.0.1:8000 and is reached at `app.DOMAIN`. See `deploy/nginx-site.conf`.

Deploying (once the domain is chosen):

1. Copy this repository's files to `/var/www/random-website` on the server.
2. Put `deploy/nginx-site.conf` in `/etc/nginx/sites-available/`, replace `DOMAIN`, enable it, `sudo nginx -t && sudo systemctl reload nginx`.
3. Point the domain's DNS (`@`, `www`, `app`) at the server's static IP.
4. Add HTTPS with certbot.

Nothing secret belongs in this repository: no `.env`, passwords, keys or app data.
