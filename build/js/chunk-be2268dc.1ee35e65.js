(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be2268dc"],{bb44:function(t,a,c){"use strict";c.r(a);var i=c("7a23");Object(i["x"])("data-v-fbe7ad78");var n={class:"review"},b=["src"],e={class:"option"},s=["onClick"],l=["onClick"];function d(t,a,c,d,o,f){return Object(i["u"])(),Object(i["f"])("div",n,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(o.list,(function(t,a){return Object(i["u"])(),Object(i["f"])("div",{class:"item",key:t.id},[Object(i["g"])("img",{src:t.photo_url},null,8,b),Object(i["g"])("p",null,Object(i["D"])(t.content),1),Object(i["g"])("div",e,[Object(i["g"])("div",{class:Object(i["p"])(t.passClick?"pass click":"pass"),onClick:function(c){return f.pass(t.id,a)}}," 通过 ",10,s),Object(i["g"])("div",{class:Object(i["p"])(t.faildClick?"faild click":"faild"),onClick:function(c){return f.faild(t.id,a)}}," 不通过 ",10,l)])])})),128))])}Object(i["v"])();c("4160"),c("159b");var o=c("af82"),f={data:function(){return{passClick:!1,faildClick:!1,list:[{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"},{content:"abababab",id:"111"}]}},methods:{pass:function(t,a){Object(o["h"])(t,"passed"),this.list[a].passClick=!0,this.list[a].faildClick=!1},faild:function(t,a){Object(o["h"])(t,"failed"),this.list[a].passClick=!1,this.list[a].faildClick=!0}},created:function(){var t=this;Object(o["f"])().then((function(a){var c=[];console.log(a.data.data),a.data.data.forEach((function(t){var a={};a.id=t.id,a.content=t.content,a.photo_url=t.photo_url,c.push(a),c.passClick=!1,c.faildClick=!1})),t.list=c}))}};c("fc5f");f.render=d,f.__scopeId="data-v-fbe7ad78";a["default"]=f},d7bf:function(t,a,c){},fc5f:function(t,a,c){"use strict";c("d7bf")}}]);