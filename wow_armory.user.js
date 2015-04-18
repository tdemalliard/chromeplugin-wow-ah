

function GM_main ($) {
    jQuery(document).ready(function(){
        var items = jQuery('.item')
        jQuery.each(items, function( i, val) {
            var item = jQuery(val).find('a').first()
            console.log(item)
            // var item = items.first()
            var itemid = item.attr('href').split('/')[4]
            var cc = item.attr('data-item')
            console.log(itemid);

            var url = 'https://us.battle.net/wow/en/item/' 
                + itemid 
                + '/trade-skill/tooltip?' 
                + cc
            console.log(url)
            jQuery.get(url, function(data) {
                    var stage = jQuery(data).find(".item-specs li").first().html()
                    console.log(stage)
                    item.after(stage)
                }
            );
        })
    });
};



add_jQuery (GM_main, "2.1.1");

function add_jQuery (callbackFn, jqVersion) {
    jqVersion       = jqVersion || "2.1.1";
    var D           = document;
    var targ        = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    var scriptNode  = D.createElement ('script');
    scriptNode.src  = 'https://ajax.googleapis.com/ajax/libs/jquery/'
                    + jqVersion
                    + '/jquery.min.js'
                    ;
    scriptNode.addEventListener ("load", function () {
        var scriptNode          = D.createElement ("script");
        scriptNode.textContent  =
            'var gm_jQuery  = jQuery.noConflict (true);\n'
            + '(' + callbackFn.toString () + ')(gm_jQuery);'
        ;
        targ.appendChild (scriptNode);
    }, false);
    targ.appendChild (scriptNode);
}


