/**
 * @fileoverview jQuery config for alicn
 * @author Edgar
 * @date 130327
 * */

window.lofty && (
    define( 'avid/jquery/jquery@VERSION', function(){
        return jQuery;
    } ),
    lofty.config({
        alias: {
            jquery: 'avid/jquery/jquery@VERSION'
        }
    })
);
