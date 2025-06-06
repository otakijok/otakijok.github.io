#!/bin/sh

aws s3 sync . s3://my-bucket/react.js/ \
 --profile r2 --endpoint-url https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com \
 --exclude "*.sh" \
 --exclude ".git/*" \
 --metadata-directive "REPLACE" --cache-control "max-age=30"
