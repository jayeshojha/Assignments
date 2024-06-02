import './App.css';
import Listview from './Listview';
import Inc from './Inc-dec';
function App() {
  return (
    <>
      <h2>
        Q.1 What is React Js?
      </h2>
      <h3>
        Ans:-
      </h3>
      <p>
        Reactjs is an open-source liberay used for building user interfaces, particularly for single-page applications where UI changes over time without requiring page reloads. React.js allows developers to create reusable UI components and efficiently manage the state of those components.

        Its a component-base-architacture which promotes code reusability and maintainabally ultimatly leading to faster devlopment cycles and better user experiences.
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>
        Q.2 What is NPM in React Js?
      </h2>
      <h3>Ans:-</h3>
      <p>
        NPM (Node Package Manager) is a package manager for JavaScript, widely used in the React.js ecosystem. It allows developers to easily install, manage, and share JavaScript packages and dependencies, including those used in React.js applications.
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.3 What is Role of Node Js in react Js?</h2>
      <h3>
        Ans:-
      </h3>
      <p>
        Dependency Management:-  React.js applications often rely on various third-party libraries and packages for functionality such as state management, routing, and UI components. NPM is used to install these dependencies into the project.
      </p>
      <p>
        Package Installation:- NPM allows developers to define custom scripts in the package.json file, which can be executed using the npm run command. This is commonly used for tasks such as building the project, running tests, or starting a development server.
      </p>
      <p>
        Scripts:- NPM allows developers to define custom scripts in the package.json file, which can be executed using the npm run command. This is commonly used for tasks such as building the project, running tests, or starting a development server.
      </p>
      <p>
        Version Control:- NPM allows developers to specify the versions of packages they depend on in the package.json file. This helps ensure consistency across different environments and makes it easier to manage dependencies.
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.4 What is CLI command In React Js?</h2>
      <h3>
        Ans:-
      </h3>
      <p>
        In React.js, the CLI (Command Line Interface) command refers to a set of commands provided by various tools and frameworks to facilitate the development process.
      </p>
      <p>
        The most common CLI tool used in React.js development is create-react-app, which is an officially supported tool by the React team for bootstrapping React projects.
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.5 What is Components in React Js?</h2>
      <h3>Ans:-</h3>
      <p>
        Components are building blocks used to create userinterfaces.they are reusable modular pice of code that encapsulate a part of the UI's functionality and structure Components can be as small as components can be as small as button or as large as an entire page.

        there are two types of components in react:
        <ul>
          <li>functional component</li>
          <li>Class component</li>
        </ul>
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.6 What is Header and Content Components in React Js?</h2>
      <h3>Ans:-</h3>
      <p>
        In a React.js application, "Header" and "Content" components are common examples of how you might structure your UI components to represent different parts of a webpage or application.
      </p>
      <ul>
        <li>
          Header Component: The Header component typically contains elements such as navigation menus, branding/logo, and other UI elements that are consistently displayed at the top of the page. It provides users with a way to navigate through different sections of the application or website. <br></br>
          for
        </li>
        <li>Content Component: The Content component represents the main content area of the webpage or application. It contains the dynamic content that changes based on user interaction or data fetching. This component may render different sub-components or display different types of content based on the application's logic.</li>
      </ul>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.7 How to install React Js on Windows, linux Operating System? How
        to install NPM and How to check version of NPM?</h2>
      <h3>Ans:-</h3>
      <p>
        To install React.js on Windows, Linux, or any other operating system, you'll first need to install Node.js and npm (Node Package Manager) as they are prerequisites for React development. Here are the steps to install React.js and npm:
      </p>
      <ol>
        <li>Windows:
          <ol>
            <li>Visit the official Node.js website.</li>
            <li>Download the Windows Installer (.msi) for the LTS version (recommended for most users).</li>
            <li>After installation, open Command Prompt or PowerShell and type node -v and npm -v to verify that Node.js and npm are installed and to check their versions</li>
            <li>Once you have Node.js and npm installed, you can create a new React.js project using create-react-app, which is a convenient tool provided by the React team to bootstrap React projects.</li>
          </ol>
        </li>
        <li>Linux (Ubuntu/Debian):
           <ul>
            <li>Open terminal.</li>
            <li>Run the following commands to install Node.js and npm:</li>
            <li>After installation, type node -v and npm -v in the terminal to verify that Node.js and npm are installed and to check their versions.</li>
           </ul>
        </li>
        <li>Once  Node.js and npm installed, create a new React.js project using create-react-app, which is a convenient tool provided by the React team to bootstrap React projects.
          <ol>
            <li>Install create-react-app globally:
              <ul>
                <li>Open  terminal (Command Prompt, PowerShell, or terminal emulator in Linux).</li>
                <li>Run the following command:  npm install -g create-react-app</li>
              </ul>
            </li>
            <li>Create a new React.js project:
              <ul>
                <li>After installing create-react-app, navigate to the directory where we want to create your React project.
                </li>
                <li>Run the following command to create a new React project (replace my-app with preferred project name): npx create-react-app my-app</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.8 How to check version of React Js?</h2>
      <h3>
        Ans:-
      </h3>
      <p>
        <ul>
          <li>Navigate to React.js project directory.</li>
          <li>Open the package.json file in a text editor.</li>
          <li>Look for the "react" dependency in the "dependencies" or "devDependencies" section. It will specify the version of React.js being used in your project.</li>
          <li>The "^17.0.2" indicates that version 17.0.2 of React.js is installed in our project.</li>
        </ul>
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.9 How to change in components of React Js?</h2>
      <h3>Ans:-</h3>
      <p>
        <ul>
          <li>Locate the component you want to change in your project directory. Components in React are usually defined in separate files.</li>
          <li>Open the file containing the component code in code editor. Then, modify the JSX (the markup-like syntax used to define React components) and/or JavaScript logic within the component according to requirements. You can update the component's state, props, event handlers, or any other aspect of its behavior or appearance</li>
          <li>After making your modifications, save the file to ensure your changes are preserved.</li>
        </ul>
      </p>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.10 How to Create a List View in React Js?</h2>
      <h3>Ans:-</h3>
      <ul className='container'>
         <h1>The react Way to render a list</h1>
          <Listview></Listview>
      </ul>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2>Q.11 Create Increment decrement state change by button click?</h2>
      <h3>
        Ans:-
      </h3>
      <div className='container2'>
        <Inc></Inc>
      </div>
    </>
  );
}

export default App;
