# Isaiah Wright Portfolio Website

![CI/CD Pipeline](https://github.com/IsaiahWright902/isaiah-wright-website/actions/workflows/cloud-run-deploy.yml/badge.svg)
![Docker Build](https://github.com/IsaiahWright902/isaiah-wright-website/actions/workflows/docker-build-test.yml/badge.svg)
![Lighthouse](https://img.shields.io/badge/Lighthouse-97.5%2F100-success?logo=lighthouse)

**Live Site:** [isaiahwright.dev](https://isaiahwright.dev)

## Overview

A modern, interactive portfolio website showcasing my professional experience, technical skills, and projects. Built with a focus on user customization, performance, and clean architecture, this site demonstrates full-stack development capabilities from frontend design to cloud deployment.

This portfolio serves as both a professional showcase and a playground for exploring new technologies and ideas.

## Key Features

- **Theme Customization** - Users can select from 9 preset color themes or use a custom color picker to create their own theme that dynamically updates the UI
- **Light/Dark Mode** - Persistent theme preferences using Redux Persist
- **Interactive Skills Section** - Searchable and filterable skills with proficiency visualization via pie charts
- **Contact Form** - Functional contact form with validation and email delivery via SendGrid API
- **Interactive Projects** - Live demos including a Custom Equation Builder and GitHub Repo Cleaner tool
- **Responsive Design** - Mobile-first approach with Material-UI breakpoints for all device sizes
- **Performance Optimized** - Server-side rendering with Next.js and optimized asset delivery

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit with Redux Persist
- **UI Library:** Material-UI (MUI) v5
- **Styling:** Emotion, SCSS, CSS Modules
- **Form Handling:** React Hook Form with Zod validation

### Backend
- **API Routes:** Next.js API Routes
- **Email Service:** SendGrid Mail API
- **Future Infrastructure:** Designed for extensibility with additional features

### Testing
- **Framework:** Jest
- **Library:** React Testing Library

### DevOps & Deployment
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Registry:** Google Container Registry (GCR)
- **Hosting:** Google Cloud Run (serverless)
- **Infrastructure as Code:** Terraform (see `/terraform` directory)
- **Deployment:** Automated pipeline with zero-downtime releases

## Architecture Highlights

- **Component-Driven Design** - Modular, reusable components for easy maintenance and scaling
- **Type Safety** - Full TypeScript implementation across the codebase
- **State Persistence** - User preferences saved locally and synced across sessions
- **API Integration** - RESTful API design with proper error handling and validation
- **Automated Workflows** - PR automation with Docker build validation and dependency management via Dependabot

## Infrastructure & CloudOps

### Cloud Architecture
This portfolio is currently hosted on **Google Cloud Run** for cost efficiency, but includes full Terraform infrastructure code demonstrating AWS deployment capabilities.

**Current Deployment (GCP):**
- **Platform:** Google Cloud Run (serverless containers)
- **Scaling:** Automatic 0-N instances based on traffic
- **Cost:** ~$3-5/month with serverless pricing
- **Deployment:** Automated via GitHub Actions to GCR → Cloud Run

**Alternative Infrastructure (AWS - Terraform):**
The `/terraform` directory contains a complete, working Infrastructure as Code setup for AWS deployment:
- **Modules:** Custom Terraform modules for networking, security, compute, and container registry
- **VPC Setup:** Custom VPC with public/private subnets and routing
- **Compute:** EC2 instances with Docker runtime
- **Container Registry:** ECR for Docker image storage
- **Security:** Security groups with least-privilege access controls

**Why GCP over AWS for this project?**
While the AWS infrastructure demonstrates more complex IaC capabilities, Cloud Run's serverless model provides:
- 60-70% cost reduction compared to always-on EC2 instances
- Zero infrastructure maintenance overhead
- Automatic scaling from zero
- Better fit for low-traffic portfolio site

The Terraform code remains as a demonstration of multi-cloud capabilities and complex infrastructure provisioning.

## Project Structure

```
.
├── src/
│   ├── app/                    # Next.js app router pages
│   ├── components/             # Reusable React components
│   │   ├── HomePageSections/   # Main portfolio sections
│   │   ├── Modals/             # Modal components
│   │   └── Navbar/             # Navigation components
│   ├── store/                  # Redux state management
│   ├── theme/                  # MUI theme configuration
│   ├── utils/                  # Utility functions
│   └── validators/             # Zod validation schemas
├── terraform/                  # AWS Infrastructure as Code
│   ├── main.tf                 # Root configuration
│   └── modules/                # Reusable Terraform modules
│       ├── networking/         # VPC, subnets, routing
│       ├── security/           # Security groups
│       ├── container/          # ECR repository
│       ├── instance/           # EC2 compute
│       └── ami/                # AMI selection
└── .github/workflows/          # CI/CD automation
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```
## Contact

Questions or want to connect? Reach out via the [contact form](https://isaiahwright.dev) or find me on [LinkedIn](https://www.linkedin.com/in/isaiah-wright-4b89191a3/).
