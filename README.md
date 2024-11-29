# Crypto Value Finder App

![Crypto Value Finder Screenshot](/crypto.png)

A web application that converts value of a cryptocurrency into selected local currency along with showing the cuurrent news related to that selected cryptocurrency

Built with React.js, [Coin Layer API](https://coinlayer.com/), and [Media Stack API](https://mediastack.com/)

## Features

- 📍 Converts value of a cryptocurrency into local currency using Coin Layer API
- 📰 Shows the curent news using Media Stack API
- 🌐 Support for multiple cryptocurrencies and local currencies worldwide

## Installation

To set up the Crypto Value Finder App project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/apilayer/crypto-value-finder-app.git
   ```

2. Navigate to the project directory:

   ```
   cd crypto-value-finder-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your API keys:

   ```
   MEDIA_STACK_API_KEY=your_media_stack_api_key_here
   COIN_LAYER_API_KEY=your_coin_layer_api_key_here
   ```

5. Run the development server:

   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Select your desired cryptocurrency and the local currency
2. It will show the currency value of thhe cryptocurrency into the selected local currency using Coin Layer API.
3. With the help of Media StackAPI, the app will also show the current news related to selected cryptocurrency.

## Technologies Used

- [React](https://reactjs.org/)
- [Media Stack API](https://mediastack.com/) to fetch news
- [Coin Layer API](https://coinlayer.com/) for value of cryptocurrencies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.
