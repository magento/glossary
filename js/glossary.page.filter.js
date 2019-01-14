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

        filter.appendTagFilter("Source","radio","source","primary-source",[
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

            $(" .filter input",target).click(filter.updateFilter);

            if(window.location.hash==""){
                var filterSelectors = filter.getFilterSelectors(filter.getUrlParams());
                for(var i=0; i<filterSelectors.length; i++){
                    if(filterSelectors[i].startsWith(prefix)){
                        $(" input#"+filterSelectors[i],target).prop("checked",true); 
                        filter.appendTagLabel(filterSelectors[i].replace(prefix+"-",""));
                    }
                }
            }
        });
    },

    appendTagLabel: function(name){
        var renderer = magento.glossary.page.renderer;
        renderer.render("./js/templates/filterLabel.mst",{
            name: name,
        },function(html){
            $(".filters-list").append(html);
        });
    },

    getUrlParams: function(url){
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        var params = {};

        if(queryString){
            var paramStrings = queryString.split('&');

            for(var i=0; i<paramStrings.length; i++)
            {
                if(paramStrings[i]){
                    var paramKeyValue = paramStrings[i].split('=');

                    if(params[paramKeyValue[0]])
                        params[paramKeyValue[0]].push(paramKeyValue[1].toLowerCase()); 
                    else
                        params[paramKeyValue[0]] = [paramKeyValue[1].toLowerCase()];
                }
            }
        }

        return params; 
    },

    createFilterParamsUrl: function(){
        var checkedFilters = $(".filter input:checked");

        var paramsUrl = [];

        for(var i=0;i<checkedFilters.length;i++)
        {
            var value = checkedFilters[i].value;

            if(value.startsWith("user-tag-"))
                paramsUrl.push("audience="+value.split("-").slice(2).join("-"));
            if(value.startsWith("content-tag-"))
                paramsUrl.push("content="+value.split("-").slice(2).join("-"));
            if(value.startsWith("source-"))
                paramsUrl.push("source="+value.split("-").slice(1).join("-")); 
        }

        return paramsUrl.join("&");

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
    
    updateFilter: function(eventObject){
        filterClassList = [];
        $(".filter input:checked").each(function(){
            filterClassList.push($(this).val());
        });

        if(eventObject.target.id.startsWith("user-tag")){
            window.location.hash='';
            window.location.search=magento.glossary.page.filter.createFilterParamsUrl();
        }else
        { 
            magento.glossary.page.filter.applyFilters(filterClassList);

            $(".filters-list").empty();

            for(var i=0; i<filterClassList.length; i++) {
                magento.glossary.page.filter.appendTagLabel(filterClassList[i]
                                                                .replace("user-tag-","")
                                                                .replace("content-tag-","")
                                                                .replace("source-",""));
            }
        }
    },

    updateFilterList: function(){

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
            for(var i=0; i<urlParams.content.length;i++)
                filterSelectors.push("content-tag-"+urlParams.content[i]);

        return filterSelectors
    },
}
