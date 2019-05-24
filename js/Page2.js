'use strict'

// main

window.addEventListener('load', () => {

    var modal = $('.modal2');
    $('.show-modal').click(function() {
        modal.fadeIn();
    });

    $('.close-modal2').click(function() {
        modal.fadeOut();
    });

    var modal2 = $('.modal3');
    $('.show-modal2').click(function() {
        modal2.fadeIn();
    });

    $('.close-modal3').click(function() {
        modal2.fadeOut();
    });

    // agregar por medio de datos
    // add data
    var sem = document.querySelector("#semantico");
    var back = document.querySelector("#back");
    var net = document.querySelector("#table3")
    var reset = document.querySelector("#table4");
    var boton = document.querySelector("#run");
    var informacion = document.querySelector("#example-modal--label");

    //muestra el modal
    // view windows modal
    var $exampleModal = $("#example-modal"),
        $exampleModalClose = $(".modal-header button");

    $exampleModal.on("shown.bs.modal", function() {
        document.activeElement.blur();
        $exampleModalClose.focus();
    });

    //obtiene los datos
    // get data
    boton.addEventListener('click', () => {

        var valor = document.querySelector(".rela-block").value;
        var data2 = valor.split(/[^Z-z*-Z1-9'-{|}]+/);

        // si el verificador de java se ejecuta devuelve un true del o contrario jo se ejecutara
        if (verificador(data2) == true) {
            //si devuelve un string es porque se encontro un error
            if (typeof(errores(data2)) == "string") {
                // cambiar de color al boton error
                document.querySelector('#table2').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = errores(data2);
                //metes error en la tabla
                tabledinamic(errores(data2));

            } else if (typeof(deteccion2(data2)) == "string") {

                document.querySelector('#table2').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = deteccion2(data2);

                tabledinamic(deteccion2(data2));

                //finaliza la consulta de errores

            } else if (typeof(extraersesson()) == "string") {

                //semantico
                document.querySelector('#semantico').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').innerHTML = extraersesson();
                document.querySelector('#out').style.backgroundColor = 'red';
                tabledinamic2(extraersesson());

            } else if (ultima(data2) == false) {

                document.querySelector('#semantico').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = "Error 22 - Code: Comparador no compatible";
                document.querySelector('#out').style.backgroundColor = 'red';
                tabledinamic2("Error 22 - Code: Comparador no compatible ");

            } else {

                //barrido de iformacion
                //Details sweep
                barrido(data2);
                //detecta el valor de las variables
                //Detects the value of the variables
                deteccion(data2);
                //cambiar de color al boton del mundo
                //Change color to the wordl buttom
                document.querySelector('#table3').style.backgroundColor = '#fcdc29';
                //cambiar de color al div que dice java
                //Change color to the  div java
                document.querySelector('#java').style.backgroundColor = '#fcdc29';
                //cambiar de color al boton del listado
                //Change color to the execution buttom
                document.querySelector('#example-modal--label').style.backgroundColor = '#fcdc29';
                //cambiar texto al div de ejecucion
                //Change text to the execution div
                document.querySelector('#out').innerHTML = "Successfully executed";
                //cambiar color al div de ejecucion
                //Change color to the execution div
                document.querySelector('#out').style.backgroundColor = '#fcdc29';
            }


        } else if (verificadorc(data2) == true) {

            if (typeof(errores2(data2)) == "string") {
                // cambiar de color al boton error
                document.querySelector('#table2').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = errores2(data2);
                //metes error en la tabla
                tabledinamic(errores2(data2));

            } else if (typeof(deteccion3(data2)) == "string") {

                document.querySelector('#table2').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = deteccion3(data2);

                tabledinamic(deteccion3(data2));

                //finaliza la consulta de errores

            } else if (typeof(extraersesson2()) == "string") {

                //semantico
                document.querySelector('#semantico').style.backgroundColor = 'red';
                // si funciona cambia de color el boton y div 
                document.querySelector('#out').innerHTML = extraersesson2();
                document.querySelector('#out').style.backgroundColor = 'red';
                tabledinamic2(extraersesson2());

            } else if (ultima2(data2) == false) {

                document.querySelector('#semantico').style.backgroundColor = 'red';
                document.querySelector('#out').innerHTML = "Error 22 - Code: Comparador no compatible";
                document.querySelector('#out').style.backgroundColor = 'red';
                tabledinamic2("Error 22 - Code: Comparador no compatible ");

            } else {

                barrido2(data2);
                //detecta el valor de las variables
                deteccion7(data2);
                //cambiar de color al boton del mundo
                document.querySelector('#table3').style.backgroundColor = '#fcdc29';
                //cambiar de color al div que dice c
                document.querySelector('#c').style.backgroundColor = '#fcdc29';
                //cambiar de color al boton del listado
                document.querySelector('#example-modal--label').style.backgroundColor = '#fcdc29';
                //cambiar texto al div de ejecucion
                document.querySelector('#out').innerHTML = "Successfully executed";
                //cambiar color al div de ejecucion
                document.querySelector('#out').style.backgroundColor = '#fcdc29';

            }

        }


    });


    //Extraer la informacion y mostrarla en el lis text
    var num = 0;
    informacion.addEventListener('click', () => {

        var data1 = localStorage.length;
        for (var x2 = 0; x2 < data1; x2++) {

            num = document.getElementById("t1").rows.length - 1;

            var x = document.createElement("tr");

            var a = document.createElement("td");
            var anode = document.createTextNode(num + '.');
            a.appendChild(anode);
            x.appendChild(a);

            a = document.createElement("td");
            anode = document.createTextNode(JSON.parse(localStorage.getItem(x2)));

            a.appendChild(anode);
            x.appendChild(a);
            document.getElementById("t1").appendChild(x);

        }

    });


    //muestra la red
    net.addEventListener("click", () => {
        get();
    });


    back.addEventListener('click', () => {


        window.location.replace("../Proyecto_Final/Index.html");
        //location.href = "http://www.google.com";
    });

    //resetea todo
    reset.addEventListener('click', () => {


        try {
            network.destroy();
        } catch (error) {

            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
        document.querySelector('#c').style.backgroundColor = 'black';
        document.querySelector('#table2').style.backgroundColor = 'black';
        document.querySelector('#table3').style.backgroundColor = 'black';
        document.querySelector('#semantico').style.backgroundColor = 'black';
        document.querySelector("#t1").innerHTML = "";
        document.querySelector("#t2").innerHTML = "";
        document.querySelector("#t3").innerHTML = "";
        document.querySelector("#area").value = "";
        document.querySelector('#java').style.backgroundColor = 'black';
        document.querySelector('#example-modal--label').style.backgroundColor = 'black';
        document.querySelector('#out').innerHTML = "Output Here";
        document.querySelector('#out').style.backgroundColor = 'white';
        window.localStorage.clear();
        sessionStorage.clear();
        x4 = 0;
        cont = 0;

    });


}); // fin del main