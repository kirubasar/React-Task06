## My Todo App
This is a simple Todo application built with React. It allows to create, read, update and delete tasks.
1. Create the react folder
   - React-tasko6 
   - open this folder with vs code

2. Install Dependencies
   ````
   npm install
   ````
3. Clear the codes
   - App.js and index.css, App.css these files default codes are cleared.

4. create components
   1. Created pages folder Within this folder create [Todos.jsx](Todos.jsx) file
   2. Created components folder within this folder create [TodoItem.jsx](TodoItem.jsx)

5. Install Router and Axios
   ````
   npm intall react-router-dom
   npm install axios
   ````
   - checked it installed in package.json

6. Start the server and Open in Browser
   ````
   npm run dev
   ````
   - when we click the above comment in terminal, display localhost like `http:localhost:3000`. 
   - then copy it and paste our browser
   - it display our application
## Write the code in Components
## 1. App component
   - Sets up routing using `react-router-dom`.
   - Use `Todos` component as the main page.
## 2. Todos component
   - Fetches data from a mock API endpoint(`https://66920e1a26c2a69f6e915e08.mockapi.io/todos`).
   - Its doing creating, updating, and deleting, reading todos.
   - Its renders a list of todo item using the `TodoItem` component.
   - this component provides functionality to create todos.
## 3. TodoItem component
   - Display todo details from map method (name, username, email,address, company, phone) in card
   - It provides functionality  to delete and update todos.
## Other works
 -  now our todos card display in browser. suppose the crud method doesn't work refresh then it work 
 - next push our folder to github and deployed it.     