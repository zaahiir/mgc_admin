import './polyfills.server.mjs';
var s=class{constructor(){this.localUrl="https://mastergolfclub.com/apis/",this.stagingUrl="https://mastergolfclub.com/apis/",this.productionUrl="https://mastergolfclub.com/apis/"}getUrl(t){return t==1?this.localUrl:t==2?this.stagingUrl:this.productionUrl}},l=3;export{s as a,l as b};
