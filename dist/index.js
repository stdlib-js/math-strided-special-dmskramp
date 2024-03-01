"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=n(function(C,v){
var l=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-ramp/dist');function _(e,r,a,i,s,t,u){return l(e,r,a,i,s,t,u,R)}v.exports=_
});var d=n(function(D,q){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-ramp/dist');function b(e,r,a,i,s,t,u,f,j,x){return E(e,r,a,i,s,t,u,f,j,x,O)}q.exports=b
});var k=n(function(F,c){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),h=d();g(o,"ndarray",h);c.exports=o
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=k(),m,y=z(w(__dirname,"./native.js"));y instanceof Error?m=A:m=y;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
