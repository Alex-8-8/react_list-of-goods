(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),l=n(1),c=n(2),i=n(4),u=n(3),h=n(5),g=(n(14),n(6)),d=function(e){var t=e.handleReverse,n=e.handleAlphabetSort,a=e.handleLengthSort,r=e.handleReset;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:t},"Reverse"),o.a.createElement("button",{type:"button",onClick:n},"Sort alphabetically"),o.a.createElement("button",{type:"button",onClick:r},"reset"),o.a.createElement("button",{type:"button",onClick:a},"Sort by length"))},p=function(e){var t=e.stringLength,n=e.selectBtn;return o.a.createElement("select",{onChange:n,value:t},new Array(10).fill(1).map((function(e,t){return o.a.createElement("option",{key:e,value:t+1},t+1)})))},m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={goods:Object(g.a)(n.props.goodList),minLength:1,originalGoods:Object(g.a)(n.props.goodList)},n.reversed=function(){n.setState((function(e){return{goods:e.goods.reverse()}}))},n.sortAlph=function(){n.setState((function(e){return{goods:e.goods.sort()}}))},n.sortLength=function(){n.setState((function(e){return{goods:e.goods.sort((function(e,t){return e.length-t.length}))}}))},n.reset=function(){n.setState((function(e){return{goods:e.originalGoods,minLength:1}}))},n.selectFunc=function(e){var t=e.target;n.setState((function(e){return{minLength:t.value,goods:e.originalGoods.filter((function(e){return e.length>=t.value}))}}))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.minLength;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{handleReverse:this.reversed,handleAlphabetSort:this.sortAlph,handleLengthSort:this.sortLength,handleReset:this.reset}),o.a.createElement(p,{stringLength:n,selectBtn:this.selectFunc}),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e},e)}))))}}]),t}(o.a.Component),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoaded:!1},n.showClick=function(){n.setState({isLoaded:!0})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isLoaded;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),e?o.a.createElement(m,{goodList:f}):o.a.createElement("button",{type:"button",onClick:this.showClick},"Start"))}}]),t}(a.Component);s.a.render(o.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ce928c3a.chunk.js.map