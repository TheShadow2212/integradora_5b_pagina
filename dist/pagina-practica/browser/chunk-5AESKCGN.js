import{a as H}from"./chunk-VJMNFQ5N.js";import{a as T,b as U,c as p,d as L,e as N,f as q,g as v,i as z,j as V,k as j,l as D,q as G,r as A}from"./chunk-GJWLTGAK.js";import{d as O,e as R}from"./chunk-P4DI4OJ4.js";import{Fa as g,Ha as s,Ia as x,Ja as i,Ka as n,La as u,Oa as M,Pa as h,Qa as f,S as _,Ua as o,V as C,W as y,Wa as S,Z as F,ab as E,ga as w,sb as I,tb as P,ua as a,va as b,xb as k}from"./chunk-YH6CFDQH.js";var Y=(()=>{let r=class r{constructor(m){this.http=m}register(m,l,t){return this.http.post("http://18.222.122.162/api/user/register",{name:m,email:l,password:t})}};r.\u0275fac=function(l){return new(l||r)(w(k))},r.\u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function J(e,r){e&1&&u(0,"app-spinner")}function K(e,r){e&1&&(i(0,"div",18),o(1," El nombre es requerido "),n())}function Q(e,r){e&1&&(i(0,"div",18),o(1," El nombre debe tener al menos 3 caracteres "),n())}function W(e,r){e&1&&(i(0,"div",18),o(1," El nombre debe tener menos de 15 caracteres "),n())}function Z(e,r){e&1&&(i(0,"div",18),o(1," El email es requerido "),n())}function $(e,r){e&1&&(i(0,"div",18),o(1," Por favor, ingrese un email v\xE1lido "),n())}function ee(e,r){e&1&&(i(0,"div",18),o(1," La contrase\xF1a es requerida "),n())}function te(e,r){e&1&&(i(0,"div",18),o(1," La contrase\xF1a debe tener al menos 8 caracteres "),n())}function re(e,r){e&1&&(i(0,"div",18),o(1," La contrase\xF1a debe tener al menos 12 caracteres "),n())}function ne(e,r){if(e&1&&(i(0,"button",19),o(1,"Crear cuenta"),n()),e&2){let c=f();s("disabled",!c.registerForm.valid)}}function ie(e,r){if(e&1&&(i(0,"div",20),o(1," El correo ya est\xE1 registrado "),n()),e&2){let c=f();x("message-success",c.success)("message-error",!c.success)}}function oe(e,r){if(e&1&&(i(0,"div",20),o(1),n()),e&2){let c=f();x("message-success",c.success)("message-error",!c.success),a(),S(" ",c.successMessage," ")}}function se(e,r){if(e&1){let c=M();i(0,"button",21),h("click",function(l){C(c);let t=f();return y(t.goLogin(l))}),o(1,"Iniciar sesi\xF3n"),n()}}var ve=(()=>{let r=class r{constructor(m,l){this.router=m,this.userService=l,this.errorMessage="",this.successMessage="",this.success=!1,this.loading=!1,this.showPassword=new v(!1),this.registerForm=new q({name:new v("",[p.required,p.minLength(3),p.maxLength(15)]),email:new v("",[p.required,p.email]),password:new v("",[p.required,p.minLength(8),p.maxLength(12)])})}register(){this.loading=!0;let m=this.registerForm.value.name,l=this.registerForm.value.email,t=this.registerForm.value.password;m&&l&&t&&(this.errorMessage="",this.userService.register(m,l,t).subscribe({next:d=>{this.loading=!1,this.errorMessage="",this.success=!0,console.log(d),this.successMessage="Se ha enviado un correo de verificaci\xF3n a tu correo. Verifica tu cuenta para poder iniciar sesi\xF3n"},error:d=>{this.loading=!1,this.success=!1,this.errorMessage=d.error.message,console.log(d.error.message)}}))}goLogin(m){m.preventDefault(),this.router.navigate(["/login"])}};r.\u0275fac=function(l){return new(l||r)(b(O),b(Y))},r.\u0275cmp=_({type:r,selectors:[["app-register-user"]],standalone:!0,features:[E],decls:37,vars:16,consts:[[4,"ngIf"],[1,"login-container"],[3,"formGroup","ngSubmit"],[1,"title"],[1,"form-group"],["for","name"],["id","name","placeholder","Ingrese su nombre","formControlName","name"],["class","error",4,"ngIf"],["for","email"],["type","email","id","email","placeholder","Ingrese su email","formControlName","email"],["for","password"],["id","password","placeholder","Password","formControlName","password",3,"type"],[1,"check"],["type","checkbox","id","showPassword",3,"formControl"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],["class","message",3,"message-success","message-error",4,"ngIf"],["class","btn btn-primary","style","margin-top: 20px;",3,"click",4,"ngIf"],["routerLink","/login"],[1,"error"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"message"],[1,"btn","btn-primary",2,"margin-top","20px",3,"click"]],template:function(l,t){l&1&&(g(0,J,1,0,"app-spinner",0),i(1,"div",1)(2,"form",2),h("ngSubmit",function(){return t.register()}),i(3,"h2",3),o(4,"Crear cuenta"),n(),i(5,"div",4)(6,"label",5),o(7,"Nombre"),n(),u(8,"input",6),g(9,K,2,0,"div",7)(10,Q,2,0,"div",7)(11,W,2,0,"div",7),n(),i(12,"div",4)(13,"label",8),o(14,"Email"),n(),u(15,"input",9),g(16,Z,2,0,"div",7)(17,$,2,0,"div",7),n(),i(18,"div",4)(19,"label",10),o(20,"Password"),n(),u(21,"input",11),i(22,"div",12)(23,"label"),u(24,"input",13),o(25," Mostrar contrase\xF1a"),n()(),g(26,ee,2,0,"div",7)(27,te,2,0,"div",7)(28,re,2,0,"div",7),n(),g(29,ne,2,1,"button",14)(30,ie,2,4,"div",15)(31,oe,2,5,"div",15)(32,se,2,0,"button",16),i(33,"p"),o(34,"Ya tienes una cuenta? "),i(35,"a",17),o(36,"Inicia sesi\xF3n"),n()()()()),l&2&&(s("ngIf",t.loading),a(2),s("formGroup",t.registerForm),a(7),s("ngIf",(t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.required)&&t.registerForm.controls.name.touched),a(),s("ngIf",t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.minlength),a(),s("ngIf",t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.maxlength),a(5),s("ngIf",(t.registerForm.controls.email.errors==null?null:t.registerForm.controls.email.errors.required)&&t.registerForm.controls.email.touched),a(),s("ngIf",t.registerForm.controls.email.errors==null?null:t.registerForm.controls.email.errors.email),a(4),s("type",t.showPassword.value?"text":"password"),a(3),s("formControl",t.showPassword),a(2),s("ngIf",(t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.required)&&t.registerForm.controls.password.touched),a(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.minlength),a(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.maxlength),a(),s("ngIf",!t.successMessage),a(),s("ngIf",t.errorMessage),a(),s("ngIf",t.successMessage),a(),s("ngIf",t.successMessage))},dependencies:[A,z,U,T,L,N,V,j,D,P,I,R,G,H],styles:['[_nghost-%COMP%]{font-family:Open Sans,sans-serif;font-weight:100;font-size:17px;color:#000}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;height:100vh;background-image:linear-gradient(#80808080,#80808080),url("./media/background-form-H4T5BY3X.png");background-repeat:no-repeat;background-size:cover;background-color:#f0f0f0}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:400;margin-top:90px;margin-bottom:20px;text-align:center}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:27%;padding:20px;border-top-left-radius:20px;border-bottom-left-radius:20px;background-color:#fff;box-shadow:0 0 5px #00000026}.message-success[_ngcontent-%COMP%]{text-align:center;margin-top:20px;background-color:#4caf508b;color:#fff;padding:10px;border-radius:5px;margin-left:auto;margin-right:auto}.message-error[_ngcontent-%COMP%]{text-align:center;margin-top:20px;background-color:#f443368b;color:#fff;padding:10px;border-radius:5px;margin-left:auto;margin-right:auto}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}input[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:5px;margin-top:5px}button[_ngcontent-%COMP%]{padding:10px;border:none;border-radius:5px;background-color:#007bff;color:#fff;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.error[_ngcontent-%COMP%]{color:red;margin-top:4px;margin-left:1px;font-size:12px}.verification-container[_ngcontent-%COMP%]{margin-top:10px}.verification-label[_ngcontent-%COMP%]{display:block;text-align:center;color:green;font-weight:400;font-size:16px;margin-bottom:10px}.verification-input[_ngcontent-%COMP%]{margin-bottom:3px}.error-message[_ngcontent-%COMP%]{color:red;font-size:15px}p[_ngcontent-%COMP%]{margin-top:10px;font-size:12px;text-align:center}.verification-code-label[_ngcontent-%COMP%]{font-weight:400;font-size:16px}.check[_ngcontent-%COMP%]{display:flex;justify-content:end;margin-top:5px}']});let e=r;return e})();export{ve as RegisterUserComponent};