#!/user/bin/python

import unittest

import os
import sys
sys.path.insert(0, os.path.abspath('..'))

from classes.XmlConverter import XmlConverter
from classes.Term import Term

class TestXmlConverter(unittest.TestCase):

    def test_toString(self):
        converter = XmlConverter("terms")

        expected = "<terms/>"

        self.assertEquals(expected,converter.toString(False)) 

    def test_getTextEntry(self):
        converter = XmlConverter("test")

        tag = "text"
        text = "this is the test text"

        entry = converter._getTextEntry(tag,text)

        self.assertIsNotNone(entry)

        self.assertEqual(tag,entry.tag)
        self.assertEqual(text,entry.text) 

    def test_getListEntry(self):
        converter = XmlConverter("test")

        tag = "list"
        entryTag = "entry"
        entries = ["item 1","item 2","item 3"]

        entry = converter._getListEntry(tag,entryTag,entries)

        self.assertIsNotNone(entry)

        self.assertEqual(tag,entry.tag)
        self.assertEqual(len(entries),len(entry))

        for i in range(0,len(entries)):
            self.assertEqual(entryTag,entry[i].tag)
            self.assertEqual(entries[i],entry[i].text)
    def test_getForms(self):
        term = Term(forms=[{'accomodate':['v']}])

        converter = XmlConverter("test")

        entry = converter._getForms(term)

        self.assertIsNotNone(entry)

if __name__ == '__main__':
        unittest.main() 
