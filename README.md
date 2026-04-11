# Coding Assignment 14: Portfolio Website

A portfolio website built with React and TypeScript, showcasing work and skills as a Full Stack Web Development student. The site integrates Storybook components from Assignment 12, and is containerized with Docker to run at `localhost:5575`.

---

## Environment

| Tool | Version |
| --- | --- |
| Node.js (local) | v20.19.6 |
| npm | v10.8.2 |
| Docker | v29.1.3 |
| Node.js (Docker) | v20 (alpine) |

---

## Project Structure

```
src/
  components/         # Reusable Storybook components from Assignment 12
    Button/           # Button component
    Card/             # Card component
    Label/            # Label component
    HeroImage/        # HeroImage component
    Text/             # Text component
  sections/           # Portfolio page sections
    Hero.tsx          # Basic information section
    Education.tsx     # Education background section
    Work.tsx          # Projects section
    Skills.tsx        # Skills section
    Resources.tsx     # Learning resources section
    DevSetup.tsx      # Developer setup section
```

---

## Portfolio Sections

### Basic Information
Displays name, role, bio, GitHub and LinkedIn links, and a contact button.

### Education
Academic background.

### Work
Projects completed throughout the program:
- InnovAsia — AI Tutorial (HTML, CSS, JavaScript)
- Manitoba Nature Archive (PHP, CSS, JavaScript, MySQL)
- Vintage Furniture E-Commerce (Ruby, HTML, CSS, JavaScript)

### Skills
Languages, frameworks, and tools including JavaScript, TypeScript, Python, PHP, Java, Ruby, React, Docker, and Git.

### Resources
Helpful learning resources including MDN Web Docs, React Documentation, Docker Documentation, and W3Schools.

### Developer Setup
VS Code setup, terminal configuration, and preferred editor font.

---

## Storybook Components Integration

The following components from Assignment 12 are integrated into the portfolio:

| Component | Usage in Portfolio |
| --- | --- |
| `Button` | "Get in touch" button in Hero, "View Project" button in Work |
| `Card` | Project cards in Work section |
| `Label` | Tech stack tags in Work section |
| `HeroImage` | Hero section image |
| `Text` | Description text in Skills section |

---

## Code Quality Setup

### Prettier

Prettier is used for consistent code formatting across all TypeScript and TSX files.

Install:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier --legacy-peer-deps
```

Configuration is defined in `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### ESLint

ESLint is configured in `.eslintrc.json` to extend `react-app` and integrate with Prettier so that formatting violations are reported as lint errors.

Install:

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --legacy-peer-deps
```

Configuration is defined in `.eslintrc.json`:

```json
{
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

Run lint:

```bash
npm run lint
```

### Husky

Husky runs pre-commit hooks automatically to enforce code quality before every commit.

Install:

```bash
npm install --save-dev husky --legacy-peer-deps
npx husky init
```

The `.husky/pre-commit` hook runs ESLint before every commit:

```bash
npm run lint
```

---

## CI/CD — GitHub Actions

A GitHub Actions workflow is defined in `.github/workflows/ci.yml`. It runs on every push and pull request to the `main` branch and performs the following steps:

1. Checkout the repository
2. Setup Node.js v20
3. Install dependencies
4. Run ESLint
5. Run production build

---

## Docker Setup

The application is containerized using Docker with a multi-stage build. The production build is served via Nginx on port `5575`.

### Prerequisites

- Docker installed on your machine

### Build and Run

**1. Clone the repository**

```bash
git clone https://github.com/jnllyng/portfolio.git
cd portfolio
```

**2. Build the Docker image**

```bash
docker build -t yang_jueun_coding_assignment14 .
```

**3. Run the container**

```bash
docker run -d -p 5575:5575 --name yang_jueun_coding_assignment14 yang_jueun_coding_assignment14
```

**4. Open in browser**

```
http://localhost:5575
```

### Stop and Remove the Container

```bash
docker stop yang_jueun_coding_assignment14
docker rm yang_jueun_coding_assignment14
```

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm start` | Runs the app in development mode at `localhost:3000` |
| `npm run build` | Builds the app for production |
| `npm run lint` | Runs ESLint on all TypeScript files |
| `npm run format` | Formats all files with Prettier |