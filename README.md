# TopCourses-React

This project is my first React app, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Tailwind CSS](https://tailwindcss.com/).
It is basically a course app which uses an API to display some of the courses. It helped me to understand more about components.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Using Tailwind CSS](#using-tailwind-css)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. Navigate to the project directory:

    ```sh
    cd your-repo-name
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Using Tailwind CSS

This project uses Tailwind CSS for styling. To customize Tailwind, you can modify the `tailwind.config.js` file in the root directory.

### Tailwind Configuration

The Tailwind configuration file (`tailwind.config.js`) is where you can customize your Tailwind setup. For more details, refer to the [Tailwind configuration documentation](https://tailwindcss.com/docs/configuration).

### Adding Custom Styles

To add custom styles, you can create a CSS file and import it into your component files. Tailwind's utility-first classes can be used directly in your JSX.

### PostCSS Configuration

This project uses PostCSS to process your CSS with Tailwind. The PostCSS configuration file (`postcss.config.js`) is also located in the root directory.

## License

Distributed under the MIT License. See `LICENSE` for more information.
