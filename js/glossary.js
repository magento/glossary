if (typeof magento == "undefined") {
      var magento = {};
};

magento.glossary = {
    
    terms: [],
    init: function(dataUrl, callback){
        $.get(dataUrl, function(data){
            glossary = magento.glossary;
                     
                    glossaryData = $($.parseXML(data));
                    glossaryData.find("term").each(glossary.processTerm);

                    callback();
              }, "text");
        }, 
    processTerm: function() {
            var term = $(this);

            var glossary = magento.glossary;

            glossary.terms.push(glossary.unserializeTerm(term));
        },

    unserializeTerm: function(termXmlData) {
            var data = {};

            //console.log(termXmlData);

            data.id = termXmlData.find("uuid").text();
            data.title = termXmlData.find("title").text();
            data.types = magento.glossary.unserializeList(termXmlData.find("types type"));
            data.forms = magento.glossary.unserializeFormTypes(termXmlData.find("form-types form"));
            data.synonyms = magento.glossary.unserializeList(termXmlData.find("synonyms synonym"));
            data.primarySource = termXmlData.find("primary-source").text().toLowerCase();
            data.contentTagsArray = magento.glossary.unserializeList(termXmlData.find("content-tags content-tag")); 
            data.userTagsArray = magento.glossary.unserializeList(termXmlData.find("user-tags user-tag"));
            data.shortDefinition = termXmlData.find("short-definition").text();
            data.longDefinition = termXmlData.find("long-definition").text();
            data.usage = termXmlData.find("usage").text();
            data.referenceLinks = magento.glossary.unserializeReferenceLinks(termXmlData.find("reference-links reference-link"));

            console.log(data);

            return data; 
        },

    unserializeList: function(xmlList) {
            var list = [];

            for(var i=0; i<xmlList.length; i++){
                content = xmlList[i].textContent.toLowerCase();
                if(content)
                    list.push(content);
            }

            return list;
        },

    unserializeFormTypes: function(forms) {
            var formTypes = new Map();
            
            for(var i=0; i<forms.length; i++){
                var types = $(forms[i]);
                var text = types.attr("text").trim();
                if(text){
                    if(!formTypes.has(text)){
                        formTypes.set(text,[]);
                    }
                    formTypes.set(text,magento.glossary.unserializeList($("form-type",types)));
                }
            };
            return formTypes;
        },

    unserializeReferenceLinks: function(refLinks) {
            var links = [];

            for(var i=0; i<refLinks.length; i++){
                var link = document.createElement("a");
                link.href = $("location",refLinks[i])[0].textContent;
                link.innerHTML = $("text",refLinks[i])[0].textContent;
                links.push(link)
            }

            return links;
        },
    
}
