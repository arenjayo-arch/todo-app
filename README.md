# Todo App

A simple and interactive Todo List application built with React. This is a basic CRUD (Create, Read, Update, Delete) system that manages tasks without a backend database.

## Features

✅ **Create** - Add new tasks with a form  
📖 **Read** - View all tasks with their creation date  
✏️ **Update** - Edit existing tasks or mark them as complete  
🗑️ **Delete** - Remove tasks  
📊 **Stats** - Track total, completed, and pending tasks  
📱 **Responsive Design** - Works on desktop and mobile devices  

## Project Structure

```
src/
├── components/
│   ├── TodoForm.js        # Form to add new tasks
│   ├── TodoForm.css
│   ├── TodoList.js        # Container for todo items
│   ├── TodoList.css
│   ├── TodoItem.js        # Individual todo item with edit/delete
│   └── TodoItem.css
├── App.js                 # Main app component with CRUD logic
├── App.css
├── index.js               # React entry point
└── index.css
public/
└── index.html             # HTML template
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd Todo-app
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Usage

1. **Add a Task**: Type in the input field and click "Add Task"
2. **Complete a Task**: Click the checkbox to mark it as done
3. **Edit a Task**: Click the ✏️ button and modify the text
4. **Delete a Task**: Click the 🗑️ button to remove it

## Tech Stack

- **React** 18.2.0
- **React DOM** 18.2.0
- **CSS3** for styling and animations
- **Local State Management** (useState hook)

## CRUD Operations

All CRUD operations are managed in `App.js` without using a database:

- **CREATE** (`addTodo`): Adds a new todo with unique ID, text, and timestamp
- **READ**: Todos are stored in the component state and displayed in TodoList
- **UPDATE** (`toggleTodo`, `editTodo`): Modifies todo completion status or text
- **DELETE** (`deleteTodo`): Removes a todo from the list

## Features to Consider Adding

- Local storage persistence
- Categories/Tags
- Due dates
- Priority levels
- Search/Filter functionality
- Dark mode
- Backend API integration

## Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Launch the test runner
- `npm eject` - Eject from create-react-app (irreversible)

## License

This project is open source and available under the MIT License.
# todo-app
