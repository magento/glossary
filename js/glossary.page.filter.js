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

        filter.appendTagFilter("Content Type","radio","content-tag","content-type",[
            {
                id: null,
                text: "All"
            },
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
            target.append(html);
            $(".filter input").click(magento.glossary.page.filter.updateFilter);
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

        var filterSelector = [];

        if(urlParams.source)
            filterSelector.push("source-"+urlParams.source[0]);

        if(urlParams.audience){
            for(var i=0; i<urlParams.audience.length;i++)
                filterSelector.push("user-tag-"+urlParams.audience[i]);
        }

        if(urlParams.content)
            filterSelector.push("content-tag-"+urlParams.content[0]);

        filter.applyFilters(filterSelector);
    },
}
