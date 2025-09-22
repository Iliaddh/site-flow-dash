# Machine Monitoring Dashboard

A modern, interactive web application for visualizing manufacturing machine hierarchies and monitoring operations in real-time.

## Project Overview

This dashboard provides a comprehensive view of manufacturing operations organized in a hierarchical structure: Sites → Departments → Machines. Built with React, TypeScript, and TailwindCSS for a clean, industrial design.

## Features

- **Hierarchical Visualization**: Expandable tree structure showing Sites, Departments, and Machines
- **Real-time Status Monitoring**: Color-coded status indicators (Running, Idle, Maintenance, Offline, Error)
- **Advanced Filtering**: Filter machines by status and search by name or type
- **Detailed Machine Views**: Click any machine for comprehensive performance metrics
- **Dashboard Summary**: Overview cards showing total machines, running status, and alerts
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Live Demo

**URL**: https://lovable.dev/projects/f3ddac66-ab38-4a1b-a3df-a0a53c275610

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f3ddac66-ab38-4a1b-a3df-a0a53c275610) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technical Stack

This project is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development and building
- **Date Handling**: date-fns for time formatting
- **Icons**: Lucide React for consistent iconography

## Data Structure

The application uses a hierarchical mock data structure:

```typescript
Sites → Departments → Machines
```

Each machine includes:
- Status (Running, Idle, Maintenance, Offline, Error)
- Performance metrics (Efficiency, Uptime, Temperature, Pressure)
- Metadata (Type, Serial Number, Last Updated)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f3ddac66-ab38-4a1b-a3df-a0a53c275610) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
