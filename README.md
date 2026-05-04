````markdown name=README.md url=https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT/blob/main/README.md
# 🤖 MUMU MINI BOT v3.0.0

**The Most Powerful WhatsApp Bot with 80+ Commands | Render Deployable | Pairing Code Support**

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)](https://nodejs.org/)
[![WhatsApp Web.js](https://img.shields.io/badge/whatsapp--web.js-1.25.0-green.svg)](https://github.com/pedrosans/whatsapp-web.js)
[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Deployment on Render](#-deployment-on-render)
- [Commands (80+)](#-commands-80)
- [Usage Examples](#-usage-examples)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## ✨ Features

### Core Features
✅ **WhatsApp Integration** - Full WhatsApp Web automation
✅ **80+ Commands** - Extensive command library
✅ **Pairing Code Support** - No password authentication needed
✅ **Render Deployment** - One-click deployment
✅ **AI Chat Integration** - OpenAI GPT support
✅ **Auto Reply System** - Automated message responses
✅ **Media Handling** - Image, video, audio, document processing
✅ **Group Management** - Full group administration tools
✅ **User Statistics** - Track user interactions
✅ **Database Support** - SQLite, MongoDB, Redis
✅ **Rate Limiting** - Built-in protection against spam
✅ **Logging System** - Comprehensive logging with Winston
✅ **Webhook Support** - External integrations
✅ **File Upload/Download** - Media management
✅ **OCR Support** - Text extraction from images

### Advanced Features
✅ **Scheduling** - Schedule messages for later
✅ **Caching** - Redis-based performance optimization
✅ **User Permissions** - Role-based access control
✅ **Admin Panel** - Web interface for management
✅ **Analytics** - Usage statistics and insights
✅ **Backup/Restore** - Data backup functionality
✅ **Multi-language Support** - 20+ languages
✅ **Custom Prefix** - Use any prefix you want
✅ **Error Handling** - Graceful error management

---

## 🚀 Installation

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**
- **Chrome/Chromium** (for WhatsApp Web)

### Step 1: Clone Repository
\`\`\`bash
git clone https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT.git
cd FX-MINI-BOT
\`\`\`

### Step 2: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 3: Configure Environment
\`\`\`bash
cp .env.example .env
# Edit .env with your credentials
nano .env
\`\`\`

### Step 4: Run Bot Locally
\`\`\`bash
npm start
\`\`\`

### Step 5: Scan QR Code or Use Pairing Code
- If using traditional method: Scan QR code with WhatsApp
- If using pairing code: Follow on-screen instructions

---

## ⚙️ Configuration

### `.env` File Setup

\`\`\`env
# Bot Credentials
OWNER_ID=263776719736
OWNER_NUMBER=263776719736
PREFIX=/

# Deployment
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# API Keys
OPENAI_API_KEY=your_key_here
WEATHERAPI_KEY=your_key_here
YOUTUBE_API_KEY=your_key_here

# Database
DATABASE_URL=sqlite:./database/mumu.db

# Features
ENABLE_AI_CHAT=true
ENABLE_AUTO_REPLY=true
ENABLE_MEDIA_DOWNLOAD=true
\`\`\`

### `config.json` Structure
\`\`\`json
{
  "botName": "MUMU MINI BOT v3.0.0",
  "ownerId": "263776719736",
  "prefix": "/",
  "deploymentPlatform": "render",
  "features": {
    "autoReply": true,
    "aiIntegration": true,
    "mediaHandling": true,
    "groupManagement": true
  }
}
\`\`\`

---

## 📦 Deployment on Render

### One-Click Deployment

1. **Click Deploy Button**
   [![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT)

2. **Fill in Environment Variables**
   - \`OWNER_ID\`: 263776719736
   - \`OWNER_NUMBER\`: 263776719736
   - \`OPENAI_API_KEY\`: Your OpenAI key

3. **Deploy Service**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)

4. **Get Pairing Code**
   - Visit your Render service URL
   - Follow pairing code link
   - Complete WhatsApp authentication

### Manual Deployment

\`\`\`bash
# 1. Push to GitHub
git push origin main

# 2. Connect Render to GitHub
# - Go to https://render.com
# - Create new Web Service
# - Connect your GitHub repo
# - Set environment variables
# - Deploy

# 3. Monitor Logs
# - View real-time logs in Render dashboard
\`\`\`

### Pairing Code Link
\`\`\`
https://your-render-service.onrender.com/pairing
\`\`\`

---

## 📚 Commands (80+)

### Text Commands (1-10)
| Command | Description | Usage |
|---------|-------------|-------|
| /hello | Greet the bot | /hello |
| /help | Show all commands | /help |
| /info | Bot information | /info |
| /status | Bot status | /status |
| /echo | Echo your message | /echo hello |
| /ping | Check response time | /ping |
| /time | Current time | /time |
| /weather | Get weather | /weather city |
| /quote | Random quote | /quote |
| /random | Random number | /random |

### Utility Commands (11-20)
| Command | Description | Usage |
|---------|-------------|-------|
| /calc | Calculator | /calc 5+5 |
| /reverse | Reverse text | /reverse hello |
| /charcount | Count characters | /charcount hello |
| /wordcount | Count words | /wordcount hello world |
| /upper | Convert to uppercase | /upper hello |
| /lower | Convert to lowercase | /lower HELLO |
| /nameGen | Generate name | /nameGen |
| /flip | Coin flip | /flip |
| /dice | Roll dice | /dice |
| /location | Get coordinates | /location |

### Conversion Tools (21-30)
| Command | Description | Usage |
|---------|-------------|-------|
| /c2f | Celsius to Fahrenheit | /c2f 25 |
| /f2c | Fahrenheit to Celsius | /f2c 77 |
| /km2mi | KM to Miles | /km2mi 10 |
| /mi2km | Miles to KM | /mi2km 6 |
| /lb2kg | Pounds to KG | /lb2kg 150 |
| /kg2lb | KG to Pounds | /kg2lb 68 |
| /b64encode | Base64 encode | /b64encode hello |
| /b64decode | Base64 decode | /b64decode aGVsbG8= |
| /urlencode | URL encode | /urlencode hello world |
| /urldecode | URL decode | /urldecode hello%20world |

### User Management (31-40)
| Command | Description | Usage |
|---------|-------------|-------|
| /register | Register user | /register John |
| /profile | View profile | /profile |
| /stats | Bot statistics | /stats |
| /block | Block user | /block @user |
| /unblock | Unblock user | /unblock @user |
| /isadmin | Check admin status | /isadmin |
| /users | List users | /users |
| /perms | Check permissions | /perms |
| /warn | Warn user | /warn @user |
| /kick | Kick from group | /kick @user |

### Media Commands (41-50)
| Command | Description | Usage |
|---------|-------------|-------|
| /imginfo | Image information | /imginfo [reply to image] |
| /docinfo | Document info | /docinfo [reply to doc] |
| /vidinfo | Video information | /vidinfo [reply to video] |
| /audioinfo | Audio information | /audioinfo [reply to audio] |
| /filesize | Check file size | /filesize [reply to file] |
| /caption | Set caption | /caption new caption |
| /download | Download media | /download [URL] |
| /qrcode | Generate QR code | /qrcode https://example.com |
| /screenshot | Take screenshot | /screenshot |
| /compress | Compress media | /compress [reply to file] |

### Group Management (51-60)
| Command | Description | Usage |
|---------|-------------|-------|
| /ginfo | Group information | /ginfo |
| /gsettings | Group settings | /gsettings |
| /promote | Promote to admin | /promote @user |
| /demote | Demote from admin | /demote @user |
| /gdesc | Change description | /gdesc new desc |
| /gicon | Change group icon | /gicon [reply to image] |
| /mute | Mute group | /mute 1h |
| /unmute | Unmute group | /unmute |
| /glink | Get group link | /glink |
| /leave | Leave group | /leave |

### AI & Chat (61-70)
| Command | Description | Usage |
|---------|-------------|-------|
| /chat | Chat with AI | /chat Hello |
| /ask | Ask question | /ask What is Python? |
| /translate | Translate text | /translate en es hello |
| /sentiment | Analyze sentiment | /sentiment I love this |
| /tts | Text to speech | /tts hello world |
| /stt | Speech to text | /stt [reply to audio] |
| /summarize | Summarize text | /summarize [long text] |
| /grammar | Check grammar | /grammar i am happy |
| /define | Define word | /define python |
| /rhyme | Find rhymes | /rhyme cat |

### Advanced Features (71-80+)
| Command | Description | Usage |
|---------|-------------|-------|
| /schedule | Schedule message | /schedule 1h hello |
| /remindme | Set reminder | /remindme 30m task |
| /autoreply | Set auto reply | /autoreply I'm busy |
| /broadcast | Send to all users | /broadcast message |
| /backup | Backup data | /backup |
| /restore | Restore data | /restore backup.zip |
| /settings | Bot settings | /settings |
| /announce | Make announcement | /announce news |
| /reaction | Add reaction | /reaction [emoji] |
| /forward | Forward message | /forward [reply to msg] |

---

## 📖 Usage Examples

### Basic Text Command
\`\`\`
User: /hello
Bot: 👋 Hello! Welcome to MUMU MINI BOT
\`\`\`

### Calculator
\`\`\`
User: /calc 100 + 50 * 2
Bot: 🧮 Result: 200
\`\`\`

### Unit Conversion
\`\`\`
User: /c2f 25
Bot: 🌡️ 25°C = 77°F
\`\`\`

### AI Chat
\`\`\`
User: /chat What is artificial intelligence?
Bot: 🤖 Artificial intelligence refers to computer systems...
\`\`\`

### Group Management
\`\`\`
User: /promote @user
Bot: 👑 @user has been promoted to admin
\`\`\`

### Scheduling
\`\`\`
User: /schedule 2h Good morning everyone!
Bot: ⏰ Message scheduled for 2 hours from now
\`\`\`

---

## 🛠️ Troubleshooting

### Issue: Bot won't start
\`\`\`bash
# Check Node version
node -v  # Should be 18.x or higher

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Run in debug mode
DEBUG=* npm start
\`\`\`

### Issue: QR Code not scanning
- Ensure WhatsApp is updated to latest version
- Use phone camera or QR scanner app
- Try pairing code method instead

### Issue: Commands not responding
- Check bot is running: \`npm start\`
- Verify prefix in .env matches usage
- Check bot permissions in group
- Review logs: \`tail -f logs/mumu.log\`

### Issue: Render deployment fails
- Check \`OWNER_ID\` and \`OWNER_NUMBER\` are set
- Ensure all required environment variables are filled
- Check build logs in Render dashboard
- Monitor live logs during deployment

---

## 📊 Project Structure

\`\`\`
FX-MINI-BOT/
├── src/
│   ├── index.js              # Main bot file
│   ├── commands/             # Command modules
│   │   ├── text/
│   │   ├── utility/
│   │   ├── conversion/
│   │   ├── admin/
│   │   ├── media/
│   │   ├── group/
│   │   └── ai/
│   ├── utils/
│   │   ├── logger.js         # Logging setup
│   │   ├── database.js       # Database connection
│   │   └── helpers.js        # Helper functions
│   └── middleware/
│       ├── auth.js           # Authentication
│       └── rateLimit.js      # Rate limiting
├── database/                 # Database files
├── logs/                     # Log files
├── .env.example              # Environment template
├── config.json               # Bot configuration
├── package.json              # Dependencies
├── README.md                 # This file
└── render.yaml               # Render deployment config
\`\`\`

---

## 🔗 Useful Links

- **WhatsApp Web.js**: https://github.com/pedrosans/whatsapp-web.js
- **Render Documentation**: https://render.com/docs
- **Node.js**: https://nodejs.org/
- **OpenAI API**: https://platform.openai.com/

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   \`\`\`bash
   git clone https://github.com/your-username/FX-MINI-BOT.git
   \`\`\`

2. **Create feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`

3. **Commit changes**
   \`\`\`bash
   git commit -m 'Add amazing feature'
   \`\`\`

4. **Push to branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`

5. **Open Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**rodwellhwenhira-sudo**
- GitHub: [@rodwellhwenhira-sudo](https://github.com/rodwellhwenhira-sudo)
- Owner Number: 263776719736

---

## ⭐ Support

If you find this project helpful, please give it a star! ⭐

## 📞 Contact

For support, issues, or suggestions:
- GitHub Issues: [Create Issue](https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT/issues)
- WhatsApp: Owner Number - 263776719736

---

**Last Updated**: May 4, 2026
**Version**: 3.0.0
**Status**: ✅ Active & Maintained

---

Made with ❤️ by rodwellhwenhira-sudo
````
