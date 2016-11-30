#!/usr/bin/python

import sys,os,getopt
import pyexcel as pe
from classes.term import Term

from lxml import etree as et

# Main Function
def main(base_dir, inputfile, outputfile):

    if(inputfile is not None):
        terms = pe.get_records(file_name=os.path.join(base_dir,inputfile))
        glossaryRoot = et.Element("glossary")
        for term in terms:
            glossaryRoot.append(entryToXml(term))

        if(outputfile is None):
            print(et.tostring(glossaryRoot,pretty_print=True))
        else:
            f = open(outputfile,'w')
            f.write(et.tostring(glossaryRoot,pretty_print=True))
            f.close()

    else:
        print "Please specify the file to process."

# Converts a term entry in the excel file into an XML chunk
# @param term an associative array of a single entry in the excel file
# @return a well-formed XML object
def entryToXml(term):
   termRoot = et.Element("term")
   uuid = et.SubElement(termRoot,"uuid").text = term['UUID / Anchor Tag']
   title = et.SubElement(termRoot,"title").text = term['Title']
   termRoot.append(elementXml("word-types","type",term['Word Type'].split(',')))
   termRoot.append(elementXml("synonyms","synonym",term['Synonyms'].split(',')))
   primarySource = et.SubElement(termRoot,"primary-source").text = term['Primary Source']
   termRoot.append(elementXml("content-tags","content-tag",term['Content Tags'].split(',')))
   termRoot.append(elementXml("user-tags","user-tag",term['User Tags'].split(',')))
   shortDef = et.SubElement(termRoot,'short-definition').text = term['Short Definition']
   longDef = et.SubElement(termRoot, 'long-definition').text = term['Long Definition']
   usage = et.SubElement(termRoot, 'usage').text = term['Usage']
   refLinks = et.SubElement(termRoot, 'reference-links').text = term['Reference Links']
   return termRoot

# A helper function to create elements with sub elements
# @param elementName the name of the root element
# @param subElementName the name of the sub elements
# @param elements a list of string elements
# @return a well-formed XML object
def elementXml(elementName,subElementName,elements):
    elementRoot = et.Element(elementName)
    for element in elements:
        et.SubElement(elementRoot, subElementName).text = element.strip()
    return elementRoot


# Script Entry Point

if __name__ == "__main__":
    inputfile = None
    outputfile = None
    try:
        opts,args = getopt.getopt(sys.argv[1:],"hi:o:",["ifile=","ofile="])
    except getopt.GetoptError:
        print 'xml-export.py -i <inputfile> -o <outputfile>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'test.py -i <inputfile> -o <outputfile>'
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg

    main(os.getcwd(),inputfile,outputfile)
