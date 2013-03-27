/**
 * @fileoverview jQuery config for alicn
 * @author Edgar
 * @date 130327
 * */

window.lofty && (
    define( 'avid/jquery/jquery-1.7.2', function(){
        return jQuery;
    } ),
    lofty.config({
        alias: {
            jquery: 'avid/jquery/jquery-1.7.2'
        }
    })
);
