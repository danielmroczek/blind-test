# Blind Test App

This web application is designed for conducting blind tests in a unique and collaborative manner. Unlike traditional blind tests, where one person manages the entire process, this app enables full participation without any single individual having complete knowledge of the test setup. The process involves two participants collaborating to shuffle and rename the products, ensuring anonymity and fairness.

## Personal Story

The idea for this app emerged from a real-life situation. During a gathering with friends, we wanted to determine which beer was truly the best through a blind taste test. However, we faced a dilemma: traditional blind tests require one person to act as a coordinator who doesn't participate in the tasting, but rather handles the pouring and numbering of drinks. In our group of four, everyone wanted to participate in the tasting, so we initially abandoned the idea.

The challenge kept nagging at me, and I often pondered whether it would be possible to conduct a blind test where everyone could participate. Then, during a shower thought moment, it hit me - a method that could work by involving two people in the "mixing" process, ensuring that no single person would have complete knowledge of the setup, thus maintaining objectivity.

This application was built to facilitate such tests, and I'm happy to report that we successfully used it for our beer tasting session, with everyone able to participate and discover their true favorite beer.

## Live Demo

Try it out: [Blind Test App Demo](https://danielmroczek.github.io/blind-test/)

## How It Works

The steps are as follows:  

1. Select the number of products to be tested.  
2. Input the names of the products.  
3. The app assigns random numbers (1–n) to each product for the first participant to label them accordingly. Once completed, they click "Next."  
4. A transition screen appears for a smooth handover to the second participant, who clicks "Next."  
5. The app shuffles the numbers again (1–n), and the second participant re-labels the products based on the new numbers. After finishing, they click "Next."  
6. Another transition screen appears, and the actual blind test is conducted with all participants. Once completed, someone clicks "Next."  
7. The results are revealed, displaying the product names corresponding to the final numbers.  

This collaborative approach ensures impartiality and enhances the blind testing experience by maintaining true anonymity until the results are unveiled.

## Technical Features

- Pure frontend implementation (no backend required)
- Built with vanilla JavaScript (ES6+)
- Responsive design
- Color-coded step system

## Setup

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required

## License

MIT License