#!/usr/bin/python

import json
import re

class Serializer:
    @staticmethod
    def unserializeList(string):
        result = []

        tokens = string.split(',')

        for token in tokens:
            result.append(token.strip()) 
        
        return result

    @staticmethod
    def unserializeForms(string):
        result = []

        groups = re.findall("([\w\s]+):\s*\[([^\]]+)\]",string)

        for group in groups:
            result.append({group[0].strip():Serializer.unserializeList(group[1])})

        return result

    @staticmethod
    def unserializeReferenceLinks(string):
        result = []

        groups = re.findall("\"([^\"]+)\"\s*:\s*\"([^\"]+)\"",string)

        for group in groups:
            result.append({group[0].strip():group[1].strip()})
        
        return result
