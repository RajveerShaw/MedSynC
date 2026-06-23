# MedSynC

MedSynC is a comprehensive, three-tier web platform engineered to empower users in reaching their wellness and dietary targets. By seamlessly connecting a dynamic frontend, a secure backend, and an efficient load balancer, the application delivers a highly responsive and reliable user experience.

---

## System Architecture

The application is structured into three distinct layers to ensure optimal performance and security:

* **Frontend (React.js):** The visual, user-facing layer of the app. It provides a highly responsive and intuitive interface, making it simple for users to manage their fitness and dietary logs across different devices.
* **Backend:** The core processing engine. It manages all business logic, handles secure database transactions, and coordinates communication with external APIs to ensure your data is always safe and accurate.
* **Load Balancer:** The traffic manager. It evenly disperses incoming network requests across a cluster of backend servers, preventing bottlenecks and ensuring the application remains highly available.

## Core Features

* **Workout Tracker:** Easily log, organize, and monitor your exercise routines.
* **Dietary Tracker:** Keep a close eye on your daily meals and nutritional intake.
* **Wellness Blog:** Read curated articles, tips, and insights related to health and fitness.
* **Health Calculators:** Instantly assess personal health metrics with built-in BMI and BMR calculators.
* **Secure Authentication:** Protect your personal progress with a safe, encrypted login and registration system.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| **React.js** | Constructs the interactive, component-based user interface. |
| **Proxmox** | Provides the virtualized environment used to host and monitor the server infrastructure. |
| **External APIs** | Connects the application to third-party databases to fetch accurate, real-time exercise and nutrition data. |

## Campus Deployment

Designed specifically for the campus community, MedSynC is readily accessible over the school's Wi-Fi network for both students and staff. Thanks to its load-balanced architecture, the application easily accommodates high volumes of concurrent users, guaranteeing smooth, zero-downtime access even during peak usage hours.

---

## Local Environment Setup

To run MedSynC on your personal computer for development or testing, follow these steps:

1. **Clone** the project repository down to your local machine.
2. **Install** the required dependencies by opening your terminal, navigating into the root directory of the project, and running:
> `npm install`


3. **Boot up** the local development server by executing:
> `npm start`


4. **Launch** the app by opening your web browser and navigating to: `http://localhost:3000` to view the application.

