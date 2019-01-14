#!/user/bin/python

import sys,os,getopt

from classes.XmlConverter import XmlConverter
from classes.ExcelParser import ExcelParser

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

    if(inputfile is not None):
        parser = ExcelParser(os.getcwd(),inputfile=inputfile)

        terms = parser.getTerms()

        converter = XmlConverter("terms")

        for term in terms:
            converter.addTerm(term)

        if(outputfile is None):
            print converter.toString()
        else:
            f = open(outputfile,'w')
            f.write(converter.toString())
            f.close()
