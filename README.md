# Cash Play: An Investing Game

Cash Play is an interactive web-based investment simulation game where players make stock investment decisions and see their long-term impact over a 5-year period (May 2020 - May 2025).

## 🎮 Game Features

- **Two Difficulty Modes**: Easy mode with company descriptions and historical charts, or Hard mode with metrics only
- **Real Stock Data**: Based on actual historical stock performance from real companies
- **Interactive Dashboard**: Track your progress, remaining skips, and available cash
- **Leaderboard System**: Save and compare scores with other players
- **Educational Content**: Learn about financial metrics and investing concepts

## 🚀 How to Play

1. Choose your difficulty level (Easy or Hard)
2. Make investment decisions on 5 different stock opportunities
3. Use financial metrics and historical data (Easy mode) to guide your choices
4. Try to outperform the S&P 500 benchmark
5. Save your score to the leaderboard

### Game Mechanics
- Starting cash: $10,000
- 5 investment decisions per game
- 3 skips available (use wisely!)
- Performance compared against S&P 500 returns

## 🛠 Setup Instructions

### Frontend Only (Simple Setup)
1. Clone this repository
2. Open `pages/index.html` in your web browser
3. Start playing! (Leaderboard will use localStorage)

### Full Setup with Database (Recommended)
1. Clone this repository
2. Install Node.js dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Serve the frontend (in a new terminal):
   ```bash
   # Using Node.js
   npx serve ./pages -l 8000
   
   # Or using Python
   cd pages
   python -m http.server 8000
   ```
5. Open http://localhost:8000 in your browser

## 📁 Project Structure

```
CashPlay/
├── pages/
│   ├── index.html          # Welcome page
│   └── game.html           # Main game interface
├── backend/
│   ├── server.js           # Express.js backend
│   ├── package.json        # Node.js dependencies
│   └── leaderboard.db      # SQLite database (auto-created)
└── README.md
```

## 🎯 Educational Value

Cash Play teaches players about:
- **Financial Metrics**: PE ratio, PS ratio, profit margins, market cap
- **Investment Decision Making**: Risk vs. reward analysis
- **Market Performance**: Comparing individual stock performance to market indices
- **Historical Analysis**: Understanding price trends and company performance

## 💾 Technical Details

### Frontend
- Pure HTML/CSS/JavaScript (no frameworks)
- Responsive design using Tailwind CSS
- Chart.js for historical price visualization
- Modern UI with glassmorphism effects

### Backend
- Node.js with Express.js
- SQLite database for leaderboard storage
- CORS enabled for cross-origin requests
- RESTful API endpoints

### API Endpoints
- `GET /api/leaderboard?difficulty=easy|hard` - Fetch leaderboard
- `POST /api/leaderboard` - Submit new score

## 🏆 Game Data

The game includes 24+ real stocks from various sectors:
- Technology (Apple, Microsoft, NVIDIA, etc.)
- Healthcare (Johnson & Johnson)
- Financial Services (Visa, Mastercard, JPMorgan)
- Consumer Goods (Walmart, Coca-Cola, P&G)
- Energy (Exxon Mobil, Chevron)
- And more!

All stock prices and metrics are based on actual historical data.

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradient backgrounds
- **Visual Feedback**: Progress bars, animated elements, and hover effects
- **Accessibility**: Tooltips and clear navigation
- **Responsive**: Works on desktop, tablet, and mobile devices

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

---

*Built with ❤️ for aspiring investors and finance education* 