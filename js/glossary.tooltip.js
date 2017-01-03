magento.glossary.tooltip = {

    init: function(){
        $('[data-toggle="popover"]').each(function(){
            console.log(this);
            var title =  magento.glossary.terms.find(magento.glossary.tooltip._findTerm,$(this).attr("term-uuid")).title;
            var content = magento.glossary.terms.find(magento.glossary.tooltip._findTerm,$(this).attr("term-uuid")).shortDefinition;

            $(this).webuiPopover({
                title: title,
                content: content,
                width: '300px'
            });
        });
    },

    _findTerm: function(element){
        return element.id == this; 
   }

};
