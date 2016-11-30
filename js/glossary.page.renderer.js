magento.glossary.page.renderer = {

    cache: {},

    init: function(){

    },

    render: function(templateName,params,callback){
        var renderer = magento.glossary.page.renderer;

        if(renderer.cache[templateName]){
            callback(Mustache.render(renderer.cache[templateName],params));
        }else{
            $.get(templateName, function(template){
                renderer.cache[templateName] = template;
                callback(Mustache.render(template,params));
            });
        }
    }
}
