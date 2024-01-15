"use strict";(self.webpackChunkHow_To_Mix=self.webpackChunkHow_To_Mix||[]).push([[834],{1834:(A,f,s)=>{s.r(f),s.d(f,{CocktailsModule:()=>U});var a=s(6814),g=s(4087),m=s(5592),C=s(4664),h=s(4605),r=s(9881),t=s(9212),u=s(801);function Z(i,d){if(1&i&&(t.TgZ(0,"tr")(1,"td",10),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&i){const n=d.$implicit;t.xp6(),t.MGl("routerLink","/ingredients/details/",n.ingredientName,""),t.xp6(),t.Oqu(n.ingredientName),t.xp6(2),t.Oqu(n.ingredientMeasure)}}function O(i,d){if(1&i&&(t.ynx(0),t.TgZ(1,"h2",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"div",5)(7,"table",6)(8,"thead",7)(9,"tr")(10,"th",8),t._uU(11,"Ingredient"),t.qZA(),t.TgZ(12,"th",8),t._uU(13,"Measure"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,Z,5,3,"tr",9),t.qZA()()()(),t.TgZ(16,"h3"),t._uU(17,"Instructions"),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA(),t.BQk()),2&i){const n=d.ngIf;t.xp6(2),t.Oqu(n.strDrink),t.xp6(3),t.Q6J("src",n.strDrinkThumb,t.LSH),t.xp6(10),t.Q6J("ngForOf",n.ingredientList),t.xp6(4),t.Oqu(n.strInstructions)}}let M=(()=>{class i{constructor(n,e){this.store=n,this.route=e,this.cocktailDetails$=new m.y}ngOnInit(){this.route.params.pipe((0,C.w)(n=>(this.store.dispatch(r.U9({id:n.id})),this.cocktailDetails$=this.store.select(h.bT)))).subscribe()}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(u.yh),t.Y36(g.gz))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cocktail-details"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cocktail-header"],[1,"row","my-4"],[1,"col-5"],["alt","Cocktail image",1,"cocktail-image",3,"src"],[1,"col-7"],[1,"table"],[1,"ingredient-table__header"],["scope","col"],[4,"ngFor","ngForOf"],[1,"ingredient__name",3,"routerLink"]],template:function(e,o){1&e&&(t.YNc(0,O,20,4,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.cocktailDetails$))},dependencies:[a.sg,a.O5,g.rH,a.Ov],styles:[".cocktail-image[_ngcontent-%COMP%]{width:100%;border-radius:15px}.cocktail-header[_ngcontent-%COMP%]{font-weight:500}.ingredient__name[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}.ingredient-table__header[_ngcontent-%COMP%]{border-bottom:2px solid black;font-weight:500}"]})}return i})(),y=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["htm-cocktail-card"]],inputs:{cocktailDetails:"cocktailDetails"},standalone:!0,features:[t.jDz],decls:5,vars:3,consts:[[1,"card-container",3,"routerLink"],["alt","Ingredient image",3,"src"],[1,"info"],[1,"name"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3),t._uU(4),t.qZA()()()),2&e&&(t.MGl("routerLink","/cocktails/details/",o.cocktailDetails.idDrink,""),t.xp6(),t.Q6J("src",o.cocktailDetails.strDrinkThumb,t.LSH),t.xp6(3),t.Oqu(o.cocktailDetails.strDrink))},dependencies:[g.rH],styles:[".card-container[_ngcontent-%COMP%]{border-radius:.375rem;position:relative;box-shadow:#0000001a 0 4px 12px;cursor:pointer;background-color:#ececec;transition:.3s;padding:20px 0}.info[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;padding:10px;color:#ececec;background-color:#32523c;opacity:.7;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem;transition:.3s}.card-container[_ngcontent-%COMP%]:hover{border:1px solid #32523c;transform:scale(1.05);transition:.3s}.card-container[_ngcontent-%COMP%]:hover > .info[_ngcontent-%COMP%]{opacity:1;transition:.3s}"]})}return i})();function $(i,d){if(1&i&&(t.TgZ(0,"div",2),t._UZ(1,"htm-cocktail-card",3),t.qZA()),2&i){const n=d.$implicit;t.xp6(),t.Q6J("cocktailDetails",n)}}function x(i,d){if(1&i&&(t.TgZ(0,"div",2),t._UZ(1,"htm-cocktail-card",3),t.qZA()),2&i){const n=d.$implicit;t.xp6(),t.Q6J("cocktailDetails",n)}}const D=[{path:"",pathMatch:"full",redirectTo:"all"},{path:"all",component:(()=>{class i{constructor(n){this.store=n,this.cocktailList$=new m.y}ngOnInit(){this.cocktailList$=this.store.select(h.EG),this.store.dispatch(r.Gd({firstLetter:"a"}))}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(u.yh))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cocktail-list"]],decls:3,vars:3,consts:[[1,"row"],["class","col-3 mb-2",4,"ngFor","ngForOf"],[1,"col-3","mb-2"],[3,"cocktailDetails"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,$,2,1,"div",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(),t.Q6J("ngForOf",t.lcZ(2,1,o.cocktailList$)))},dependencies:[a.sg,y,a.Ov]})}return i})()},{path:"details/:id",component:M},{path:"by-ingredient/:ingredient",component:(()=>{class i{constructor(n,e){this.route=n,this.store=e,this.cocktailListByIngredient$=new m.y}ngOnInit(){this.route.params.pipe((0,C.w)(n=>(this.store.dispatch(r.M1({ingredientName:n.ingredient})),this.cocktailListByIngredient$=this.store.select(h.e3)))).subscribe()}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(g.gz),t.Y36(u.yh))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cocktails-by-ingredient"]],decls:3,vars:3,consts:[[1,"row"],["class","col-3 mb-2",4,"ngFor","ngForOf"],[1,"col-3","mb-2"],[3,"cocktailDetails"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,x,2,1,"div",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(),t.Q6J("ngForOf",t.lcZ(2,1,o.cocktailListByIngredient$)))},dependencies:[a.sg,y,a.Ov],styles:["h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}.like[_ngcontent-%COMP%]{position:absolute;top:0;right:-10px}.like[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}"]})}return i})()}];let b=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(D),g.Bz]})}return i})();var l=s(7483),k=s(1631),p=s(7398),F=s(1474);let I=(()=>{class i{constructor(n){this.http=n}getCocktailListByFirstLetter$(n){return this.http.get("/api/json/v1/1/search.php",{params:{f:n}}).pipe((0,p.U)(e=>e.drinks))}getCocktailListByIngredient$(n){return this.http.get("/api/json/v1/1/filter.php",{params:{i:n}}).pipe((0,p.U)(e=>e.drinks))}getCocktailDetails$(n){return this.http.get("/api/json/v1/1/lookup.php",{params:{i:n}}).pipe((0,p.U)(e=>e.drinks[0]),(0,p.U)(e=>{const o=[];for(let c=1;c<=15;c++){const v=e[`strIngredient${c}`],L=e[`strMeasure${c}`];v&&L&&o.push({ingredientName:v,ingredientMeasure:L}),delete e[`strIngredient${c}`],delete e[`strMeasure${c}`]}return{...e,ingredientList:o}}))}static#t=this.\u0275fac=function(e){return new(e||i)(t.LFG(F.eN))};static#i=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),B=(()=>{class i{constructor(n,e){this.actions$=n,this.cocktailDB=e,this.LoadCocktailListByFirstLetter$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(r.Gd),(0,k.z)(o=>this.cocktailDB.getCocktailListByFirstLetter$(o.firstLetter).pipe((0,p.U)(c=>r.a8({cocktailList:c})))))),this.LoadCocktailListByIngredient$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(r.M1),(0,k.z)(o=>this.cocktailDB.getCocktailListByIngredient$(o.ingredientName).pipe((0,p.U)(c=>r.$y({cocktailList:c})))))),this.loadCocktailDetails$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(r.U9),(0,k.z)(o=>this.cocktailDB.getCocktailDetails$(o.id).pipe((0,p.U)(c=>r.Jk({cocktailDetails:c}))))))}static#t=this.\u0275fac=function(e){return new(e||i)(t.LFG(l.eX),t.LFG(I))};static#i=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac})}return i})(),U=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[a.ez,b,u.Aw.forFeature("cocktails",h.YQ),l.sQ.forFeature([B])]})}return i})()}}]);