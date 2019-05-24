'use strict'

var cont = 0;
var x4 = 0;
var nc = "";
var nc2 = "";
var nc3 = "";



function barrido2(data3) {

    for (var x = 0; x <= data3.length; x++) {

        if (data3[x] == (";") || data3[x] == ("long") || data3[x] == ("String") || data3[x] == (">=") ||
            data3[x] == ("if") || data3[x] == ("boolean") || data3[x] == ("switch") || data3[x] == ("<=") ||
            data3[x] == ("else") || data3[x] == ("char") || data3[x] == ("case") || data3[x] == ("==") ||
            data3[x] == ("short") || data3[x] == ("float") || data3[x] == (">") || data3[x] == ("&") ||
            data3[x] == ("byte") || data3[x] == ("double") || data3[x] == (">") || data3[x] == ("|") ||
            data3[x] == ("+") || data3[x] == ("-") || data3[x] == ("*") || data3[x] == ("/") || data3[x] == ("{") ||
            data3[x] == ("++") || data3[x] == ("=") || data3[x] == (")") || data3[x] == ("]") || data3[x] == ("}") ||
            data3[x] == ("**") || data3[x] == ("(") || data3[x] == ("[") || data3[x] == ("int") || data3[x] == ("()") ||
            data3[x] == ("cin") || data3[x] == ("cout") || data3[x] == ("endl") || data3[x] == ("Int")) {

            localStorage.setItem(x4, JSON.stringify(informacion2(data3[x])))

            x4++;
        }
    }
}

function errores2(input) {

    var data;

    for (var x = 0; x <= input.length; x++) {


        if (input[x] == "INt" || input[x] == "INT" ||
            input[x] == "iNt" || input[x] == "inT") {

            data = "Error: 1 - Se escribio mal el int error de tipo: lexico";

        } else if (input[x] == "FOR" || input[x] == "For" ||
            input[x] == "FoR" || input[x] == "fOR" ||
            input[x] == "foR") {

            //data
            data = "Error: 2 - Se escribio mal el for error de tipo: lexico";

        } else if (input[x] == "ELSE" || input[x] == "Else" ||
            input[x] == "ELse" || input[x] == "ELSe" ||
            input[x] == "eLSE" || input[x] == "elSE" ||
            input[x] == "ELsE" || input[x] == "elSe" ||
            input[x] == "eLSE" || input[x] == "elsE" ||
            input[x] == "eLse") {

            data = "Error: 3 - Se escribio mal el else error de tipo: lexico";

            //data
        } else if (input[x] == "IF" || input[x] == "iF" || input[x] == "If") {

            data = "Error: 4 - Se escribio mal el if error de tipo: lexico";

        } else if (input[x] == "STRING" || input[x] == "sTRING" ||
            input[x] == "stRING" || input[x] == "strING" ||
            input[x] == "striNG" || input[x] == "strinG" ||
            input[x] == "STRINg" || input[x] == "STRIng" ||
            input[x] == "STRing" || input[x] == "STring" ||
            input[x] == "StrinG" || input[x] == "StrIng" ||
            input[x] == "StRing" || input[x] == "StriNg" ||
            input[x] == "sTring" || input[x] == "stRing" ||
            input[x] == "strIng" || input[x] == "striNg" ||
            input[x] == "string" || input[x] == "StRinG" ||
            input[x] == "StrInG" || input[x] == "StrING") {

            data = "Error: 5 - Se escribio mal el string error de tipo: lexico";
            //data

        } else if (input[x] == "Short" || input[x] == "sHort" ||
            input[x] == "shOrt" || input[x] == "shoRt" ||
            input[x] == "shorT" || input[x] == "SHort" ||
            input[x] == "SHOrt" || input[x] == "SHORt" ||
            input[x] == "SHORT") {

            data = "Error: 6 - Se escribio mal el short error de tipo: lexico";

            // data
        } else if (input[x] == "Byte" || input[x] == "BYte" ||
            input[x] == "BYTe" || input[x] == "BYTE" ||
            input[x] == "bYte" || input[x] == "byTe" ||
            input[x] == "bytE") {

            data = "Error: 7 - Se escribio mal el byte error de tipo: lexico";

            // data
        } else if (input[x] == "Boolean" || input[x] == "BOolean" ||
            input[x] == "BOOlean" || input[x] == "BOOLean" ||
            input[x] == "BOOLEan" || input[x] == "BOOLEAn" ||
            input[x] == "BOOLEAN" || input[x] == "bOolean" ||
            input[x] == "boOlean" || input[x] == "booLean" ||
            input[x] == "boolEan" || input[x] == "booleAn" ||
            input[x] == "booleaN") {

            data = "Error: 8 - Se escribio mal el boolean error de tipo: lexico";
            // data
        } else if (input[x] == "Char" || input[x] == "CHar" ||
            input[x] == "CHAr" || input[x] == "CHAR" ||
            input[x] == "cHar" || input[x] == "chAr" ||
            input[x] == "chaR") {
            // data
            data = "Error: 9 - Se escribio mal el char error de tipo lexico";

        } else if (input[x] == "Float" || input[x] == "FLoat" ||
            input[x] == "FLOat" || input[x] == "FLOAt" ||
            input[x] == "FLOAT" || input[x] == "fLoat" ||
            input[x] == "flOat" || input[x] == "floAt" ||
            input[x] == "floaT") {
            // data

            data = "Error: 10 - Se escribio mal el float error de tipo: lexico";

        } else if (input[x] == "Double" || input[x] == "DOuble" ||
            input[x] == "DOUble" || input[x] == "DOUBle" ||
            input[x] == "DOUBLe" || input[x] == "DOUBLE" ||
            input[x] == "dOuble" || input[x] == "doUble" ||
            input[x] == "douBle" || input[x] == "doubLe" ||
            input[x] == "doublE") {
            // data

            data = "Error: 11 - Se escribio mal el double error de tipo: lexico";

        } else if (input[x] == "Switch" || input[x] == "SWitch" ||
            input[x] == "SWItch" || input[x] == "SWITch" ||
            input[x] == "SWITCh" || input[x] == "SWITCH" ||
            input[x] == "sWitch" || input[x] == "swItch" ||
            input[x] == "swiTch" || input[x] == "switCh" ||
            input[x] == "switcH") {

            data = "Error: 12 - Se escribio mal el siwtch error de tipo: lexico";


        } else if (input[x] == "Case" || input[x] == "CAse" ||
            input[x] == "CASe" || input[x] == "CASE" ||
            input[x] == "cAse" || input[x] == "caSe" ||
            input[x] == "casE") {
            data = "Error: 13 - Se escribio mal el case error de tipo: lexico";
        } else if (input[x] == "Endl" || input[x] == "ENdl" ||
            input[x] == "ENDl" || input[x] == "ENDL" ||
            input[x] == "eNdl" || input[x] == "enDl" ||
            input[x] == "endL") {
            data = "Error: 14 - Se escribio mal el endl error de tipo: lexico";

        } else if (input[x] == "Cout" || input[x] == "COut" ||
            input[x] == "COUt" || input[x] == "COUT" ||
            input[x] == "cOut" || input[x] == "coUt" ||
            input[x] == "couT") {

            data = "Error: 15 - Se escribio mal el cout error de tipo: lexico";
        } else if (input[x] == "While" || input[x] == "WHile" ||
            input[x] == "WHIle" || input[x] == "WHILe" ||
            input[x] == "WHILE" || input[x] == "wHile" ||
            input[x] == "whIle" || input[x] == "whiLe" ||
            input[x] == "whilE") {

            data = "Error: 16 - Se escribio mal el while error de tipo: lexico";
        }


    }

    return data;

}

function deteccion7(recibir) {

    for (var x = 0; x < recibir.length; x++) {

        if (recibir[x] == "String") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);
                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);

                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {


                    //asignarle valor desconocido
                    console.log(typeof(nc2));

                }
            }

        } else if (recibir[x] == "int") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor


                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);

                    if (nc3.includes(".") == true) {
                        alert("error")
                            //result = "Error: 14 - De tipo semantico se le asigno un valor incorrecto "
                    }
                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    //asignarle valor desconocido
                    // console.log(nc2);

                }
            }
        } else if (recibir[x] == "boolean") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);


                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        } else if (recibir[x] == "char") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);


                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        } else if (recibir[x] == "long") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);


                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        } else if (recibir[x] == "float") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);


                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        }


    }

}


//detecta errores semanticos
function deteccion3(recibir) {
    var devo;
    for (var x = 0; x < recibir.length; x++) {

        if (recibir[x] == "String") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valo

                sessionStorage.setItem(cont, JSON.stringify(nc));
                cont++;
                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);


                    if (tiene_numeros(nc3) == true) {

                        devo = "Error: 16 - De tipo sintacticos se le asigno un valor incorrecto a String ";
                    }
                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {


                    //asignarle valor desconocido
                    console.log(typeof(nc2));

                }
            }

        } else if (recibir[x] == "int") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                sessionStorage.setItem(cont, JSON.stringify(nc));
                cont++;
                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);

                    if (nc3.includes(".") == true) {

                        devo = "Error: 17 - De tipo sintactico se le asigno un valor incorrecto a int ";
                    }
                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    //asignarle valor desconocido
                    // console.log(nc2);

                }
            }
        } else if (recibir[x] == "boolean") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);

                sessionStorage.setItem(cont, JSON.stringify(nc));
                cont++;
                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {

                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);

                    //  || !nc3.includes("false")

                    if (!nc3.includes("true") != nc3.includes("false")) {

                        devo = "Error: 18 - De tipo sintacto se le asigno otro valor a boolean ";
                    }


                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        } else if (recibir[x] == "char") {

            if (recibir[x + 2] == "=" || recibir[x + 2] == ";") {
                nc = recibir[x + 1].substring(0, recibir[x + 1].length);
                // capturamos si es = 0 si es ; 
                // si es = se esta asignando valor 
                // si es ; se esta declarando la variable sin valor

                sessionStorage.setItem(cont, JSON.stringify(nc));
                cont++;
                nc2 = recibir[x + 2].substring(0, recibir[x + 1].length);

                if (nc2 == "=") {
                    // capturamos el valor que se le asigno
                    nc3 = recibir[x + 3].substring(0, recibir[x + 1].length + 50);

                    if (nc3.length > 3) {

                        devo = "Error: 19 - De tipo sintactico se le asigno una cadena  a char ";
                    }

                    // nc3 capturamos y enviaremos a una area donde se muestren
                    // la variables declaradas y su valor

                } else if (nc2 == ";") {

                    console.log(nc2);

                }
            }
        }

    }

    // extraersesson();

    // console.log(typeof(ultima(data2)));
    return devo;

}

function ultima2(data) {

    for (var x = 0; x < data.length; x++) {
        var bol = true;

        if (data[x] == "if") {
            if (data[x + 3] == "==" || data[x + 3] == "<=" || data[x + 3] == ">=" ||
                data[x + 3] == "||" || data[x + 3] == ">" || data[x + 3] == "<" || data[x + 3] == "&&" ||
                data[x + 3] == "!=") {


                return bol = true;


            } else {

                return bol = false;
            }

        }



    }


}







var data = [];

function extraersesson2() {

    var devolver;


    var medidor = JSON.parse(sessionStorage.length);

    for (var i = 0; i < medidor; i++) {

        console.log(JSON.parse(sessionStorage.getItem(i)));
        if (JSON.parse(sessionStorage.getItem(i)) == JSON.parse(sessionStorage.getItem(i + 1))) {

            devolver = "Error:21 - Se encontron una variable repetida error: semantico";

        }


    }

    return devolver;


}


// verificamos que el string tiene numeros y si los tiene da un error
function tiene_numeros(val) {


    var matches = val.match(/\d+/g);
    if (matches != null) {

        return true;
    }

    return false;
}


// verificamos que estamos trabajando con c
function verificadorc(info) {
    var result = false;

    for (var x = 0; x < info.length; x++) {

        switch (info[x]) {

            case "#include<iostream>":
                result = true;
                break
            case "using":
                result = true;
                break

            case "namespace":
                result = true;
                break

        }
    }
    return result;
}

// encontramos lo que son las variables
function informacion2(data) {

    var result;
    switch (data) {

        case "int":
            result = "1-Int-Variable Reservada - Tipo promitivo";
            break;
        case "short":
            result = "2-short-Variable Reservada - Tipo promitivo";
            break;
        case "byte":
            result = "3-byte-Variable Reservada - Tipo promitivo";
            break;
        case "long":
            result = "4-long-Variable Reservada - Tipo promitivo";
            break;
        case "boolean":
            result = "5-boolean-Variable Reservada - Tipo promitivo";
            break;
        case "char":
            result = "6-char-Variable Reservada - Tipo promitivo";
            break;
        case "float":
            result = "7-float-Variable Reservada - Tipo promitivo";
            break;
        case "double":
            result = "8-double-Variable Reservada - Tipo promitivo";
            break;
        case "String":
            result = "9-String-Variable Reservada - Referencia a Objetos";
            break;
        case "if":
            result = "10-if-Variable de seleccion";
            break;
        case "else":
            result = "11-else-Variable de seleccion";
            break;
        case "switch":
            result = "12-siwtch-Variable de seleccion";
            break;
        case "case":
            result = "13-case-Variable de seleccion";
            break;
        case ">":
            result = "14->-Operadores Relacionales";
            break;
        case "<":
            result = "15-<-Operadores Relacionales";
            break;
        case ">=":
            result = "16->=-Operadores Relacionales";
            break;
        case "<=":
            result = "17-<=-Operadores Relacionales";
            break;
        case "==":
            result = "18- == -Operadores Relacionales";
            break;
        case "&":
            result = "19- & -Operadores booleanos";
            break;
        case "|":
            result = "20- | -Operadores booleanos";
            break;
        case "!":
            result = "21- ! -Operadores booleanos";
            break;

        case "+":
            result = "22- + -Operadores Aritmeticos";
            break;

        case "-":
            result = "23- - -Operadores Aritmetica";
            break;

        case "*":
            result = "24- * -Operadores Aritmetica";
            break;

        case "/":
            result = "25- / -Operadores Aritmetica";
            break;

        case "++":
            result = "26- ++ -Operador de Incremento";
            break;

        case "**":
            result = "27- ** -Operador de Potencia";
            break;
        case "=":
            result = "28- = -Operador de Asignacion";
            break;

        case ";":
            result = "29- ; -Punto y coma";
            break;

        case "(":
            result = "30- ( -Parentesis delimitador";
            break;

        case ")":
            result = "31- ) -Parentesis delimitador";
            break;

        case "[":
            result = "32- [ -Corchete delimitador";
            break;

        case "]":
            result = "33- ] -Corchete delimitador";
            break;

        case "{":
            result = "34- { -Llave delimitador";
            break;
        case "}":
            result = "35- } -Llave delimitador";
            break;
        case "()":
            result = "36- () -Funcion";
            break;
        case "try":
            result = "37- try - Capturador de errores";
            break;

        case "catch":
            result = "38- catch - Capturador de errores";
            break;

        case "cin":
            result = "39- cin - Varaible de lectura";
            break;

        case "cout":
            result = "40 - cout - Varaible de salida";
            break;

        case "cin":
            result = "39- endl - Varaible de finalizacion de linea";
            break;

        case "Int":
            result = "40- Int - variable declarada";
            break;
    }

    return result;
}





//visjs
var network;

function get() {
    var localstorageleght = JSON.parse(localStorage.length);
    // console.log(localstorageleght);

    var container;
    var exportArea;


    function init() {
        container = document.getElementById('network');
        exportArea = document.getElementById('input_output');


        draw();
    }




    function addConnections(elem, index) {
        // need to replace this with a tree of the network, then get child direct children of the element
        elem.connections = network.getConnectedNodes(index);
    }



    function draw() {
        // create a network of nodes
        var data = getScaleFreeNetwork(localstorageleght); //getScaleFreeNetwork(1);
        network = new vis.Network(container, data, {
            manipulation: {
                enabled: true
            }
        });

    }

    function getNodeData(data) {
        var networkNodes = [];
        data.forEach(function(elem, index, array) {
            networkNodes.push({
                id: elem.id,
                label: elem.id,
                x: elem.x,
                y: elem.y
            });
        });

        return new vis.DataSet(networkNodes);
    }

    function getNodeById(data, id) {

        for (var n = 0; n < data.length; n++) {
            if (data[n].id == id) { // double equals since id can be numeric or string
                return data[n];
            }
        };

        throw 'Can not find id \'' + id + '\' in data';
    }

    function getEdgeData(data) {
        var networkEdges = [];

        data.forEach(function(node) {
            // add the connection
            node.connections.forEach(function(connId, cIndex, conns) {
                networkEdges.push({
                    from: node.id,
                    to: connId
                });
                let cNode = getNodeById(data, connId);

                var elementConnections = cNode.connections;

                // remove the connection from the other node to prevent duplicate connections
                var duplicateIndex = elementConnections.findIndex(function(connection) {
                    return connection == node.id; // double equals since id can be numeric or string
                });


                if (duplicateIndex != -1) {
                    elementConnections.splice(duplicateIndex, 1);
                };
            });
        });

        return new vis.DataSet(networkEdges);
    }

    function objectToArray(obj) {
        return Object.keys(obj).map(function(key) {
            obj[key].id = key;

            return obj[key];
        });
    }

    function resizeExportArea() {
        exportArea.style.height = (1 + exportArea.scrollHeight) + "px";

    }

    init();
}



//recoger datos para meterlos en una tabla dinamica

function tabledinamic(data) {

    var num = document.getElementById("t2").rows.length - 1;

    var x = document.createElement("tr");

    var a = document.createElement("td");
    var anode = document.createTextNode(num + '.');
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createTextNode(data);

    a.appendChild(anode);
    x.appendChild(a);
    document.getElementById("t2").appendChild(x);

}

//vovler a usar la funcion de la tabla dinamica
function tabledinamic2(data2) {
    var num = document.getElementById("t3").rows.length;

    var x = document.createElement("tr");

    var a = document.createElement("td");
    var anode = document.createTextNode(num + '.');
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createTextNode(data2);

    a.appendChild(anode);
    x.appendChild(a);
    document.getElementById("t3").appendChild(x);

}