function showMenu(){
    var toggleButton = document.getElementsByClassName('toggle-button')[0];
    var menu_items = document.getElementsByClassName('menu')[0];
    var device_width = document.device_width;
    if(menu_items.style.display === "block"){
        menu_items.style.display = "none";
    }
    else{
        menu_items.style.display = "block"
    }
    
}
