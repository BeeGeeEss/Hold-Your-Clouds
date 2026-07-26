# Creating a User-Friendly Blog

![Giscus Comments](/comments-with-giscus.png)

> The 'Hold Your Clouds' website is a client-side React application using decoupled, API-driven architecture and third-party services for specialised functionality.
> The website features a Blog and it was important to the author to enable users to leave comments and reactions to blogposts. However, the author didn't have any need for a backend application.
> The following blogpost details the decision-making behind integrating a light-weight Giscus comment section to blogposts, rather than building in traditional database.

## 1. What's the problem?

## 2. Could it be done?

## 3. Weighing up options...

### Emerging Technology

### Industry Trends

### Solution

## 4. What is Giscus?

Giscus is a commenting system that uses GitHub Discussions to provide comments on a website.

Instead of building and maintaining a custom comments database and authentication system, Giscus allows visitors to interact with blog posts using GitHub-based discussions.

This is particularly useful for a personal blog because:

- No custom comment database is required
- No separate user authentication system needs to be built
- Comments are stored through GitHub Discussions
- GitHub users can participate in conversations
- The commenting system can be embedded directly into blog posts
- It fits well with a front-end-focused architecture

See [Giscuss Docs Here!](https://giscus.app/)

## 5. How Giscus Works

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
/blog/giscus-comments
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

### Technology, skill, knowledge

## 6. Environment Configuration

## 7. Ethical Considerations

## 8. Troubleshooting

## 9. See it in ACTION
