<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kanban Project</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-jDnnfMx/xIj4q6fX9Y4sU6y4U6zpSAswTnHX6BfmjV/c+kJcZj8WnzX9RmDmuySyORpOo50r+wj3c80MMeL2Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      font-size: 2rem;
      margin-top: 0;
    }
    h2 {
      font-size: 1.5rem;
      margin-top: 0;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .demo-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #4B5563;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 0.25rem;
    }
    .demo-link:hover {
      background-color: #1F2937;
    }
    pre {
      background-color: #F7FAFC;
      color: #374151;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: scroll;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Kanban Project</h1>
    <img src="screenshot.png" alt="Kanban Project Screenshot">
    <p>This full-stack Kanban application allows users to create, read, update, and delete boards and tasks. The app is built using modern web technologies such as React, Tailwind, Node.js, and Redux Toolkit. The user interface is designed to be responsive and displays optimally on various screen sizes.</p>
    <h2>Features</h2>
    <ul>
      <li>Create, read, update, and delete boards and tasks</li>
      <li>Form validation when creating/editing boards and tasks</li>
      <li>Mark subtasks as complete and move tasks between columns</li>
      <li>Drag and drop tasks to change their status and re-order them in a column</li>
      <li>Toggle between light/dark themes</li>
      <li>Hide/show board sidebar</li>
      <li>Track changes using localStorage</li>
    </ul>
    <p>Here is a <a href="#" class="demo-link">live demo</a> of the app.</p>
    <h2>Installation</h2>
    <pre>
      git clone https://github.com/your-github-username/kanban-project.git
      cd kanban-project
      npm install
      npm start
    </pre>
    <p>The app will be available at <code>http://localhost:3000/</code>.</p>
   
