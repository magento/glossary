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

            data.id = termXmlData.find("uuid").text();
            data.title = termXmlData.find("title").text();
            data.wordTypes = termXmlData.find("word-types").text().trim().split(/\s+/).join(", ");
            data.longDefinition = termXmlData.find("long-definition").text();
            data.shortDefinition = termXmlData.find("short-definition").text();
            data.userTagsArray = termXmlData.find("user-tags").text().trim().split(/\s+/).map(function(element){ 
                return element.toLowerCase();
            });
            data.contentTagsArray = termXmlData.find("content-tags").text().trim().replace(/(\w)\s(\w)/,'$1-$2').split(/\s\s+/).map(function(element){
                return element.toLowerCase();
              });
            data.primarySource = termXmlData.find("primary-source").text().toLowerCase();

            return data; 
        },
    
    
}
