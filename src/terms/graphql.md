---
  title: "GraphQL"
  wordClasses:
    - "noun"
  tags:
    - "design"
    - "magento-software"
    - "programming"
  synonyms:
    - "PWA Studio"
    - "Community Engineering"
  relatedTerms:
    - "pwa"
    - "react"
---
[GraphQL](https://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

[PWA Studio](https://magento-research.github.io/pwa-studio/) uses GraphQL for development. GraphQL is a specification for a data query language on the client side and a service layer on the server side. It is often seen as an alternative to using REST endpoints.

One of the main advantages GraphQL has over REST is that a single GraphQL endpoint can accommodate requests for any combination of X, Y, and Z pieces of data, whereas REST requires specialized endpoints for different data request combinations. Unlike REST, which can require multiple server requests to aggregate data, a single GraphQL request returns only the data needed and nothing more.

Performance is an important metric for PWAs. Using GraphQL improves this by reducing the number of server calls and the amount of data returned.

GraphQL is also a Magento Community Engineering project, open to contributions:

* [GitHub Repository](https://github.com/magento/graphql-ce)
* [ZenHub](https://app.zenhub.com/workspaces/graphql-ce-5ac50492bdeaaf56b9c80e00/boards?milestones=Release%3A%202.3.1%232019-02-01&epics:settings=noEpics&repos=128075669)
* [#graphql Slack Channel](https://magentocommeng.slack.com/messages/C8076E0KS)
* [DevDocs](https://devdocs.magento.com/guides/v2.3/graphql/index.html)
