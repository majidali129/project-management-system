# Project-Management-System

## Overview 🚀
A full-fledged Project Management System built with the MERN stack, featuring real-time collaboration. Users can efficiently manage projects, teams, tasks, and events with seamless communication and workflow automation.

## Features 🚀

### Project Manager / Admin  
- Project creation and management  
- User management (add/remove users, assign roles)  
- Project assignment to team members  
- Task creation, assignment, and status updates  
- Comments on tasks for feedback and discussion  
- Reporting (task completion rates, basic analytics)  
- Role-based permissions for different user levels  
- Search and filtering for tasks and projects  
- Custom workflows for project-specific needs 
- Integrations with calendars, code repositories ( OPTIONAL )
- Real-time updates and notifications 

### Developer / Team Member  
- View assigned projects and tasks  
- Update task status (In Progress, Completed, Blocked)  
- Add comments for discussions and clarifications  
- Manage personal tasks related to the project  
- Track time spent on tasks 
- Receive notifications for task assignments and updates 
- Collaborate with teammates on shared tasks 
- Submit work for review and approval 
- Integrate with code repositories (e.g., Git)

## Tech Stack 🛠️

### Frontend  
- **React.js** – Modern UI development  
- **Redux Toolkit / Context API** – State management  
- **Tailwind CSS / Material UI** – Styling and design system  
- **React Query / SWR** – Data fetching and caching (optional)

## Tooling
- **TypeScript** - Static type cheker ( type safety )

### Backend  
- **Node.js** – Server-side runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database for storing project data  
- **Mongoose** – ODM for MongoDB
### Service 
- **Cloudinary** - File-System
- **Supabase** - Backend as a service for social logins
  

### Real-Time Features  
- **Socket.io** – Real-time task updates, notifications, and collaboration  

### Authentication & Authorization  
- **JWT (JSON Web Tokens)** – Secure authentication  
- **Role-Based Access Control (RBAC)** – Admin, Project Manager, Developer

### Additional Integrations (Advanced)  
- **Calendar Integration (Google Calendar, Outlook API)** – Task scheduling  
- **GitHub/GitLab API** – Code repository integration  
- **Payment Gateway (Stripe / PayPal)** – If monetizing project management features

## Setup 🛠️
Follow these steps to set up the project locally:
### Prerequisites  
Make sure you have the following installed on your system:  
- **Node.js** (Latest LTS version)  
- **MongoDB** (Locally or via MongoDB Atlas)  
- **Git** (For version control)

### Clone the Repository  
```
git clone https://github.com/majidali129/project-management-system.git

cd project-management-system
```
## Install Dependencies
### Backend
```
cd backend
npm install
```
### Frontend
```
cd frontend
npm install
```
## Environment Variables
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET_KEY=YOUR_KEY
ACCESS_TOKEN_EXPIRY=YOUR_EXPIRY_TIME
REFRESH_TOKEN_SECRET_KEY=YOUR_KEY
REFRESH_TOKEN_EXPIRY=YOUR_EXPIRY_TIME
SECRET_KEY=YOUR_SECRET_KEY
CLIENT_URL=http://localhost:5173
```

## Run the Project
### Start the Backend Server
```
cd backend
npm run dev
```
### Start the Frontend
```
cd backend
npm run dev
```

## Testing 🧪

```
npm run test
```
