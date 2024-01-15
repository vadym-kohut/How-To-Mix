"use strict";(self.webpackChunkHow_To_Mix=self.webpackChunkHow_To_Mix||[]).push([[706],{7706:($,m,r)=>{r.r(m),r.d(m,{IngredientsModule:()=>w});var c=r(6814),d=r(4087),u=r(5592),v=r(4664),l=r(6729),o=r(266),t=r(9212),p=r(801);function I(n,h){if(1&n&&(t.TgZ(0,"div")(1,"h2",1),t._uU(2),t.TgZ(3,"button",2),t._uU(4),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"div",6)(9,"p",7),t._uU(10),t.qZA()()()()),2&n){const e=h.ngIf;t.xp6(2),t.hij("",e.strIngredient," "),t.xp6(),t.MGl("routerLink","/cocktails/by-ingredient/",e.strIngredient,""),t.xp6(),t.hij("Cocktails with ",e.strIngredient,""),t.xp6(3),t.MGl("src","https://www.thecocktaildb.com/images/ingredients/",e.strIngredient,"-Medium.png",t.LSH),t.xp6(3),t.Oqu(e.strDescription)}}let y=(()=>{class n{constructor(e,i){this.store=e,this.route=i,this.ingredientDetails$=new u.y}ngOnInit(){this.route.params.pipe((0,v.w)(e=>(this.store.dispatch(o.oV({ingredientName:e.name})),this.ingredientDetails$=this.store.select(l.X)))).subscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p.yh),t.Y36(d.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ingredient-details"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"mb-4","ingredient-header"],[1,"btn","btn-outline-dark",3,"routerLink"],[1,"row"],[1,"col-5"],["alt","Ingredient image",1,"ingredient-image",3,"src"],[1,"col-7"],[1,"card-text"]],template:function(i,s){1&i&&(t.YNc(0,I,11,5,"div",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,s.ingredientDetails$))},dependencies:[c.O5,d.rH,c.Ov],styles:["button[_ngcontent-%COMP%]{float:right}.ingredient-header[_ngcontent-%COMP%]{font-weight:500}.ingredient-image[_ngcontent-%COMP%]{width:100%}"]})}return n})(),L=(()=>{class n{constructor(){this.ingredientName=""}static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ingredient-card"]],inputs:{ingredientName:"ingredientName"},decls:5,vars:2,consts:[[1,"card-container"],["alt","Ingredient image",3,"src"],[1,"info"],[1,"name"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3),t._uU(4),t.qZA()()()),2&i&&(t.xp6(),t.MGl("src","https://www.thecocktaildb.com/images/ingredients/",s.ingredientName,"-Medium.png",t.LSH),t.xp6(3),t.Oqu(s.ingredientName))},styles:[".card-container[_ngcontent-%COMP%]{border-radius:.375rem;position:relative;box-shadow:#0000001a 0 4px 12px;cursor:pointer;background-color:#ececec;transition:.3s;padding:20px 0}.info[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;padding:10px;color:#ececec;background-color:#32523c;opacity:.7;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem;transition:.3s}.card-container[_ngcontent-%COMP%]:hover{border:1px solid #32523c;transform:scale(1.05);transition:.3s}.card-container[_ngcontent-%COMP%]:hover > .info[_ngcontent-%COMP%]{opacity:1;transition:.3s}"]})}return n})();function C(n,h){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"app-ingredient-card",3),t.qZA()),2&n){const e=h.$implicit;t.xp6(),t.MGl("routerLink","/ingredients/details/",e.strIngredient1,""),t.Q6J("ingredientName",e.strIngredient1)}}const M=[{path:"",pathMatch:"full",redirectTo:"all"},{path:"all",component:(()=>{class n{constructor(e){this.store=e,this.allIngredientsList$=new u.y}ngOnInit(){this.allIngredientsList$=this.store.select(l.AE),this.store.dispatch(o.kF())}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p.yh))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ingredient-list"]],decls:3,vars:3,consts:[[1,"row"],["class","col-3 mb-2",4,"ngFor","ngForOf"],[1,"col-3","mb-2"],[3,"routerLink","ingredientName"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.YNc(1,C,2,2,"div",1),t.ALo(2,"async"),t.qZA()),2&i&&(t.xp6(),t.Q6J("ngForOf",t.lcZ(2,1,s.allIngredientsList$)))},dependencies:[c.sg,d.rH,L,c.Ov]})}return n})()},{path:"details/:name",component:y}];let Z=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]})}return n})();var a=r(7483),f=r(1631),g=r(7398),x=r(1474);let O=(()=>{class n{constructor(e){this.http=e}getIngredientList$(){return this.http.get("/api/json/v1/1/list.php",{params:{i:"list"}}).pipe((0,g.U)(e=>e.drinks))}getIngredientDetails$(e){return this.http.get("/api/json/v1/1/search.php",{params:{i:e}}).pipe((0,g.U)(i=>i.ingredients[0]))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(x.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),F=(()=>{class n{constructor(e,i){this.actions$=e,this.ingredientDB=i,this.LoadIngredientList$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)(o.kF),(0,f.z)(()=>this.ingredientDB.getIngredientList$().pipe((0,g.U)(s=>o.gY({ingredientList:s})))))),this.LoadIngredientDetails$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)(o.oV),(0,f.z)(s=>this.ingredientDB.getIngredientDetails$(s.ingredientName).pipe((0,g.U)(T=>o.ul({ingredientDetails:T}))))))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(a.eX),t.LFG(O))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})(),w=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez,Z,p.Aw.forFeature("ingredients",l.M0),a.sQ.forFeature([F])]})}return n})()}}]);