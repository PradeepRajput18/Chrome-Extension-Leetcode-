# Leetcode Bot

Leetcode Bot is a Chrome extension that integrates a chatbot powered by the Gemini API into the Leetcode platform. This extension enhances your Leetcode experience by providing intelligent assistance while you solve coding problems.

## Features

- **Gemini-powered Chatbot**: Utilizes the advanced capabilities of the Gemini API to provide intelligent responses and assistance.
- **Seamless Integration**: Works directly on Leetcode pages, offering a smooth user experience.
- **Problem-specific Help**: Provides context-aware assistance based on the current Leetcode problem you're working on.

## Installation

To install the Leetcode Bot extension:

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to any Leetcode problem page.
2. Click on the Leetcode Bot extension icon in your Chrome toolbar to open the popup interface.
3. Interact with the chatbot to get assistance with your current problem.

## Technical Details

The extension is built using Manifest V3 and consists of the following components:

- `manifest.json`: Defines the extension structure and permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `background.js`: Handles background processes and API communications.
- `content.js`: Interacts with the Leetcode webpage to provide context-aware functionality.

## Permissions

The extension requires the following permissions:

- `storage`: To store user preferences and chat history.
- `activeTab`: To interact with the current tab.
- `https://leetcode.com/*`: To operate on Leetcode pages.

## Contributing

Contributions to improve Leetcode Bot are welcome. Please feel free to submit pull requests or open issues to suggest enhancements or report bugs.

## License

This project is open-source. I will be helpfull if you guys can provide paid version of Large Language models APIS , like openAI , perpexility , Gemini , 

I have used free version but it has no proper response

Citations:
[1] https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/README-template.md
