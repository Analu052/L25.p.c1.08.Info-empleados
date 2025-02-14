export default class Cl_personal {
    constructor(n,m,tP){
        this.nom=n;
        this.monto=m;
        this.tipoP=tP;
    }

     setNom(n){
         this.nom=n;  
     }
     getNom(){
         return this.nom;
     }

     setMonto(m){
        this.monto=m;
    }
    getMonto(){
        return this.monto;
    }

    setTipoP(tP){
        this.tipoP=tP;
    }
    getTipoP(){
        return this.tipoP;
    }
}   