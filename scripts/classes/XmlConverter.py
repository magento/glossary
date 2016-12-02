#!/usr/bin/python

from lxml import etree as et

from classes.Term import Term

class XmlConverter:

    def __init__(self,root="root"):
        self.root = et.Element(root)

    def addTerm(self,term):
        self.root.append(self._getTermEntry(term))

    def toString(self,pretty_print=True):
        return et.tostring(self.root,pretty_print=pretty_print)

    def _getTermEntry(self,term):
        termRoot = et.Element("term")

        termRoot.append(self._getUuid(term))
        termRoot.append(self._getTitle(term))
        termRoot.append(self._getTypes(term))
        termRoot.append(self._getForms(term))
        termRoot.append(self._getSynonyms(term))
        termRoot.append(self._getPrimarySource(term))
        termRoot.append(self._getContentTags(term))
        termRoot.append(self._getUserTags(term))
        termRoot.append(self._getShortDefinition(term))
        termRoot.append(self._getLongDefinition(term))
        termRoot.append(self._getUsage(term))
        termRoot.append(self._getReferenceLinks(term))

        return termRoot

    def _getTextEntry(self,tag,text):
        entry = et.Element(tag)
        entry.text = text
        return entry

    def _getListEntry(self,listTag,itemsTag,items):
        listRoot = et.Element(listTag)

        for item in items:
            listRoot.append(self._getTextEntry(itemsTag,item))

        return listRoot

    def _getUuid(self,term):
        return self._getTextEntry("uuid",term.uuid)

    def _getTitle(self,term):
        return self._getTextEntry("title",term.title)

    def _getTypes(self,term):
        return self._getListEntry("types","type",term.types)

    def _getForms(self,term):
        forms = et.Element("form-types")

        for formTypes in term.forms:
            for key,value in formTypes.items():
                form = self._getListEntry("form","form-type",value)
                form.set("text",key)
                forms.append(form)

        return forms

    def _getSynonyms(self,term):
        return self._getListEntry("synonyms","synonym",term.synonyms)

    def _getPrimarySource(self,term):
        return self._getTextEntry("primary-source",term.primarySource)

    def _getContentTags(self,term):
        return self._getListEntry("content-tags","content-tag",term.contentTags)

    def _getUserTags(self,term):
        return self._getListEntry("user-tags","user-tag",term.userTags)

    def _getShortDefinition(self,term):
        return self._getTextEntry("short-definition",term.shortDefinition)

    def _getLongDefinition(self,term):
        return self._getTextEntry("long-definition",term.longDefinition)

    def _getUsage(self,term):
        return self._getTextEntry("usage",term.usage)

    def _getReferenceLinks(self,term):
        links = et
        
    def _getUsage(self,term):
        return self._getTextEntry("usage",term.usage)
        
    def _getReferenceLinks(self,term):
        links = et.Element("reference-links")

        for linkEntry in term.referenceLinks:
            for text,location in linkEntry.items():
                link = et.Element("reference-link")

                textEntry = et.Element("text")
                textEntry.text = text

                locationEntry = et.Element("location")
                locationEntry.text = location

                link.append(textEntry)
                link.append(locationEntry)

                links.append(link)

        return links

