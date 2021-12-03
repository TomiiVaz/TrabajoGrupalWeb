
function abrir_menu(){
    $("#nav_header").slideUp("1000", function() {
        $("#btn_menu_open").hide();
        $("#nav_header").show();
        $("#nav_header").css("display","flex");
    });
}


function cerrar_menu(){
    $("#nav_header").slideDown("1000", function() {
        $("#btn_menu_open").show();
        $("#nav_header").hide();
    });
}



$(document).ready(function(){
    $("#btn_menu_open").click(function(){
        abrir_menu();
    });
    $("#btn_menu_close").click(function(){
        cerrar_menu();
    });
    $(window).resize(function(){
        if($(this).width() > 900){
            $("#nav_header").show();
            $("#btn_menu_close").hide();
        }else{
            $("#btn_menu_open").show();
            $("#nav_header").hide();
        }
    })
});