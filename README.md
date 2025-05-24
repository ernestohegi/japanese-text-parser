# 予知夢 Yochimu

<div align="center">
  <img src="https://img.shields.io/badge/next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/react-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Japanese-日本語-D64545?style=for-the-badge" alt="Japanese">
  <br>
  <img src="https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Jest-Testing-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest">
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</div>

<div align="center">
  <h3>🌸 Japanese Text Parser with Contextual Learning 🌸</h3>
  <p><i>Learn Japanese vocabulary efficiently through context with this minimalist tool</i></p>
  <br>
</div>

## ✨ Introduction

[Yochimu (予知夢)](https://yochimu.now.sh) means "prophetic dream" in Japanese. This tool helps you read Japanese texts comfortably by parsing the content, providing definitions, and showing example sentences—all with a minimalist Japanese aesthetic.

The goal is to facilitate an in-context learning approach for Japanese vocabulary, allowing you to:

- 🔍 Search for Japanese words and see their meanings
- 📝 View example sentences showing words in context
- 💾 Save selected sentences for later study
- 📤 Export vocabulary lists as TSV files for Anki flashcards

## 🌟 Live Demo

Visit [https://yochimu.now.sh](https://yochimu.now.sh) to try it now!

Or try instant translations by appending a search query:  
[https://yochimu.now.sh/?search=神様が大好き](https://yochimu.now.sh/?search=神様が大好き)

## 📋 Features

- **Japanese text tokenization** for accurate parsing
- **Anki integration** through TSV export format
- **Context-based learning** through example sentences
- **Responsive design** for desktop and mobile

## 🔧 Technology Stack

### Frontend

- **Next.js** - React framework for server-rendered applications
- **React** - UI component library
- **CSS-in-JS** - Styled with inline styles and Japanese aesthetics

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **Kuromoji** - Japanese morphological analyzer for tokenization

### Development & Testing

- **Jest** - JavaScript testing framework
- **Cheerio** - Server-side HTML parsing for scraping
- **Vercel** - Deployment and hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ernestohegi/japanese-text-parser.git
   cd japanese-text-parser
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Using the Parser CLI

Parse Japanese text directly from the command line:

```bash
cd server
TEXT="私はペンです。" node index.js
```

## 📚 Testing

Run tests with:

```bash
pnpm test
```

## 🔮 Future Plans

- Build an integrated SRS (Spaced Repetition System)
- Add user accounts to save progress
- Implement more dictionaries and translation sources
- Add audio pronunciation for vocabulary

## 📝 Notes

This is an ongoing project (currently v0.1.0). We're still evaluating different dictionaries and translation services for optimal accuracy and performance.

## ⚙️ Dependencies

This parser relies on [Kuromoji](https://github.com/takuyaa/kuromoji.js) for Japanese text tokenization.

---

<div align="center">
  <p>頑張ってください！</p>
  <p>Made with ❤️ by Ernesto Hegi</p>
</div>
