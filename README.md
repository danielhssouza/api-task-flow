# API Task Flow

## Description

API Task Flow is a RESTful API built with NestJS for efficient task management. The system allows users to create, update, list, and view task details. It is a basic application that can be expanded with additional features like authentication, authorization, and data validation.

## Features

- **Create Task:** Allows the creation of new tasks with a title and description.
- **Update Task:** Allows updating the title, description, and status of an existing task.
- **List Tasks:** Displays a list of all created tasks.
- **View Task Details:** Allows viewing the details of a specific task.

## Requirements

- Node.js v14 or higher
- NestJS CLI
- PostgreSQL (or another TypeORM-compatible database)

## Installation

1. Clone the repository:
   git clone https://github.com/danielhssouza/api-task-flow.git
   cd api-task-flow
Install the dependencies with pnpm:

pnpm install
Set up the PostgreSQL database:

Create a database named taskdb.
Update the database credentials in the src/app.module.ts file.
Run migrations (if applicable):

pnpm typeorm migration:run
Usage
Start the development server:

pnpm run start:dev
The API will be available at http://localhost:3000.

Endpoints
Create Task
POST /tasks
Request Body:
json
Copiar código
{
  "title": "Task Title",
  "description": "Task description"
}
List All Tasks
GET /tasks
View Task Details
GET /tasks/:id
Update Task
PUT /tasks/:id
Request Body:
json
Copiar código
{
  "title": "New Title",
  "description": "New description",
  "status": "completed"
}
Delete Task
DELETE /tasks/:id