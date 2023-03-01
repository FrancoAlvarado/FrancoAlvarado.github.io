let menuvisible = false;
/*   funcion para mostrar u ocultar el menu    */
function mostrarocultarmenu(){
    if(menuvisible){
        document.getElementById("nav").classList ="";
        menuvisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuvisible = true;
    }
}
/*   OCULTAR EL MENU UNA VEZ SELECCIONADO UNA OPCION   */
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuvisible = false;
}