#!/user/bin/python

import unittest

import os
import sys
sys.path.insert(0, os.path.abspath('..'))

from classes.Term import Term

class TestTerm(unittest.TestCase):

    def test_constructor(self):
        uuid = "1"
        title = "title"
        types = ["glossary"]
        forms = {"n":["title"]}
        primarySource = "UX"
        contentTags = ["Product","Order"]
        userTags = ["Internal","Merchant"]
        shortDefinition = "Hello"
        longDefinition = "World"
        usage = "Usage"
        referenceLinks = [{"text":"text","location":"#location"}]

        term = Term(uuid=uuid, title=title,types=types,forms=forms,primarySource=primarySource,contentTags=contentTags,userTags=userTags,shortDefinition=shortDefinition,longDefinition=longDefinition,usage=usage,referenceLinks=referenceLinks)

        self.assertEquals(uuid,term.uuid)
        self.assertEquals(title,term.title)
        self.assertTrue(sorted(types)==sorted(term.types))
        self.assertEquals(forms,term.forms)
        self.assertEquals(primarySource,term.primarySource)
        self.assertEquals(contentTags,term.contentTags)
        self.assertEquals(userTags,term.userTags)
        self.assertEquals(shortDefinition,term.shortDefinition)
        self.assertEquals(longDefinition, term.longDefinition)
        self.assertEquals(usage, term.usage)
        self.assertEquals(referenceLinks, term.referenceLinks)

if __name__ == '__main__':
        unittest.main()

