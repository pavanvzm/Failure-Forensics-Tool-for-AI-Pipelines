# 🔍 Failure Forensics Tool for AI Pipelines

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-blue?logo=typescript)
![Expo](https://img.shields.io/badge/Expo-~50.0.0-black?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.73.4-61dafb?logo=react)

**An AI-powered mobile application for diagnosing, tracing, and remediating failures in ML/AI pipelines**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Usage](#-usage) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

The **Failure Forensics Tool** is an advanced mobile application designed for MLOps engineers to monitor, analyze, and debug AI/ML pipeline failures in real-time. Leveraging Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), this tool autonomously analyzes execution logs, traces data drift, and correlates anomalous behavior with specific code changes or infrastructure issues.

### 🎯 Key Capabilities

| Capability | Description |
|------------|-------------|
| **🔬 Root Cause Analysis (RCA)** | Automatically ingests and parses error logs to pinpoint exact failure causes (schema mismatches, incompatible libraries, etc.) |
| **📊 Historical Correlation** | Compares current pipeline failures against successful runs to surface patterns and recurring issues |
| **🔗 Semantic Code & Data Linking** | Maps error outputs directly to repositories, version histories, and configuration parameters |
| **🤖 Autonomous Remediation** | Advanced agents hypothesize fixes, run automated tests, and self-heal by applying code/configuration diffs |

---

## ✨ Features

- **📱 Real-time Dashboard** - Monitor pipeline health and failures at a glance
- **🔍 Deep-Dive Forensics** - Investigate root causes with detailed analysis
- **🌙 Dark MLOps Theme** - Optimized UI for extended monitoring sessions
- **⚡ High-Performance Lists** - Smooth scrolling through large datasets with FlashList
- **🛡️ Type-Safe Architecture** - Built with TypeScript for reliability and maintainability
- **🔄 State Management** - Powered by Zustand for efficient global state handling
- **🧭 File-Based Routing** - Intuitive navigation with Expo Router

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Expo](https://expo.dev/) ~50.0.0 (React Native 0.73.4) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) ^5.3.0 |
| **Styling** | [NativeWind](https://www.nativewind.dev/) ^4.0.36 (Tailwind CSS for React Native) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) ^4.5.1 |
| **Navigation** | [Expo Router](https://expo.github.io/router/) ~3.4.7 |
| **Icons** | [Lucide React Native](https://lucide.dev/) ^0.344.0 |
| **Performance** | [React Native FlashList](https://shopify.github.io/flash-list/) ^1.6.4 |
| **Animations** | [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) ~3.6.1 |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **iOS Simulator** (for Mac) or **Android Emulator** / physical device

### Installation

#### Option 1: GitHub Codespaces (Recommended)

1. Click the **"Code"** button on the repository
2. Select **"Codespaces"** tab
3. Click **"Create codespace on main"**
4. Wait for the environment to initialize
5. Run `npm start` in the terminal

#### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/pavanvzm/failure-forensics-tool.git
cd failure-forensics-tool

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Devices

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

> 💡 **Tip:** Scan the QR code displayed in your terminal with the **Expo Go** app (iOS/Android) to run on a physical device.

---

## 📱 Usage Guide

### Dashboard Navigation

1. **Launch the app** using one of the methods above
2. **View the real-time dashboard** showing active pipeline statuses
3. **Tap on any failed pipeline** to access detailed forensics
4. **Review root cause analysis** with LLM-powered insights
5. **Explore remediation suggestions** and apply fixes if needed

### Analyzing Failures

- **Error Logs**: View parsed error messages with highlighted critical information
- **Timeline View**: Track when failures occurred relative to deployments
- **Correlation Insights**: See related code changes and config modifications
- **Action Items**: Get prioritized recommendations for resolution

---

## 📁 Project Structure

```
failure-forensics-tool/
├── app/                    # Expo Router pages & navigation
│   ├── _layout.tsx         # Root layout component
│   ├── index.tsx           # Dashboard home screen
│   └── ...                 # Additional route screens
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI elements (buttons, cards, etc.)
│   └── ...                 # Feature-specific components
├── store/                  # Zustand state management
│   └── ...                 # State slices & stores
├── hooks/                  # Custom React hooks
├── utils/                  # Helper functions & utilities
├── types/                  # TypeScript type definitions
├── assets/                 # Images, fonts, and static resources
├── global.css              # Global Tailwind styles
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── babel.config.js         # Babel configuration
└── package.json            # Project dependencies & scripts
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features (when applicable)
- Update documentation as needed

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing React Native framework
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS support
- [Zustand](https://zustand-demo.pmnd.rs/) for simple state management
- [Lucide Icons](https://lucide.dev/) for beautiful iconography

---

<div align="center">

**Built with ❤️ for the MLOps community**

[Report Bug](https://github.com/pavanvzm/failure-forensics-tool/issues) • [Request Feature](https://github.com/pavanvzm/failure-forensics-tool/issues)

</div>
