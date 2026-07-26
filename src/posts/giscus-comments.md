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

![Comment from Stack Overflow](/public/stack-overflow.png) [(Krall, 2015)](#references)

Turns out, there are plenty of options for light-weight comment section integrations - it's just about finding the right fit.

## 3. Weighing up options

### Industry Trends

Disqus has been the most widely used comment section integration for some time, given its rich features and functionality [(Nice, 2018)](#references), however, the introduction of paid plans, and revenue raising advertisments in the comment section has led a lot of developers to move onto newer options such as GitHub integrations [(Lock, 2022; Rascia, 2019)](#references).

### Emerging Technology

Giscus and Utterances are two comment section options which utilise the GitHub API [(Giscus, n.d.; Utterances, n.d.)](#references). When directly compared, Giscus gives users the ability to 'react' to posts, it stacks comments in a conversation style, allows theming, and it keeps comments contained in the discussions tab on GitHub. Utterances instead combines comments with development issues, and stacks comments in order of submission. Many developers who previousy used Disqus/Utterances have migrated to Giscus for more user-friendly functionality [(Brenner, 2021; Kim, 2023)](#references).

| Feature                      | Giscus                                                                                  | Utterances                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Underlying platform**      | GitHub Discussions                                                                      | GitHub Issues                                                                       |
| **Authentication**           | GitHub account required                                                                 | GitHub account required                                                             |
| **Frontend integration**     | JavaScript widget/component                                                             | JavaScript widget                                                                   |
| **Database required**        | No separate database required                                                           | No separate database required                                                       |
| **Backend required**         | No traditional backend required                                                         | No traditional backend required                                                     |
| **Organisation of comments** | Designed specifically for discussions and conversations                                 | Comments are represented as issues and replies                                      |
| **Best suited for**          | Blogs and websites requiring a dedicated discussion/comment system                      | Lightweight comment systems for static websites                                     |
| **Advantages**               | More purpose-built for discussions; supports GitHub Discussion categories and reactions | Simple, lightweight, and well established                                           |
| **Potential limitation**     | Requires GitHub Discussions to be enabled and configured                                | Uses GitHub Issues, which may mix website comments with software development issues |

### Solution

The author was looking for a comment section that is free, easy to use, minimalist, and fosters a sense of community. As such, Giscus was deemed to be the most suitable and user-friendly option for the website's blog moving forward.

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

A unique identifier for the GitHub repository. Which can be generated once you complete configuration at [Giscus App](https://giscus.app/).

#### Category

The GitHub Discussions category used by Giscus. Which can be generated once you complete configuration at [Giscus App](https://giscus.app/).

#### Category ID

A unique identifier for that discussion category. Which can be generated once you complete configuration at [Giscus App](https://giscus.app/).

These values are generated when configuring Giscus for a GitHub repository.

---

### Comment Mapping

The website uses the blog post pathname to identify comments:

![Configuration of Pathname](/public/configuration.png)

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

The technology required to implement a Giscus comment section is GitHub, your code-editor of choice (VSCode), and the service that you're using to deploy your site (Netlify).

You require knowledge on how to setup an .env file, a .gitignore file and a static webpage. In this case React was used to create a GiscusComments component on a blog webpage, the GiscusComments component used the environment variables from the .env file - and once deployed to Netlify was active for use.

The skill level for this 3rd party integration is beginner level. The most complicated part is adjusting GitHub preferences, and setting up the environment variables in the Giscus configuration.

---

## 6. Environment Configuration

The application uses environment variables for sensitive configuration.

Example:

```js
repo = "USERNAME/REPOSITORY";
repoId = "REPOSITORY_ID";
category = "Announcements";
categoryId = "CATEGORY_ID";
mapping = "pathname";
theme = "preferred_color_scheme";
```

These values should not be committed to GitHub.

The `.env` file should be excluded from version control:

```text
.env
.env.local
```

## 7. Ethical Considerations

### Revenue

Giscus is a free open-source integration that does not rely on paid plans or advertising. Thankfully, because it utilizes GitHub's API - it's likely to remain free and open source.

### Sensitive Information

Sensitive information used to configure Giscus is stored in your .env file, .env is included in your .gitignore file and your sensitive data is not exposed when you commit to GitHub.

### Accessibility

Unfortunately, Giscus can only be used by registered GitHub users, as you need to authenticate your profile to be able to access the comment section. This decreases the number of users who are able to interact with your site.

### Data Storage

Users data is stored on GitHub, which is likely more secure than if the author had built a database themselves, however each user should read how GitHub store data from discussions before using this integration [(yier03, 2011)](#references).

### Privacy

Because Giscus requires you to sign into GitHub to leave a comment, the comment is tied to the users' public profile, and the user is not able to remain anonymous, or easily remove a comment.

### Transportability

You can't migrate comment histories to Giscus and you can't migrate comment history from Giscus, it remains tied to GitHub discussions.

## 9. SEE IT IN ACTION!

Scroll to the bottom of this blogpost to see Giscus Comments live - don't forget to subscribe to future blogposts on the way.

## References

Brenner, M. (2021, December 27). _Moving from utterances to giscus_. Ship It. [https://shipit.dev/posts/from-utterances-to-giscus.html](https://shipit.dev/posts/from-utterances-to-giscus.html)

Giscus. (n.d.). _Giscus_. Retrieved July 26, 2026, from [https://giscus.app/](https://giscus.app/)

Jamstack. (n.d.). _Jamstack_. Retrieved July 26, 2026, from [https://jamstack.org/glossary/jamstack/](https://jamstack.org/glossary/jamstack/)

Kim, J. H. (2023, November 3). _Utterances VS Giscus_. Jung's Blog. [https://wjdgml3092.github.io/Blog/GatsbyComment/](https://wjdgml3092.github.io/Blog/GatsbyComment/)

Krall, C. (2015, August 19). _How to create HTML comment box without database_ [Online forum post]. Stack Overflow. [https://stackoverflow.com/questions/32102131/how-to-create-html-comment-box-without-database](https://stackoverflow.com/questions/32102131/how-to-create-html-comment-box-without-database)

Lock, A. (2022, July 26). _Considering replacing Disqus with Giscus_. .NET Escapades. [https://andrewlock.net/considering-replacing-disqus-with-giscus/](https://andrewlock.net/considering-replacing-disqus-with-giscus/)

Nice, B. (2018, November 16). _Most popular 3rd party comment systems for your website_. Medium. [https://medium.com/level-up-web/most-popular-3rd-party-comment-systems-for-your-website-9f4329a4c6bf](https://medium.com/level-up-web/most-popular-3rd-party-comment-systems-for-your-website-9f4329a4c6bf)

Rascia, T. (2019, August 16). _Roll your own comment system for a static site_. Tania Rascia's Website. [https://www.taniarascia.com/add-comments-to-static-site/](https://www.taniarascia.com/add-comments-to-static-site/)

Utterances. (n.d.). _Utterances_. Retrieved July 26, 2026, from [https://utteranc.es/](https://utteranc.es/)

yier03. (2025, September 11). _How does GitHub handle data privacy, and what steps can users take to protect their personal information?_ [Online forum post]. GitHub Community. [https://github.com/orgs/community/discussions/173204](https://github.com/orgs/community/discussions/173204)

## Author

[✨BeeGeeEss✨ | 26 July, 2026](https://github.com/BeeGeeEss)
