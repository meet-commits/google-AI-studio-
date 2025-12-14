---
description: Deploy the application to Netlify via CLI
---

1. Build the project for production
// turbo
npm run build

2. Deploy to Netlify (Production)
npx netlify-cli deploy --prod --dir=dist
