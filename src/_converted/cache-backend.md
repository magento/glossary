---
  title: "cache backend"
  wordClasses:
    - "noun"
  tags:
    - "programming"
  synonyms: []
  relatedTerms:
    - "backend"
---
Stores cache records into a two-level backend system within Zend’s default framework. A first-level cache is fast — for example, an APC or Memcached backend — but it’s limited and doesn’t support tagging and grouping of cache entries. A second-level cache — for example, a file system or a Redis backend — is slower but supports tagging and grouping.
