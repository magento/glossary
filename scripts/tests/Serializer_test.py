#!/usr/bin/python
import unittest

import os
import sys
sys.path.insert(0, os.path.abspath('..'))

from classes.Serializer import Serializer

class TestSerializer(unittest.TestCase):

    def test_unserializeList(self):
        data = []

        data.append({"string":"Internal, Developer, Merchant","expected":["Internal","Developer","Merchant"]})
        data.append({"string":"Developer","expected":["Developer"]})

        for testData in data:
            result = Serializer.unserializeList(testData["string"])
            self.assertEquals(testData["expected"],result)

    def test_unserializeForms(self):
        data = []

        data.append({"string":"order:[n, v]","expected":[{"order":["n","v"]}]})
        data.append({"string":"fall back:[v], fallback:[adj, n] ","expected":[{"fall back":["v"]},{"fallback":["adj","n"]}]})
        data.append({"string":"24/7:[adj]","expected":[{"24/7":["adj"]}]})
        data.append({"string":"360-degree:[adj]","expected":[{"360-degree":["adj"]}]})
        data.append({"string":"module (training):[n]","expected":[{"module (training)":["n"]}]})

        for testData in data:
            result = Serializer.unserializeForms(testData["string"])
            self.assertEquals(testData["expected"],result)

    def test_unserializeReferenceLinks(self):
        data = []

        data.append({"string":'"PHP":"#bf703ab1-ca4b-48f9-b2b7-16a81fd46e02","web API":"#377dc0a3-b8a7-4dfa-808e-2de37e4c0029",',"expected":[{"PHP":"#bf703ab1-ca4b-48f9-b2b7-16a81fd46e02"},{"web API":"#377dc0a3-b8a7-4dfa-808e-2de37e4c0029"}]})

        for testData in data:
            result = Serializer.unserializeReferenceLinks(testData["string"])
            self.assertEquals(testData["expected"],result)

if __name__ == '__main__':
        unittest.main() 
