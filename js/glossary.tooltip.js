magento.glossary.tooltip = {

    init: function(){
        $('[data-toggle="popover"]').each(function(){
            var term = magento.glossary.terms.find(magento.glossary.tooltip._findTerm,$(this).attr("term-uuid"));

            if(term){

            var title = term.title;
            var content = term.shortDefinition;

            $(this).webuiPopover({
                title: title,
                content: content,
                width: '300px'
            });
            }
            else{
                console.error("Could not find term with id "+$(this).attr("term-uuid"));
            }
        });
    },

    _findTerm: function(element){
        return element.id == this; 
   }

};
