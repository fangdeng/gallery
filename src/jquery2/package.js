/**
 * package for lofty
 * */

if ( window.lofty ){
    jQuery.noConflict();
    
    define( 'gallery/jquery/jqueryLatest', function(){
        return jQuery;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'gallery/jquery/jqueryLatest'
        }
    });
}
