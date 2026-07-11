# Lokvrit Foundation

A fully-static Next.js site deployed to AWS S3 + CloudFront via GitHub Actions.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Static build

`next build` emits the entire site as plain HTML/CSS/JS into the `out/` directory.

```bash
npm run build     # produces ./out
```

No Node.js server is required to host the output.

## Deployment (GitHub Actions → S3 → CloudFront)

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Builds the static site (`npm run build`).
2. Syncs `./out` to S3 with `--delete` (removes files that no longer exist).
3. Creates a CloudFront invalidation so stale cached files are evicted immediately.

### Required GitHub repository secrets

Go to **Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret access key |
| `AWS_REGION` | AWS region of your bucket, e.g. `ap-south-1` |
| `S3_BUCKET_NAME` | Your existing S3 bucket name (no `s3://` prefix) |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID (e.g. `E1A2B3C4D5E6F7`) |

### Minimum IAM permissions

The IAM user only needs:

```json
{
  "Effect": "Allow",
  "Action": [
    "s3:PutObject",
    "s3:DeleteObject",
    "s3:ListBucket"
  ],
  "Resource": [
    "arn:aws:s3:::YOUR_BUCKET_NAME",
    "arn:aws:s3:::YOUR_BUCKET_NAME/*"
  ]
},
{
  "Effect": "Allow",
  "Action": "cloudfront:CreateInvalidation",
  "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
}
```

### S3 bucket configuration

Your bucket should have:
- **Block all public access** → enabled (CloudFront serves the content, not S3 directly)
- **Origin Access Control (OAC)** configured on the CloudFront distribution so it can read from the private bucket

### CloudFront configuration

- **Origin domain**: your S3 bucket (REST endpoint, not website endpoint)
- **Default root object**: `index.html`
- **Error pages**: add a custom error response for 403/404 → `/404.html` with HTTP 404 status code
