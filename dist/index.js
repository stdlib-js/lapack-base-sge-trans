"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var R=l(function(L,S){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(a,r,q,v,s,f,u,e,i,n){var o,g,p,y,j,m,c,x,b,t,w;for(o=z([e,i]),o?(t=a,w=r,g=v,p=s-t*v,y=i,j=e-t*i):(t=r,w=a,g=s,p=v-t*s,y=e,j=i-t*e),m=f,c=n,b=0;b<w;b++){for(x=0;x<t;x++)u[c]=q[m],m+=g,c+=y;m+=p,c+=j}return u}S.exports=B
});var h=l(function(N,_){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(a,r,q,v,s,f,u){var e,i,n,o;if(!G(a))throw new TypeError(I('1zNFx',a));return H(a)?(e=1,i=s,n=1,o=u):(e=s,i=1,n=u,o=1),J(r,q,v,e,i,0,f,n,o,0)}_.exports=K
});var F=l(function(D,C){
var P=R();function Q(a,r,q,v,s,f,u,e,i,n){return P(a,r,q,v,s,f,u,e,i,n)}C.exports=Q
});var V=l(function(A,T){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=h(),W=F();U(M,"ndarray",W);T.exports=M
});var X=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=V(),E,k=Y(X(__dirname,"./native.js"));Z(k)?E=$:E=k;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
