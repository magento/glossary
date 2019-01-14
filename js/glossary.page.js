magento.glossary.page = {

    init: function(){
        magento.glossary.page.filter.init();
    },

    insertTerms: function(terms,callback){
        if(typeof terms == "undefined")
            terms = magento.glossary.terms;

        for(var i=0; i<terms.length; i++){
           // if(!terms[i].types.includes("glossary"))
           //     continue;

            //var group = terms[i].title.toUpperCase().charAt(0);

            var group = "Num";

            var group = /[a-zA-Z]/.test(terms[i].title[0])?terms[i].title[0].toUpperCase():/[0-9]/.test(terms[i].title[0])?"Num":terms[i].title.match(/[a-zA-Z]/i)[0].toUpperCase();

            var termTemplate = $('#termTemplate').html();
            var termGroupTemplate = $('#termGroupTemplate').html();

            if($("#"+group+"-container").length==0)
            {
                $(Mustache.render(termGroupTemplate,{
                    group: group,
                })).appendTo("#glossary-terms");
            }

            var forms = []
            var keys = terms[i].forms.keys();

            if(terms[i].referenceLinks.length)
                terms[i].showReferenceLinks = true

            do{
                iter = keys.next().value;

                if(iter){
                    forms.push({"form":iter,"types":terms[i].forms.get(iter)});
                }
                
            }while(iter);

            terms[i].forms = forms;
            terms[i].baseurl = magento.glossary.url;

            $(Mustache.render(termTemplate,terms[i])).insertBefore("#"+group+"-container .back-to-top");
        }
        
        magento.glossary.page.insertGroupLinks(); 


        if(window.location.hash){
            window.location.search = '';
            window.location.href = window.location.hash;
        }
        else
            magento.glossary.page.filter.applyUrlFilter();

        function metadataToggle(eventObject){
            var target = $(".metadata",$(eventObject.target).parentsUntil(".term",".term-data"));
            magento.glossary.page.toggleDisplay(eventObject.target,"Show Metadata","Hide Metadata", target);
        } 
        
        $(".term-data .toggle-metadata").click(metadataToggle);

        function definitionToggle(eventObject){
            var target = $(".long-definition",$(eventObject.target).parentsUntil(".term",".term-data"));
            magento.glossary.page.toggleDisplay(eventObject.target,"More...","...Less",target);
        }

        $(".term-data .show-definition").click(definitionToggle);

        function contentAuthorLinksToggle(eventObject){
            var target = $(".word-usage");
            magento.glossary.page.toggleDisplay(eventObject.target,"Show content author links", "Hide content author links", target);
            target = $(".toggle-metadata");
            magento.glossary.page.toggleDisplay(eventObject.target,"Show content author links", "Hide content author links", target);
        }

        $(".content-author-link").click(contentAuthorLinksToggle);

        if(callback)
            callback();
    },

    toggleDisplay: function(toggleSwitch, textShow, textHide, target){
        if(target.hasClass("hidden")){
            target.addClass("show").removeClass("hidden");
            if(textShow)
                $(toggleSwitch).html(textHide);
        }
        else {
            target.addClass("hidden").removeClass("show");
            if(textHide)
                $(toggleSwitch).html(textShow);
        }
    },

    insertGroupLinks: function(){
        var renderer = magento.glossary.page.renderer;
        renderer.render("./js/templates/termGroupLink.mst", {
            groups: [
                {
                    targetAnchor: "A",
                    buttonText: "A-C",
                    id: "a-c",
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
                    targetAnchor: "Num",
                    buttonText: "Num.",
                    id: "num"
                },
                {
                    targetAnchor: "",
                    buttonText: "Back to Top",
                    id: "top"
                },
            ]
        },
        function(html){ 
            $(".term-groups").append(html); 
        
            //Hide Num if there are no num entries
            if($("#Num-container").length<1)
                $(".anchor-link-num").hide();

            $(".term-groups a").click(function(){
                if(document.documentElement.clientWidth < 768) {
                    $(".navbar-nav").addClass("hidden");
                }
            });
        }); 

    },

}
