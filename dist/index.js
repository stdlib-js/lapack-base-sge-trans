"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var R=l(function(d,S){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist');function G(a,r,q,v,i,f,u,e,s,n){var o,g,p,y,j,m,c,x,b,t,w;for(o=C([e,s]),o?(t=a,w=r,g=v,p=i-t*v,y=s,j=e-t*s):(t=r,w=a,g=i,p=v-t*i,y=e,j=s-t*e),m=f,c=n,b=0;b<w;b++){for(x=0;x<t;x++)u[c]=q[m],m+=g,c+=y;m+=p,c+=j}return u}S.exports=G
});var h=l(function(L,_){
var H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(a,r,q,v,i,f,u){var e,s,n,o;if(!H(a))throw new TypeError(I('1zNFx',a));return a==="column-major"?(e=1,s=i,n=1,o=u):(e=i,s=1,n=u,o=1),J(r,q,v,e,s,0,f,n,o,0)}_.exports=K
});var T=l(function(N,F){
var M=R();function P(a,r,q,v,i,f,u,e,s,n){return M(a,r,q,v,i,f,u,e,s,n)}F.exports=P
});var z=l(function(D,k){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=h(),U=T();Q(V,"ndarray",U);k.exports=V
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=z(),E,B=X(W(__dirname,"./native.js"));Y(B)?E=Z:E=B;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
