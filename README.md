# 🤖 MUMU MINI BOT v3.0.0
## The Most Powerful WhatsApp Bot with 85+ Commands

![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-25D366?style=flat-square&logo=whatsapp)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)
![Render](https://img.shields.io/badge/Host-Render-46E3B7?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

### ✨ Features
- **85+ Commands** - Comprehensive command system
- **WhatsApp Integration** - Direct WhatsApp messaging
- **Render Deployable** - One-click deployment ready
- **Pairing Code Support** - No phone required for authentication
- **Auto-Reply System** - Automated message responses
- **User Management** - Full user database and analytics
- **Group Management** - Group moderation and control
- **Media Handling** - Image, video, audio processing
- **Fun & Games** - Interactive games and entertainment
- **Premium Features** - Advanced automation tools

### 📋 Command Categories

#### 1. **INFO Commands (1-10)**
- `/help` - Show all commands
- `/about` - About bot
- `/status` - Bot status
- `/ping` - Check response time
- `/owner` - Owner info
- `/time` - Current time
- `/date` - Current date
- `/version` - Bot version
- `/uptime` - Bot uptime
- `/botinfo` - Detailed bot info

#### 2. **TEXT Commands (11-20)**
- `/echo` - Repeat text
- `/upper` - Convert to uppercase
- `/lower` - Convert to lowercase
- `/reverse` - Reverse text
- `/capitalize` - Capitalize text
- `/wordcount` - Count words
- `/charcount` - Count characters
- `/sort` - Sort text alphabetically
- `/unique` - Remove duplicates
- `/textstats` - Text statistics

#### 3. **UTILITY Commands (21-30)**
- `/calc` - Simple calculator
- `/random` - Generate random number
- `/dice` - Roll a dice
- `/flip` - Flip a coin
- `/rps` - Rock Paper Scissors
- `/genpass` - Generate password
- `/quote` - Random quote
- `/b64encode` - Base64 encode
- `/b64decode` - Base64 decode
- `/uuid` - Generate UUID

#### 4. **CONVERTER Commands (31-40)**
- `/c2f` - Celsius to Fahrenheit
- `/f2c` - Fahrenheit to Celsius
- `/km2mi` - KM to Miles
- `/mi2km` - Miles to KM
- `/kg2lb` - KG to Pounds
- `/lb2kg` - Pounds to KG
- `/urlencode` - URL encode
- `/urldecode` - URL decode
- `/hex2dec` - Hex to Decimal
- `/dec2hex` - Decimal to Hex

#### 5. **USER Management (41-50)**
- `/register` - Register as user
- `/profile` - View your profile
- `/stats` - View your stats
- `/warn` - Warn a user
- `/afk` - Set AFK status
- `/noafk` - Remove AFK
- `/block` - Block user
- `/unblock` - Unblock user
- `/usercount` - Total users
- `/ban` - Ban user

#### 6. **MEDIA Handling (51-60)**
- `/ytaudio` - Download YouTube audio
- `/ytvideo` - Download YouTube video
- `/imginfo` - Image information
- `/vidinfo` - Video information
- `/docinfo` - Document information
- `/audioinfo` - Audio information
- `/filesize` - Check file size
- `/compress` - Compress image
- `/qrcode` - Generate QR code
- `/screenshot` - Take screenshot

#### 7. **GROUP Management (61-70)**
- `/ginfo` - Group information
- `/gmembers` - List members
- `/promote` - Promote member
- `/demote` - Demote member
- `/kick` - Kick member
- `/mute` - Mute group
- `/unmute` - Unmute group
- `/gdesc` - Set group description
- `/gicon` - Set group icon
- `/grules` - Set group rules

#### 8. **FUN & Games (71-80)**
- `/8ball` - Magic 8Ball
- `/joke` - Random joke
- `/meme` - Random meme
- `/trivia` - Trivia question
- `/wyr` - Would you rather
- `/lovecalc` - Love calculator
- `/magic` - Magic responses
- `/tarot` - Tarot card
- `/zodiac` - Zodiac information
- `/dot` - Dare or Truth

#### 9. **PREMIUM Features (81-85)**
- `/autoreply` - Set auto reply
- `/schedule` - Schedule message
- `/broadcast` - Broadcast message (Owner)
- `/sysinfo` - System information
- `/botstats` - Bot statistics

### 🚀 Installation & Setup

#### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Render Account (for deployment)

#### Local Setup

```bash
# Clone repository
git clone https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT
cd FX-MINI-BOT

# Install dependencies
npm install

# Copy and configure .env
cp .env.example .env
# Edit .env with your settings

# Run bot
npm start

# For development with auto-reload
npm run dev
```

#### Render Deployment

1. **Connect GitHub Repository**
   - Go to [Render](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select this repository

2. **Configure Environment**
   - **Name**: `mumu-mini-bot`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/index.js`

3. **Add Environment Variables**
   ```
   OWNER_NUMBER=263776719736
   PREFIX=/
   NODE_ENV=production
   PORT=3000
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your bot is now live!

### 🔐 Configuration

Edit `.env` file:

```env
# Bot Owner
OWNER_ID=263776719736
OWNER_NUMBER=263776719736

# Bot Settings
PREFIX=/
NODE_ENV=production
PORT=3000

# Deployment
RENDER_SERVICE_ID=your_service_id
PAIRING_CODE_ENABLED=true
PAIRING_CODE_LINK=https://render.com

# API Keys
OPENAI_API_KEY=your_key_here
WEATHERAPI_KEY=your_key_here
YOUTUBE_API_KEY=your_key_here
```

### 📱 Pairing Code Setup

The bot supports WhatsApp pairing code authentication:

1. When bot starts, it will show a QR code in terminal
2. Or use pairing code for web-based authentication
3. Scan/enter code to authenticate
4. Bot will automatically save session for future use

### 🌐 API Endpoints

```
GET  /              - Bot status
GET  /commands      - List all commands
POST /webhook       - Webhook receiver
```

### 📊 Database

Bot includes in-memory database with:
- User profiles and statistics
- Group information
- Auto-replies
- Blocked users
- Warning system
- AFK status

### 🛠️ Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### 📝 Logging

Logs are stored in:
- Console output (real-time)
- `logs/mumu.log` (file-based)

### 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

### 👨‍💻 Author

**rodwellhwenhira-sudo**
- GitHub: [@rodwellhwenhira-sudo](https://github.com/rodwellhwenhira-sudo)
- WhatsApp: [263776719736](https://wa.me/263776719736)

### ⭐ Support

If you like this project, please give it a star! ⭐

### 📞 Contact

For issues, feature requests, or questions:
- Open an [Issue](https://github.com/rodwellhwenhira-sudo/FX-MINI-BOT/issues)
- Contact owner: 263776719736

---

**MUMU MINI BOT** © 2026 - Made with ❤️ for WhatsApp Automation
