#!/usr/bin/python

class Term:
    def __init__(self, uuid="", title="", types=[], forms={}, synonyms=[],primarySource="",contentTags=[],userTags=[],shortDefinition="",longDefinition="",usage="",referenceLinks=[]):
        self.uuid = uuid
        self.title = title
        self.types = types
        self.forms = forms
        self.synonyms = synonyms
        self.primarySource = primarySource
        self.contentTags = contentTags
        self.userTags = userTags
        self.shortDefinition = shortDefinition
        self.longDefinition = longDefinition
        self.usage = usage
        self.referenceLinks = referenceLinks
