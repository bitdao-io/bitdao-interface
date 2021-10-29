#!/usr/bin/env sh

deploy_bucket="${BITDAO_SITE_S3_BUCKET:-bitdaotools.io}"
cache_duration="${BITDAO_SITE_CACHE_DURATION:-3600}"

echo "Deploying site to ${deploy_bucket} with cache duration ${cache_duration}"
aws s3 sync dist/ "s3://${deploy_bucket}" --cache-control max-age=${cache_duration}
