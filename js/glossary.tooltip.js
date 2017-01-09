magento.glossary.tooltip = {

    init: function(){
        $('[data-toggle="popover"]').each(function(){
            console.log(this);

            var term = magento.glossary.terms.find(magento.glossary.tooltip._findTerm,$(this).attr("term-uuid"));

            if(term){

            var title =  "<a href='"+magento.glossary.url+"?#"+term.id+"'>"+term.title+"</a>";
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
