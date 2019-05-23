---
  title: "virtual type"
  wordClasses:
    - "noun"
  tags:
    - "programming"
  synonyms: []
  relatedTerms:
    - "php"
---
Virtual types are a way to inject different dependencies into existing PHP classes without affecting other classes and without having to create a new class file. Virtual types can only be referenced in by argument overrides in a <type> element within di.xml files, never in source code. They can't be extended and they can't be references as dependencies in a classes constructor.
