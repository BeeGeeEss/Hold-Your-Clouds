# Creating a User-Friendly Blog Experience

![Giscus Comments](/comments-with-giscus.png)

> The 'Hold Your Clouds' website is a client-side React application using decoupled, API-driven architecture and third-party services for specialised functionality.
> The website features a Blog for sharing thoughts and learnings about web development - it was important to the author to enable users to leave comments and reactions to blogposts, without needing to rely on a backend app.
> The following blogpost details the decision-making behind integrating a light-weight Giscus comment section to blogposts, rather than building in a traditional database.

## 1. What's the problem?

Though this React app is not a pure “Jamstack” application, the underlying concept was to build a decoupled frontend that could remain largely static while integrating APIs and third-party services for functionality [(Jamstack, n.d.)](#references). This approach reduces the need to build and maintain a traditional backend, while also minimising the amount of custom authentication, authorisation, and security infrastructure required within the application itself.

However, a website and blog without any interactive features would be quite a dull user experience. The author wanted users to be able to leave comments and provide different perspectives so that users as a community could build on these experiences.

The author set out to find a way to do this through 3rd party integrations, without needing to rely on a database or author-developed backend features for this project.

## 2. Can it be done?

Computer says no... well... this one user on Stack Overflow said no.

But they're dead wrong!

![Comment from Stack Overflow](/public/stack-overflow.png)

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

## References

Jamstack. (n.d.). Jamstack. Retrieved July 26, 2026, from [https://jamstack.org/glossary/jamstack/](https://jamstack.org/glossary/jamstack/)

## Author
