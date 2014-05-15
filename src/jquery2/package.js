/**
 * package for lofty
 * */

if ( window.lofty ){
    jQuery.noConflict();
    
    define( 'gallery/jquery/jquery-latest', function(){
        return jQuery;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'gallery/jquery/jquery-latest'
        }
    });
}
