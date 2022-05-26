---
  title: "origin cloaking"
  wordClasses:
    - "noun"
  tags:
    - "security"
  synonyms: []
  relatedTerms:
    - "web application firewall"
---
Origin cloaking prevents traffic from bypassing the Fastly Web Application Firewall(WAF) and routing it through the strictly defined flow of Fastly > Load Balancer > Instances. With this implementation, all the traffic is guaranteed to go through the Fastly WAF as well as the internal WAF built into the load balancer.

Learn more: [Fastly origin cloaking](https://support.magento.com/hc/en-us/articles/360055181631-Fastly-origin-cloaking-enablement-FAQ)
