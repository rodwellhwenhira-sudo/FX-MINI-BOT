# MUMU MINI BOT - Deployment Guide

## 🚀 Deploy on Render.com

### Step 1: Prepare Your Repository

1. Ensure your GitHub repository has all required files:
   - `src/index.js` - Main bot file
   - `package.json` - Dependencies
   - `.env.example` - Configuration template
   - `Procfile` - Process file
   - `render.yaml` - Render configuration

### Step 2: Create Render Account

1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render to access your repositories

### Step 3: Create New Web Service

1. Click **"New +"** button
2. Select **"Web Service"**
3. Choose **"Connect a repository"**
4. Select **FX-MINI-BOT** repository

### Step 4: Configure Service

- **Name**: `mumu-mini-bot`
- **Environment**: Node
- **Region**: Choose closest to you
- **Branch**: main
- **Build Command**: `npm install`
- **Start Command**: `node src/index.js`
- **Instance Type**: Free (or paid for persistent sessions)

### Step 5: Add Environment Variables

Click **"Environment"** and add:

```
OWNER_NUMBER = 263776719736
OWNER_ID = 263776719736
PREFIX = /
NODE_ENV = production
PORT = 3000
```

### Step 6: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (2-5 minutes)
3. Check deployment logs for errors
4. Once active, get your Render URL

### Step 7: Start Bot

Bot will automatically start after deployment. Check logs:

```
✅ Authenticated!
🟢 MUMU MINI BOT v3.0.0 Ready!
```

## 🔄 WhatsApp Pairing Code

### Option A: QR Code (Recommended)

1. Check Render logs for QR code
2. Scan with WhatsApp:
   - Open WhatsApp Web on desktop
   - Scan QR code with your phone

### Option B: Pairing Code

1. Go to WhatsApp Settings → Linked Devices
2. Click "Link a Device"
3. Enter pairing code from logs
4. Bot will authenticate

## 📊 Keep Bot Running

### Free Tier
- Renders free tier spins down after 15 minutes of inactivity
- Consider using a monitoring service to keep it alive

### Paid Tier
- Use "Standard" or higher plan
- Bot runs continuously
- More reliable for production

## 🔍 Monitoring

### View Logs

1. Go to your Render dashboard
2. Select your service
3. Click "Logs" tab
4. View real-time logs

### Common Issues

**Issue**: Bot not responding
- Check environment variables
- Verify owner number is correct
- Check render logs for errors

**Issue**: Authentication failed
- Remove `.wwebjs_auth` folder
- Redeploy to get new QR code
- Scan QR code again

**Issue**: Service spun down
- Upgrade to paid plan
- Use third-party monitoring service
- Keep-alive scripts

## 🔐 Security

1. **Never commit `.env` file**
2. **Use strong owner numbers**
3. **Enable two-factor auth on WhatsApp**
4. **Keep dependencies updated**
5. **Use environment variables for secrets**

## 📱 Setup Webhook

1. Get your Render URL from dashboard
2. Add to `.env`:
   ```
   WEBHOOK_URL=https://your-service.onrender.com/webhook
   ```
3. Use POST requests to `/webhook`

## 🚀 Advanced Deployment

### Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Render

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST https://api.render.com/deploy/srv-${{ secrets.RENDER_SERVICE_ID }}?key=${{ secrets.RENDER_API_KEY }}
```

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
```

## 📈 Scaling

- **Free Plan**: Single instance, 512MB RAM
- **Standard**: Multiple instances, auto-scaling
- **Pro**: Custom configuration, SLA guarantee

## 💾 Persistence

For persistent data:

1. Use external database (MongoDB, PostgreSQL)
2. Store files on cloud storage (AWS S3, Backblaze)
3. Configure environment variables for DB connection

## ✅ Deployment Checklist

- [ ] GitHub repository configured
- [ ] `.env.example` created with all variables
- [ ] `package.json` has correct dependencies
- [ ] `src/index.js` exists and works locally
- [ ] `Procfile` configured
- [ ] `render.yaml` ready
- [ ] Environment variables added to Render
- [ ] Repository connected to Render
- [ ] Service created and deployed
- [ ] WhatsApp authentication working
- [ ] Bot responding to commands
- [ ] Logs showing no errors

## 🎉 Success!

Your MUMU MINI BOT is now running on Render!

**Tips**:
- Monitor logs regularly
- Update bot periodically
- Add new features as needed
- Keep dependencies up to date
- Back up important data

---

**Need Help?**
- Check [Render Documentation](https://render.com/docs)
- Visit [whatsapp-web.js GitHub](https://github.com/pedroslopez/whatsapp-web.js)
- Contact bot owner: 263776719736
