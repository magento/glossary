---
  title: "interception"
  wordClasses:
    - "noun"
  tags:
    - "programming"
  synonyms: []
  relatedTerms:
    - "plug-in"
---
The process of injecting new code before, after, or around an existing public function of a PHP class.

To intercept a function, a plug-in implements the additional code to be invoked. Plug-ins are associated with interception points by the dependency injection configuration file (di.xml). If multiple plug-ins are defined on the same function, the dependency injection configuration defines the order in which the plug-ins are invoked, allowing multiple plug-ins to be used without conflict.
