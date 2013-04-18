/**
 * @fileoverview jQuery config for alicn
 * @author Edgar
 * @date 130327
 * */

window.lofty && (
    define( 'gallery/jquery/jquery@VERSION', function(){
        return jQuery;
    } ),
    lofty.config({
        alias: {
            jquery: 'gallery/jquery/jquery@VERSION'
        }
    })
);
