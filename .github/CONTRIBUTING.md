# Contributions

## Contribute to Magento Glossary

Share your knowledge with the community by contributing to Magento Glossary, part of Magento DevDocs!
You can contribute by creating an issue or pull request (PR) on our [Glossary](https://github.com/magento/glossary) GitHub repository.
We welcome all types of contributions; from minor typo fixes to new terms.

Magento's tech writer team and [Community Maintainers](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributors.html#/community-maintainers) review issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible.
Working through the backlog takes time, though, so we appreciate your patience.

## Contributor License Agreement

All third-party contributions to this project must be accompanied by a signed contributor
license agreement. This gives Adobe permission to redistribute your contributions
as part of the project. [Sign our CLA](https://opensource.adobe.com/cla.html). You
only need to submit an Adobe CLA one time, so if you have submitted one previously,
you are good to go!

## Contribution guidelines

Follow the general rules and instructions described in the [Magento DevDocs contribution guidelines][].

[Magento DevDocs contribution guidelines]: https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md

## Tips for writing content

Focus on the content with useful information, code samples, and important notes for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

Use the following guidelines to help you with the writing process:

- Define the term. What would be helpful for the community and developers?
- Consider acronyms and synonyms. These help locate and define terms.
- Keep your sentences concise.
- Batch several small changes into a single pull request (instead of separate ones) to ensure your contributions get approved and merged quickly. Have several typo fixes across several terms? Batch them into one PR.
- Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"The log captures commands, output..."_.
- Provide links to additional documentation and information if appropriate.
- Need help with format? See our [Glossary template](https://github.com/magento/glossary/wiki/Glossary-Template).

### Edit metadata

The Markdown (.md) file's metadata is a set of YAML key-value pairs. The metadata section is located at the top of each file and required to correctly label and add your term to the glossary. For more info, see the [Glossary template](https://github.com/magento/glossary/wiki/Glossary-Template).

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
| `tags` | Groups terms per tag, 1 required. See the [Tag Reference](https://github.com/magento/glossary/wiki/Glossary-Template#tag-reference).  | Yes |
| `synonyms`  |  List of synonyms (comma delimited) to aid with searches (Algolia). This does not display in the output. |  |
|  `relatedTerms`  |  The markdown file name for another term in this glossary. For example `magento-admin` adds a link to `magento-admin.md` to this term. A term .md file must be in the repo to link. |  |
| `readMore`  | Full URL links to matching Documentation, Wiki pages, Repos, etc.  |  |

## Report an issue

If you find a typo or errors in terms, you can either fix it with a pull request (as described above) or report it with an issue.
Enter as much information as you can: definition updates, link fixes, tags, etc.

**Note:** Check the [existing issues](https://github.com/magento/glossary/issues) on GitHub to see if someone has already reported the issue.

You have a couple of options to enter an issue:

- Have general feedback or a term to suggest? Create an issue on [GitHub Glossary](https://github.com/magento/devdocs/issues/new/choose).
- Have feedback on a specific term? Click the **Give us feedback** link at the top right of the page to report on the currently open topic.

     ![Report an issue](https://devdocs.magento.com/common/images/contribute-feedback-link.png)

## Contact DevDocs

Have a question? Need help? Magento DevDocs, Maintainers, and other Contributors are available through:

-  [Slack](https://magentocommeng.slack.com/archives/CAN932A3H) ([Join us](https://opensource.magento.com/slack))
-  [Twitter @AdobeCommrcDocs](https://twitter.com/AdobeCommrcDocs)

Thank you for contributing your brilliance to Magento DevDocs!!
