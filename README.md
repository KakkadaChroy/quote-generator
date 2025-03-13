# 📝 JustShop Quote Generator

A sleek, intuitive quote generator application built for the JustShop internship program. This application allows users to generate inspiring quotes with a single click, copy them to clipboard, and save favorites for later reference.

![Quote Generator Preview](https://just-shop-quote-generator.vercel.app)

## ✨ Features

- **Quote Generation**: Instantly generate new quotes from a diverse collection
- **Copy to Clipboard**: One-click copy functionality for easy sharing
- **Favorites System**: Save and manage your favorite quotes
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Choose your preferred viewing experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/justshop-quote-generator.git
   cd quote-generator
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## 🛠️ Technologies Used

- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **Redux.js**: State management
- **Axios**: API requests
- **Tailwind CSS**: Utility-first styling
- **IndexedDB**: Client-side storage for favorites

## 💡 How to Use

### Generating Quotes
1. Visit the homepage
2. Click the "Generate Quote" button to fetch a new quote
3. New quotes will appear in the "New Quote" section

### Saving Favorites
1. When you find a quote you like, click the "Save to Favorites" button
2. View all saved quotes in the "Favorites" section
3. Your favorites are stored locally and will persist between sessions

### Copying Quotes
1. Click the "Copy" button next to any quote
2. The quote text (with attribution) will be copied to your clipboard
3. Paste anywhere you'd like to share

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory, ready for deployment.

## 📚 Future Improvements

- Add user accounts for cloud-based favorite synchronization
- Implement quote categories and filtering options
- Add social sharing capabilities
- Enhance with additional quote metadata (author images, backgrounds)
- Create browser extension version

## 👨‍💻 Developer

This application was developed as part of the JustShop internship program.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)