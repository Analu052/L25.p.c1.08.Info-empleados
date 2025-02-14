export default class Cl_empresa {
    constructor(){
        this.acum_Mto=0;
        this.acum_Mta=0;
    }
    procesarPersonal(per){
      if(per.getTipoP()=="obrero"){
        this.acum_Mto+=per.getMonto();
      }
      if(per.getTipoP()=="administrativo"){
        this.acum_Mta+=per.getMonto();
      }
    }
    prom_p3O(){
        return this.acum_Mto/3;}
    prom_p2A(){
        return this.acum_Mta/2;}
    montoTO(){
        return this.acum_Mto;
    }
    montoTA(){
        return this.acum_Mta;
    }
}