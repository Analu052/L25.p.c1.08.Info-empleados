/*INFO EMPLEADOS 
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es el monto promedio que paga por cada tipo de personal. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150: 
Monto total pagado a obreros: $270 
Promedio pagado a 3 obreros: $90 
Monto total pagado a administrativos: $350 
Promedio pagado a 2 administrativos: $175 */ 

import Cl_personal from "./Cl_personal.js"
import Cl_empresa from "./Cl_empresa.js"

let personal1=new Cl_personal("Juan",100,"obrero");
let personal2=new Cl_personal("Ana",120,"obrero");    
let personal3=new Cl_personal("Lin",200,"administrativo");   
let personal4=new Cl_personal("Mary",50,"obrero");    
let personal5=new Cl_personal("Carlos",150,"administrativo");

let empresa=new Cl_empresa();
empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);    
empresa.procesarPersonal(personal3);   
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida=document.getElementById("salida");

salida.innerHTML=`Resultados:
<br>Monto total pagado a obreros: $${empresa.montoTO()}
<br>Promedio pagado a 3 obreros: $${empresa.prom_p3O()}
<br>Monto total pagado a administrativos: $${empresa.montoTA()}
<br>Promedio pagado a 2 administrativos: $${empresa.prom_p2A()}`;
