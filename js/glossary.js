if (typeof magento == "undefined") {
      var magento = {};
};

magento.glossary = {

    url: "http://localhost:3000",
    terms: [],
    init: function(dataUrl, filter, callback){
        $.get(dataUrl, function(data){
            glossary = magento.glossary;
                     
                    glossaryData = $($.parseXML(data));
                    glossaryData.find("term").each(function(){ return glossary.processTerm(filter,$(this));});

                    callback();
              }, "text");
        }, 
    processTerm: function(filter,term) {
            var glossary = magento.glossary;

            var unserializedTerm = glossary.unserializeTerm(term);

            if(filter(unserializedTerm))
                glossary.terms.push(unserializedTerm);
        },

    unserializeTerm: function(termXmlData) {
            var data = {};

            data.id = termXmlData.find("uuid").text();
            data.title = termXmlData.find("title").text();
            data.types = magento.glossary.unserializeList(termXmlData.find("types type"));
            data.forms = magento.glossary.unserializeFormTypes(termXmlData.find("form-types form"));
            data.synonyms = magento.glossary.unserializeList(termXmlData.find("synonyms synonym"));
            data.primarySource = termXmlData.find("primary-source").text().toLowerCase();
            data.contentTagsArray = magento.glossary.unserializeList(termXmlData.find("content-tags content-tag")).map(function(value){
                return value.replace(/[\s\/]+/,"-");    
            }); 
            data.userTagsArray = magento.glossary.unserializeList(termXmlData.find("user-tags user-tag"));
            data.shortDefinition = termXmlData.find("short-definition").text().replace(/(?:\r\n|\r|\n)/g, '<br />');
            data.longDefinition = termXmlData.find("long-definition").text().replace(/(?:\r\n|\r|\n)/g, '<br />'); 
            data.usage = termXmlData.find("usage").text();
            data.referenceLinks = magento.glossary.unserializeReferenceLinks(termXmlData.find("reference-links reference-link"));

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
                var link = {
                    location: $("location",refLinks[i])[0].textContent, 
                    text: $("text",refLinks[i])[0].textContent
                };
                links.push(link)
            }

            return links;
        },
    
}
