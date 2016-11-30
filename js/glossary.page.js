magento.glossary.page = {

    init: function(){
        magento.glossary.page.filter.init();
        magento.glossary.page.insertGroupLinks(); 
    },

    insertTerms: function(terms){
        if(typeof terms == "undefined")
            terms = magento.glossary.terms;
        
        for(var i=0; i<terms.length; i++){
            var group = terms[i].title.toUpperCase().charAt(0);

            var termTemplate = $('#termTemplate').html();
            var termGroupTemplate = $('#termGroupTemplate').html();

            if($("#"+group+"-container").length==0)
            {
                
                $(Mustache.render(termGroupTemplate,{
                    group: group,
                })).appendTo("#glossary-terms");
            }

            $(Mustache.render(termTemplate,terms[i])).insertBefore("#"+group+"-container a");
        }

        magento.glossary.page.filter.applyUrlFilter();

        function metadataToggle(eventObject){
            magento.glossary.page.toggleDisplay(eventObject.target,"Show Metadata","Hide Metadata", ".metadata");
        } 
        
        $(".term-data .toggle-metadata").click(metadataToggle);

        function definitionToggle(eventObject){
            magento.glossary.page.toggleDisplay(eventObject.target,"More","Less",".long-definition");
        }

        $(".term-data .show-definition").click(definitionToggle);
    },

    toggleDisplay: function(toggleSwitch, textShow, textHide, selector){
        var target = $(selector,$(toggleSwitch).parentsUntil(".term",".term-data"));
        if(target.hasClass("hidden")){
            target.addClass("show").removeClass("hidden");
            $(toggleSwitch).text(textHide);
        }
        else {
            target.addClass("hidden").removeClass("show");
            $(toggleSwitch).text(textShow);
        }
    },

    insertGroupLinks: function(){
        var renderer = magento.glossary.page.renderer;
        renderer.render("./js/templates/termGroupLink.mst", {
            groups: [
                {
                    targetAnchor: "A",
                    buttonText: "A-C",
                    id: "a-c"
                },
                {
                    targetAnchor: "D",
                    buttonText: "D-F",
                    id: "d-f"
                },
                {
                    targetAnchor: "G",
                    buttonText: "G-I",
                    id: "g-i"
                },
                {
                    targetAnchor: "J",
                    buttonText: "J-L",
                    id: "j-l"
                },
                {
                    targetAnchor: "M",
                    buttonText: "M-O",
                    id: "m-o"
                },
                {
                    targetAnchor: "P",
                    buttonText: "P-R",
                    id: "p-r"
                },
                {
                    targetAnchor: "S",
                    buttonText: "S-U",
                    id: "s-u"
                },
                {
                    targetAnchor: "V",
                    buttonText: "V-Z",
                    id: "v-z"
                },
                {
                    targetAnchor: "",
                    buttonText: "Back to Top",
                    id: "top"
                },
            ]
        },
        function(html){ $("#term-groups").append(html); });

    },

}
