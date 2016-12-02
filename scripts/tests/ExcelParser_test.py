#!/usr/bin/python
import unittest

import os
import sys
sys.path.insert(0, os.path.abspath('..'))

from classes.ExcelParser import ExcelParser

class TestExcelParser(unittest.TestCase):

    def test_getFileData(self):
        parser = ExcelParser(base_dir=os.path.abspath('.'),inputfile="data/test-data.xlsx")

        self.assertIsNotNone(parser.entries)

    def test_getInvalidInputFile(self):

        exceptionRaised = False

        try:
            parser = ExcelParser(base_dir=os.path.abspath('.'),inputfile="data/invalid-data.xlsx")
        except IOError:
            exceptionRaised = True

        self.assertTrue(exceptionRaised)

    def test_getTerms(self):
        parser = ExcelParser(base_dir=os.path.abspath('.'),inputfile="data/test-data.xlsx")

        terms = parser.getTerms()

        self.assertIsNotNone(terms)
        self.assertTrue(len(terms)>0)


if __name__ == '__main__':
        unittest.main() 
