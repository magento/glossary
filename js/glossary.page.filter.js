magento.glossary.page.filter = {
    init: function(){
        var filter = magento.glossary.page.filter;

        filter.appendTagFilter("Audience","checkbox","user-tag",null,[
            {
                id: "developer",
                text: "Developer"
            },
            {
                id: "merchant",
                text: "Merchant"
            },
            {
                id: "internal",
                text: "Internal"
            }
        ],$("#user-tags"));

        filter.appendTagFilter("Content Type","checkbox","content-tag","content-type",[
            {
                id: "business-marketing",
                text: "Business/Marketing"
            },
            {
                id: "design",
                text: "Design"
            },
            {
                id: "magento-software",
                text: "Magento Software"
            },
            {
                id: "pricing",
                text: "Pricing"
            },
            {
                id: "product",
                text: "Product"
            },
            {
                id: "programming",
                text: "Programming"
            },
            {
                id: "order",
                text: "Order"
            }
        ],$("#content-tags"));

        filter.appendTagFilter("Primary Source","radio","source","primary-source",[
            {
                id: null,
                text: "All"
            },
            {
                id: "design",
                text: "Design"
            },
            {
                id: "devdocs",
                text: "DevDocs"
            },
            {
                id: "marketing",
                text: "Marketing"
            },
            {
                id: "training",
                text: "Training"
            },
            {
                id: "userdocs",
                text: "UserDocs"
            },
            {
                id: "ux",
                text: "UX"
            }
        ],$("#primary-source"));
    },

    appendTagFilter: function(label, inputType, prefix, name, options,target){
        var template = $('#tagFilterTemplate').html();
        var renderer = magento.glossary.page.renderer;

        renderer.render("./js/templates/tagFilterTemplate.mst",{
            label: label,
            inputType: inputType,
            prefix: prefix,
            name: name,
            options: options,
        },function(html){
            var filter = magento.glossary.page.filter;
            target.append(html);
            $(".filter input").click(filter.updateFilter);

            if(window.location.hash==""){
                var filterSelectors = filter.getFilterSelectors(filter.getUrlParams());
                for(var i=0; i<filterSelectors.length; i++){
                    $("input#"+filterSelectors[i]).prop("checked",true);
                }
            }
        });
    },

    getUrlParams: function(url){
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        var params = {};

        if(queryString){
            var paramStrings = queryString.split('&');

            for(var i=0; i<paramStrings.length; i++)
            {
                var paramKeyValue = paramStrings[i].split('=');

               if(params[paramKeyValue[0]])
                  params[paramKeyValue[0]].push(paramKeyValue[1].toLowerCase()); 
               else
                  params[paramKeyValue[0]] = [paramKeyValue[1].toLowerCase()];
            }
        }

        return params; 
    },

    applyFilters: function(classList){
        if(typeof(classList)==undefined)
            classList = magento.glossary.page.filter.filterClassList;

        $(".term").removeClass("show").addClass("hidden");


        var filter = classList.map(function(element){
            if(element)
                return "."+element;
            return "";
        }).join("");

        $(".term"+filter).removeClass("hidden").addClass("show");
    },
    
    updateFilter: function(){
        filterClassList = [];
        $(".filter input:checked").each(function(){
            filterClassList.push($(this).val());
        });

        magento.glossary.page.filter.applyFilters(filterClassList);
    },
    applyUrlFilter: function() {
        var filter = magento.glossary.page.filter;

        urlParams = filter.getUrlParams();

        filter.applyFilters(magento.glossary.page.filter.getFilterSelectors(urlParams));
    },

    getFilterSelectors: function(urlParams) {
        var filterSelectors = [];

        if(urlParams.source)
            filterSelectors.push("source-"+urlParams.source[0]);

        if(urlParams.audience){
            for(var i=0; i<urlParams.audience.length;i++)
                filterSelectors.push("user-tag-"+urlParams.audience[i]);
        }

        if(urlParams.content)
            filterSelectors.push("content-tag-"+urlParams.content[0]);

        return filterSelectors
    },
}
