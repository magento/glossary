#!/usr/bin/python

import sys,os,getopt
import pyexcel as pe

from classes.Term import Term
from classes.Serializer import Serializer

class ExcelParser:
    
    UUID = 'UUID / Anchor Tag'
    TERM_TYPE = 'Term Type'
    TITLE = 'Title'
    FORMS = 'Forms'
    SYNONYMS = 'Synonyms'
    PRIMARY_SOURCE = 'Primary Src'
    CONTENT_TAGS = 'Content Tags'
    USER_TAGS = 'User Tags'
    SHORT_DEFINITION = 'Short Definition'
    LONG_DEFINITION = 'Long Definition'
    USAGE = 'Usage'
    REFERENCE_LINKS = 'Reference Links'

    SHEET_NAME = 'Glossary'

    def __init__(self, base_dir=os.path.abspath('.'),inputfile=''):
        self.base_dir = base_dir
        self.inputfile = inputfile

        sheet = pe.get_sheet(file_name=os.path.join(self.base_dir,self.inputfile),sheet_name=self.SHEET_NAME, name_columns_by_row=0)
        self.entries = sheet.to_records()

    def _getUuid(self,entry):
        return entry[self.UUID]

    def _getTermTypes(self,entry):
        return Serializer.unserializeList(entry[self.TERM_TYPE])

    def _getTitle(self,entry):
        return entry[self.TITLE]

    def _getForms(self,entry):
        return Serializer.unserializeForms(entry[self.FORMS])
    
    def _getSynonyms(self,entry):
        return Serializer.unserializeList(entry[self.SYNONYMS])

    def _getPrimarySource(self,entry):
        return entry[self.PRIMARY_SOURCE]

    def _getContentTags(self,entry):
        return Serializer.unserializeList(entry[self.CONTENT_TAGS])

    def _getUserTags(self,entry):
        return Serializer.unserializeList(entry[self.USER_TAGS])

    def _getShortDefinition(self,entry):
        return entry[self.SHORT_DEFINITION]

    def _getLongDefinition(self,entry):
        return entry[self.LONG_DEFINITION]

    def _getUsage(self,entry):
        return entry[self.USAGE]

    def _getReferenceLinks(self,entry):
        return Serializer.unserializeReferenceLinks(entry[self.REFERENCE_LINKS])

    ## 
    # Parses the excel file into a list of terms
    ##
    def getTerms(self):
        terms = []
        for entry in self.entries:
            term = Term(uuid=self._getUuid(entry),title=self._getTitle(entry),types=self._getTermTypes(entry),forms=self._getForms(entry),synonyms=self._getSynonyms(entry),primarySource=self._getPrimarySource(entry),contentTags=self._getContentTags(entry),userTags=self._getUserTags(entry),shortDefinition=self._getShortDefinition(entry),longDefinition=self._getLongDefinition(entry),usage=self._getUsage(entry),referenceLinks=self._getReferenceLinks(entry))
            terms.append(term)

        return terms

