$(document).ready(function(){
    $('.nav-item').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');

        $('.nav-item.active').removeClass('active')
        $(this).addClass('active')


        $('.tab-item.active').fadeOut(100, function(){
            $(this).removeClass('active')

            $(target).fadeIn(400, function(){
                $(this).addClass('active')
            })
        })

        console.log('target', target)
    })

});



































// /*document.getElementById("boton1").addEventListener ("click",function () {
//     console.log("Capturamos el evento Click")
//     document.getElementById("perfil").classList.toggle("abrir")
//     })*/
//  /*Para dar click en un elemento desplegable*/
// function toggleClass(elem,className) {
//     if (elem.className.indexOf (className) !== -1) {
//         elem.className = elem.className.replace(className,"");
//     }
//     else{
//         elem.className = elem.className.replace(/Vs+/g,"") + "" + className;
//     }
//     return elem;
// }

// /*Para seleccionar una de las opciones*/

// function selectOption(e) {
//     toggleClass(e.target.parentNote , "hide");
//     const id = e.target.id;
//     const newValue =
// }



    