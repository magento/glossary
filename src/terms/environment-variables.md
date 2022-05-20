---
  title: "environment variables"
  wordClasses:
    - "noun"
  tags:
    - "magento"
  synonyms: []
  relatedTerms: []
---

Adobe Commerce on cloud infrastructure enables you to assign environment variables to override configuration options:

* **ADMIN-variables** override project ADMIN variables
* **Global—variables** affect each stage
* **Build—variables** control build actions
* **Cloud—variables** specific to Adobe Commerce on cloud infrastructure
* **Deploy—variables** control deploy action
* **Post-deploy—variables** control actions after deploy

Environment variables apply to a specific environment or branch. An environment 
inherits variable definitions from the parent environment. You can override an 
inherited value by defining the variable specifically for the environment. For example, to set variables for development, define the variable values 
in the **.magento.env.yaml** file in the Integration environment. All environments branching from the integration environment inherit those values.

Learn more: [Environment variables](https://devdocs.magento.com/cloud/env/variables-intro.html)
