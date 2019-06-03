---
  title: "module"
  wordClasses:
    - "noun"
  tags:
    - "magento-software"
  synonyms: []
  relatedTerms:
    - "module-reference"
    - "magento-module"
    - "php"
    - "xml"
    - "block"
---
Code that changes or extends features provided by the Magento application. A module is contained in a directory structure that contains PHP and XML files (configuration, blocks, controllers, helpers, models, and so on) related to a specific functionality to deliver a distinct collection of product features.
The purpose of each module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not impact the functionality of other modules.

A module can also implement widgets, which are page elements that can be customized by business users in the Admin .

Modules can be disabled or removed without breaking the consistency of the Magento application. One exception: When the module depends on other modules, which requires disabling or removing the dependant modules.
