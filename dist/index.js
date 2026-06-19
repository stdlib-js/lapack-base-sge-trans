"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var R=l(function(L,S){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(a,r,v,u,s,f,n,e,i,t){var q,g,p,y,j,m,c,x,b,o,w;for(q=z([e,i]),q?(o=a,w=r,g=u,p=s-o*u,y=i,j=e-o*i):(o=r,w=a,g=s,p=u-o*s,y=e,j=i-o*e),m=f,c=t,b=0;b<w;b++){for(x=0;x<o;x++)n[c]=v[m],m+=g,c+=y;m+=p,c+=j}return n}S.exports=B
});var h=l(function(N,_){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(a,r,v,u,s,f,n){var e,i,t,q;if(!G(a))throw new TypeError(I('1zNFx',a));return H(a)?(e=1,i=s,t=1,q=n):(e=s,i=1,t=n,q=1),J(r,v,u,e,i,0,f,t,q,0)}_.exports=K
});var F=l(function(D,C){
var P=R();function Q(a,r,v,u,s,f,n,e,i,t){return P(a,r,v,u,s,f,n,e,i,t)}C.exports=Q
});var V=l(function(A,T){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=h(),W=F();U(M,"ndarray",W);T.exports=M
});var X=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=V(),E,k=Y(X(__dirname,"./native.js"));Z(k)?E=$:E=k;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
