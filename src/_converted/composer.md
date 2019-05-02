---
  title: "Composer"
  wordClasses:
    - "noun"
  tags:
    - "programming"
  synonyms: []
  relatedTerms: []
---
The technology used to download items that works manages dependencies in PHP. This tool allows users to specify libraries to be used and it manages the installation and updates for the libraries.

A “package” is the composer’s smallest unit of delivery. Example: A .zip file containing a directory tree of files. Composer places each Magento component — module, theme or language pack — to be downloaded into a separate package, creating a 1:1 relationship between components and packages.

In Magento, we use Composer to package components and manage installations of Magento core, modules, extensions, etc. We recommend developers and merchants include composer.json in the component’s root directory even if they do not intend to distribute it to other merchants using Magento.

Learn more: [Composer](https://getcomposer.org/), [Magento Commerce composer](https://devdocs.magento.com/guides/v2.3/cloud/reference/cloud-composer.html), [The composer.json file](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/build/composer-integration.html)
