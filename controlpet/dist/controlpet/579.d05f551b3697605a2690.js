(self.webpackChunkcontrolpet=self.webpackChunkcontrolpet||[]).push([[579],{6579:(t,e,r)=>{"use strict";r.r(e),r.d(e,{VeterinarioModule:()=>f});var n=r(1116),o=r(2006),s=r(5366);let a=(()=>{class t{constructor(){this.baseUrl="https://rickandmortyapi.com/api"}obtener(t){return fetch(this.baseUrl+t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=r(1041),c=r(3070),u=r(9550),l=r(4369);function p(t,e){if(1&t&&(s.TgZ(0,"p"),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.name,"\n")}}const h=[{path:"",component:(()=>{class t{constructor(t){this.obt=t,this.nombre="Juanito",this.hoy=Date.now(),this.lista=[]}ngOnInit(){this.listarPersonas()}guardar(t){t.preventDefault()}listarPersonas(){this.obt.obtener("/character").then(t=>t.json()).then(t=>{console.log(t),this.lista=t.results}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-veterinario"]],decls:18,vars:9,consts:[["action","","role","form",3,"submit"],["matInput","","placeholder","Ex. Pizza","type","text","required","","name","nombre",3,"ngModel","ngModelChange"],["mat-raised-button","","type","submit"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.TgZ(0,"p"),s._uU(1,"veterinario works!"),s.qZA(),s.TgZ(2,"h2"),s._uU(3),s.ALo(4,"uppercase"),s.qZA(),s.TgZ(5,"h3"),s._uU(6),s.ALo(7,"date"),s.qZA(),s.TgZ(8,"h1"),s._uU(9,"formulario"),s.qZA(),s.TgZ(10,"form",0),s.NdJ("submit",function(t){return e.guardar(t)}),s.TgZ(11,"mat-form-field"),s.TgZ(12,"mat-label"),s._uU(13,"Nombre"),s.qZA(),s.TgZ(14,"input",1),s.NdJ("ngModelChange",function(t){return e.nombre=t}),s.qZA(),s.qZA(),s.TgZ(15,"button",2),s._uU(16,"Guardar"),s.qZA(),s.qZA(),s.YNc(17,p,2,1,"p",3)),2&t&&(s.xp6(3),s.Oqu(s.lcZ(4,4,e.nombre)),s.xp6(3),s.Oqu(s.xi3(7,6,e.hoy,"short")),s.xp6(8),s.Q6J("ngModel",e.nombre),s.xp6(3),s.Q6J("ngForOf",e.lista))},directives:[i._Y,i.JL,i.F,c.KE,c.hX,u.Nt,i.Fj,i.Q7,i.JJ,i.On,l.lW,n.sg],pipes:[n.gd,n.uU],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(h)],o.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,m,u.c,l.ot,i.u5]]}),t})()}}]);