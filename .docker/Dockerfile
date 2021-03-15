FROM frolvlad/alpine-glibc

ENV DENO_VERSION=1.7.4
ENV PUPPETEER_VERSION=5.5.1

# Deno
# https://hub.docker.com/r/hayd/alpine-deno/
RUN apk add --virtual .download --no-cache curl \
  && curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip --output deno.zip \
  && unzip deno.zip \
  && rm deno.zip \
  && chmod 755 deno \
  && mv deno /bin/deno \
  && apk del .download
ENV DENO_DIR /deno-dir/
ENV DENO_INSTALL_ROOT /usr/local

# Puppeteer
# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
 && PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@${PUPPETEER_VERSION}/install.ts
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser

# Tools
RUN apk add --no-cache git
