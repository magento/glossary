## Contribute to Magento Glossary

Share your knowledge with the community by contributing to Magento Glossary, part of Magento DevDocs!
You can contribute by creating an issue or pull request (PR) on our [Glossary](https://github.com/jcalcaben/gatsby-glossary-app) GitHub repository.
We welcome all types of contributions; from minor typo fixes to new terms.

Magento's tech writer team and [Community Maintainers](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributors.html#/community-maintainers) review issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible.
Working through the backlog takes time, though, so we appreciate your patience.

## Rewards for contributions

DevDocs works with Magento Community Engineering teams and projects.
As you contribute PRs, you gain [Contribution Points](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#points). We track [Contributors](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributors.html#/individual-contributors) and [Maintainers](https://devdocs.magento.com/guides/v2.3/contributor-guide/maintainers.html) with Community Engineering.

## Get started

![Get started workflow](https://devdocs.magento.com/common/images/contribute-prerequisites.png)

1. Make sure you have a [GitHub account](https://github.com/signup/free) with [Two-Factor Authentication](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#two-factor)(2FA) to your account. Partners are required to add 2FA protection when contributing to Magento repositories.
1. Sign the [Magento Contributor Agreement](https://magento.com/content/magento-contributor-agreement).
1. [Fork](https://help.github.com/articles/fork-a-repo/) the [Glossary repository](https://github.com/jcalcaben/gatsby-glossary-app). Remember to [sync your fork](https://help.github.com/articles/syncing-a-fork/) and update branches as needed.
1. Review the [Glossary guidelines](#contribution-guidelines).

## Contribute terms

![Contributing workflow](https://devdocs.magento.com/common/images/contribute-write-submit-pr.png)

1. Create a new branch on your fork. Use a name that best describes the work, or references a GitHub issue number.
1. Edit or create markdown (`.md`) files in your branch.
1. When ready, push your branch to your fork.

### Create a pull request

Create a PR to the [Glossary repository](https://github.com/jcalcaben/gatsby-glossary-app). Fill out as much information as possible and link any GitHub issues.

Choose a contribution type:

- New Topic: Adds terms
- Major Update: Add significant definition and content to the terms
- Technical: Changes to technical content/code/processes/naming conventions (any change to technical content)
- Editorial: Typos, grammatical inconsistencies, or minor rewrites

If you are updating an example from source code, include a link to the file in the repository.

The DevDocs team and Maintainers will review the PR and help with formatting and navigation.

**Note:** If you have not signed the [Magento Contributor Agreement](https://magento.com/content/magento-contributor-agreement), the PR provides a link. We require a signed form and agreement to the terms for contribution.

## Contribution guidelines

Write content using [kramdown](https://kramdown.gettalong.org/), which is a simple markup language. We use kramdown, Liquid, and [Jekyll](https://jekyllrb.com/) to generate a static site. Check [Glossary Template](https://github.com/jcalcaben/gatsby-glossary-app/wiki/Glossary-Template) for a term template and options.

You can update existing or add new terms in the terms directory.

The following guidelines may answer most of your questions and help you get started:

1. Check [existing pull requests](https://github.com/magento/devdocs/pulls) and make sure you are not duplicating work!
1. For large contributions or changes that include multiple files, [open an issue](#report-an-issue) and discuss it with us first. This may further prevent duplicate or unnecessary effort.
1. [Chunk many small/medium changes](#tips-for-writing-content) into one or two PRs. This helps us to efficiently and effectively facilitate your contribution.
1. Familiarize yourself with existing [DevDocs](https://devdocs.magento.com) and [User Guide](https://magento.com/technical-resources) documentation. Look through and search the guides for potential terms and additional information to provide.

## Tips for writing content

Focus on the content with useful information, code samples, and important notes for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

Use the following guidelines to help you with the writing process:

- Define the term. What would be helpful for the community and developers?
- Consider acronyms and synonyms. These help locate and define terms.
- Keep your sentences concise.
- Batch several small changes into a single pull request (instead of separate ones) to ensure your contributions get approved and merged quickly. Have several typo fixes across several terms? Batch them into one PR.
- Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"The log captures commands, output..."_.
- Provide links to additional documentation and information if appropriate.
- Need help with format? See our [Glossary template](https://github.com/jcalcaben/gatsby-glossary-app/wiki/Glossary-Template).

### Edit metadata

The Markdown (.md) file's metadata is a set of YAML key-value pairs. The metadata section is located at the top of each file and required to correctly label and add your term to the glossary. For more info, see the [Glossary template](https://github.com/jcalcaben/gatsby-glossary-app/wiki/Glossary-Template).

Template without content. :exclamation: All Metadata must be in every term file.

```yaml
---
  title: "Term"
  wordClasses:
    - "noun"
  tags:
    - "magento-software"
  synonyms: []
  relatedTerms: []
---
Definition.
```

Example term:

```yaml
---
  title: "Magento Admin"
  wordClasses:
    - "noun"
  tags:
    - "magento-software"
  synonyms:
    - "Admin"
    - "Admin Panel"
    - "backend"
    - "Administration Interface"
    - "Admin UI"
  relatedTerms:
    - "admin"
---
```

> Key-value pair reference:

| Property  | Description | Required? |
| ------------- | ---------- | ---------- |
| `title`       | The term you are defining. Spaces allowed. | Yes |
| `wordClasses` | Type for the term: adjective, noun, verb. One or more.  | Yes |
| `tags` | Groups terms per tag, 1 required. See the [Tag Reference](https://github.com/jcalcaben/gatsby-glossary-app/wiki/Glossary-Template#tag-reference).  | Yes |
| `synonyms`  |  List of synonyms (comma delimited) to aid with searches (Algolia). This does not display in the output. |  |
|  `relatedTerms`  |  The markdown file name for another term in this glossary. For example 'magento-admin` adds a link to `magento-admin.md` to this term. A term .md file must be in the repo to link. |  |
| `readMore`  | Full URL links to matching Documentation, Wiki pages, Repos, etc.  |  |

## Report an issue

If you find a typo or errors in terms, you can either fix it with a pull request (as described above) or report it with an issue.
Enter as much information as you can: definition updates, link fixes, tags, etc.

**Note:** Check the [existing issues](https://github.com/jcalcaben/gatsby-glossary-app/issues) on GitHub to see if someone has already reported the issue.

You have a couple of options to enter an issue:

- Have general feedback or a term to suggest? Create an issue on [GitHub Glossary](https://github.com/magento/devdocs/issues/new/choose).
- Have feedback on a specific term? Click the **Give us feedback** link at the top right of the page to report on the currently open topic.

     ![Report an issue](https://devdocs.magento.com/common/images/contribute-feedback-link.png)

## Contact DevDocs

Have a question? Need help? Magento DevDocs, Maintainers, and other Contributors are available through:

- [Slack](https://magentocommeng.slack.com/messages/CAN932A3H) ([Join us](http://tinyurl.com/engcom-slack))
- [Twitter @MagentoDevDocs](https://twitter.com/MagentoDevDocs)
- [E-mail](mailto:DL-Magento-Doc-Feedback@magento.com)

Thank you for contributing your brilliance to Magento DevDocs!!
