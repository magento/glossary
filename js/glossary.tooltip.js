magento.glossary.tooltip = {

    init: function(){
        $('[data-toggle="popover"]').each(function(){
            var term = magento.glossary.terms.find(magento.glossary.tooltip._findTerm,$(this).attr("term-uuid"));

            if(term){

            var title = term.title;
            var glossaryLink = "<p><a href=\""+magento.glossary.url+"?#"+term.id+"\" target=\"_blank\">More Details</a></p>";
            var content = term.shortDefinition+glossaryLink;

            $(this).webuiPopover({
                title: title,
                content: content,
                width: '400px',
                closeable: true
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
