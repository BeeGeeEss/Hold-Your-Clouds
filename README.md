# ☁ Hold Your Clouds ☁

> Personal Website + Blog

---

Navigation:

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Blog](#blog)
- [Giscus Comments](#giscus-comments)
- [Brevo Newsletter Subscription](#brevo-newsletter-subscription)
- [Environment Configuration](#environment-configuration)
- [Deployment](#deployment)
- [Local Development](#local-development)
- [Architecture](#architecture)
- [Security Considerations](#security-considerations)
- [Future Improvements](#future-improvements)
- [Author](#author)

A personal website and blog built as a modern front-end React application. The site showcases my development journey, blog articles, projects, and interests as a full-stack web development student and aspiring web developer.

The application is built with React and Vite, styled with Material UI, and deployed through Netlify.

---

## Features

- Responsive React front-end
- Light and dark theme support
- Responsive navigation menu
- Blog listing and individual blog post pages
- Markdown-based blog content
- Featured blog posts
- Giscus-powered comments
- Email newsletter subscription
- Brevo integration for subscriber management
- Responsive layout with reusable components
- Netlify deployment
- Serverless Netlify Functions for backend functionality

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Material UI
- Emotion
- Markdown

### Backend / Services

- Netlify Functions
- Giscus
- Brevo
- GitHub

### Deployment Services

- Netlify

---

## Installation

To download and run this project locally, clone the repository from GitHub.

### Clone the repository

Open a terminal and run:

````bash
git clone https://github.com/beegeeess/hold-your-clouds.git
cd hold-your-clouds
npm install
npm run dev


## Project Structure

```js

📁 Hold-Your-Clouds
    📁 netlify
        📁 functions
            ─ subscribe.js
    📁 public
        ─ favicon.svg
        ─ react-logo.svg
    📁 src
        📁 assets
            ─ profile.jpg
            ─ under-construction.svg
        📁 components
            📁 blog
                ─ BlogCard.jsx
                ─ BlogList.jsx
                ─ BlogPost.jsx
                ─ PostActions.jsx
            📁 layout
                ─ Footer.jsx
                ─ Header.jsx
                ─ MainLayout.jsx
                ─ NavBar.jsx
            📁 shared
                ─ GiscusComments.jsx
                ─ SubscribeForm.jsx
        📁 data
            ─ posts.jsx
        📁 pages
            ─ About.jsx
            ─ Blog.jsx
            ─ BlogPostPage.jsx
            ─ Contact.jsx
            ─ Home.jsx
            ─ NotFound.jsx
        📁 posts
            ─ becoming-a-web-developer.md
            ─ giscus-comments.md
            ─ learning-react.md
        📁 styles
            ─ markdown.css
        ─ App.css
        ─ App.jsx
        ─ index.css
        ─ main.jsx
        ─ theme.js
    ─ .env
    ─ .env.example
    ─ eslint.config.js
    ─ index.html
    ─ netlify.toml
    ─ package-lock.json
    ─ package.json
    ─ README.md
    ─ vite.config.js

````

## Blog

The blog uses a data-driven approach where each post is stored as an object in the `src/data/posts.js` file.

A post can contain information such as:

```javascript
{
  slug: "example-blog-post",
  title: "Example Blog Post",
  excerpt: "A short description of the blog post.",
  category: "Web Development",
  date: "2026-07-01",
  featured: true,
  readTime: "4 min read",
  image: "example-link",
  content: `
# Example Blog Post

Blog content goes here.
`
}
```

The `slug` is used by React Router to create the individual blog post URL:

```text
/blog/example-blog-post
```

This allows blog posts to be accessed dynamically using:

```javascript
const { slug } = useParams();
```

The application then searches the posts data for the matching slug.

---

## Giscus Comments

### What is Giscus?

Giscus is a commenting system that uses GitHub Discussions to provide comments on a website.

Instead of building and maintaining a custom comments database and authentication system, Giscus allows visitors to interact with blog posts using GitHub-based discussions.

[Read More Here!](https://hold-your-clouds.netlify.app/blog/giscus-comments)

This is particularly useful for a personal blog because:

- No custom comment database is required
- No separate user authentication system needs to be built
- Comments are stored through GitHub Discussions
- GitHub users can participate in conversations
- The commenting system can be embedded directly into blog posts
- It fits well with a front-end-focused architecture

See [Giscuss Docs Here!](https://giscus.app/)

---

### How Giscus Works

The general flow is:

```text
Visitor
   │
   ▼
Blog Post
   │
   ▼
Giscus Component
   │
   ▼
GitHub Discussions
   │
   ▼
Comments displayed on the website
```

The website embeds Giscus through the `GiscusComments` React component.

For example:

```jsx
import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      repo="USERNAME/REPOSITORY"
      repoId="REPOSITORY_ID"
      category="Announcements"
      categoryId="CATEGORY_ID"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
    />
  );
}
```

---

### Giscus Configuration

Giscus requires several values from the GitHub repository:

#### Repository

The GitHub repository where discussions are enabled.

```text
USERNAME/REPOSITORY
```

For example:

```text
example-user/my-blog
```

#### Repository ID

A unique identifier for the GitHub repository.

#### Category

The GitHub Discussions category used by Giscus.

#### Category ID

A unique identifier for that discussion category.

These values are generated when configuring Giscus for a GitHub repository.

---

### Comment Mapping

The website uses the blog post pathname to identify comments:

```javascript
mapping = "pathname";
```

This means a blog post such as:

```text
/blog/learning-react
```

is associated with the comments for that specific URL.

This is important because each blog post needs its own separate discussion thread.

---

### Giscus and the Website Theme

The Giscus theme can be configured to respond to the user's system colour scheme:

```javascript
theme = "preferred_color_scheme";
```

This allows the comments section to adapt between light and dark mode.

---

## Brevo Newsletter Subscription

### What is Brevo?

Brevo is used to manage email newsletter subscribers.

The website contains a subscription form that allows visitors to enter their email address. The front end sends the email address to a Netlify Function, which then communicates securely with the Brevo API.

The API key is not exposed to the browser.

See [Brevo Docs Here!](https://developers.brevo.com/docs/getting-started)

---

## Subscription Flow

The subscription process works as follows:

```text
Visitor
   │
   ▼
Subscribe Form
   │
   ▼
React fetch request
   │
   ▼
Netlify Function
   │
   ▼
Brevo API
   │
   ▼
Subscriber added to Brevo list
```

The front end does not directly communicate with Brevo using the API key.

Instead, the request is sent to a serverless function:

```text
POST /.netlify/functions/subscribe
```

---

## Why Use a Netlify Function?

The Brevo API key is a private credential.

It should never be placed directly inside front-end React code:

```javascript
// Do not do this
const apiKey = "YOUR_BREVO_API_KEY";
```

Anything included in a React/Vite application can potentially be exposed to users through the browser.

Instead, the front end sends the email address to the Netlify Function:

```javascript
const response = await fetch("/.netlify/functions/subscribe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});
```

The Netlify Function then accesses the private environment variables and communicates with Brevo.

---

### Netlify Function

The subscription function is located at:

```text
netlify/functions/subscribe.js
```

The function:

1. Receives the request from the React front end
2. Checks that the request is a `POST` request
3. Reads the submitted email address
4. Validates the email
5. Sends the request to the Brevo API
6. Adds the contact to the configured Brevo list
7. Returns a response to the front end

The general structure is:

```javascript
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "Method Not Allowed",
      }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || "{}");

    const cleanEmail = email?.trim();

    if (!cleanEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Email is required",
        }),
      };
    }

    // Brevo API request

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully subscribed",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong",
      }),
    };
  }
}
```

---

### Environment Variables

The Brevo credentials are stored as environment variables in Netlify.

Example:

```text
BREVO_API_KEY=your_api_key
BREVO_LIST_ID=your_list_id
```

These values should not be committed to GitHub.

The `.env` file should be excluded from version control:

```text
.env
.env.local
```

The API key is accessed inside the Netlify Function:

```javascript
const apiKey = process.env.BREVO_API_KEY;
const listId = process.env.BREVO_LIST_ID;
```

This keeps sensitive credentials on the server side rather than exposing them in the React application.

---

### Front-End Subscription Form

The subscription form collects the visitor's email address and sends it to the Netlify Function.

Example request:

```javascript
const response = await fetch("/.netlify/functions/subscribe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
  }),
});
```

The front end then checks the response:

```javascript
if (!response.ok) {
  throw new Error("Subscription failed");
}
```

The user can then be shown a success or error message depending on the result.

---

## Environment Configuration

The application uses environment variables for sensitive configuration.

Example:

```text
VITE_GISCUS_REPO
VITE_GISCUS_REPO_ID
VITE_GISCUS_CATEGORY
VITE_GISCUS_CATEGORY_ID
```

Server-side environment variables are used for Brevo:

```text
BREVO_API_KEY
BREVO_LIST_ID
```

A key distinction is that variables prefixed with `VITE_` are intended for use in the front-end application and may be exposed in the browser.

Private credentials such as the Brevo API key should not use `VITE_`.

---

## Deployment

The application is deployed through Netlify.

The build configuration is:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[functions]
  directory = "netlify/functions"
```

The build process:

1. Installs the project dependencies
2. Runs the Vite production build
3. Creates the `dist` directory
4. Deploys the front-end application
5. Deploys the Netlify Functions

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

---

## Architecture

The website follows a primarily front-end architecture.

```text
React Application
        │
        ├── Blog Content
        │
        ├── Giscus
        │       │
        │       └── GitHub Discussions
        │
        └── Subscribe Form
                │
                ▼
        Netlify Function
                │
                ▼
            Brevo API
```

This architecture allows the website to remain relatively simple while still providing functionality that would traditionally require a custom backend.

Giscus handles comments and GitHub-based discussion functionality, while Brevo manages newsletter subscribers.

The Netlify Function acts as a secure intermediary between the public front end and the Brevo API.

---

## Security Considerations

The application does not expose the Brevo API key to the browser.

Sensitive credentials are stored in Netlify environment variables and accessed only by the serverless function.

The front end only communicates with the public subscription endpoint:

```text
/.netlify/functions/subscribe
```

The Brevo API key remains on the server side.

---

## Future Improvements

Potential future improvements include:

- Additional blog posts
- Improved form validation
- Email confirmation workflows
- Newsletter welcome emails
- Blog post categories and filtering
- About page

---

## Author

[✨BeeGeeEss✨](https://github.com/BeeGeeEss)
