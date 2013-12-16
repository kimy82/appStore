define(["Ti/_","Ti/_/has","Ti/_/lang"],function(t,e,i){function n(t,e,i){var n,r=e-10;for(c(t.arg,"String")||(t.arg=""+t.arg);r>t.arg.length;)t.arg=t.rightJustify?t.arg+i:i+t.arg;n=e-t.arg.length,t.arg=t.rightJustify?t.arg+i.substring(0,n):i.substring(0,n)+t.arg}function r(t,e){n(t,i.val(e,t.precision),_)}function o(t,e){n(t,i.val(e,t.minWidth),f)}function a(t){t.maxWidth>=0&&t.arg.length>t.maxWidth?t.arg.substring(0,t.maxWidth):t.zeroPad?r(t,t.minWidth):o(t)}function s(t){var e=parseInt(t.arg);isFinite(e)||(l(!c(t.arg,"Number"),"Format argument '"+t.arg+"' not an integer; parseInt returned "+e),e=0),0>e&&(t.isUnsigned||10!=t.base)&&(e=4294967295+e+1),0>e?(t.arg=(-e).toString(t.base),r(t),t.arg="-"+t.arg):(t.arg=e.toString(t.base),e||t.precision?r(t):t.arg="",t.sign&&(t.arg=t.sign+t.arg)),16===t.base&&(t.alternative&&(t.arg="0x"+t.arg),t.arg=t.toUpper?t.arg.toUpperCase():t.arg.toLowerCase()),8===t.base&&t.alternative&&"0"!=t.arg.charAt(0)&&(t.arg="0"+t.arg)}function u(t){var e=parseFloat(t.arg);switch(isFinite(e)||(l(!c(t.arg,"Number"),"Format argument '"+t.arg+"' not a float; parseFloat returned "+e),e=0),t.specifier){case"e":t.arg=e.toExponential(t.precision);break;case"f":t.arg=e.toFixed(t.precision);break;case"g":t.arg=1e-4>Math.abs(e)?e.toExponential(t.precision>0?t.precision-1:t.precision):e.toPrecision(t.precision),t.alternative||(t.arg=t.arg.replace(/(\..*[^0])0*/,"$1"),t.arg=t.arg.replace(/\.0*e/,"e").replace(/\.0$/,""));break;default:throw Error("Unexpected double notation '"+t.doubleNotation+"'")}t.arg=t.arg.replace(/e\+(\d)$/,"e+0$1").replace(/e\-(\d)$/,"e-0$1"),h&&(t.arg=t.arg.replace(/^\./,"0.")),t.alternative&&(t.arg=t.arg.replace(/^(\d+)$/,"$1."),t.arg=t.arg.replace(/^(\d+)e/,"$1.e")),e>=0&&t.sign&&(t.arg=t.sign+t.arg),t.arg=t.toUpper?t.arg.toUpperCase():t.arg.toLowerCase()}var l=t.assert,c=require.is,d=require.mix,h=e("opera"),_="0000000000",f="          ",g={b:{base:2,isInt:1},o:{base:8,isInt:1},x:{base:16,isInt:1},X:{extend:["x"],toUpper:1},d:{base:10,isInt:1},i:{extend:["d"]},u:{extend:["d"],isUnsigned:1},c:{setArg:function(t){if(!isNaN(t.arg)){var e=parseInt(t.arg);l(0>e||e>127,"Invalid character code passed to %c in sprintf"),t.arg=isNaN(e)?""+e:String.fromCharCode(e)}}},s:{setMaxWidth:function(t){t.maxWidth="."===t.period?t.precision:-1}},e:{isDouble:1},E:{extend:["e"],toUpper:1},f:{isDouble:1},F:{extend:["f"]},g:{isDouble:1},G:{extend:["g"],toUpper:1}};return String.format=function(t){for(var e,n,r,o,_=i.toArray(arguments),f=/\%(?:\(([\w_]+)\)|([1-9]\d*)\$)?([0 +\-\#]*)(\*|\d+)?(\.)?(\*|\d+)?[hlL]?([\%scdeEfFgGiouxX])/g,p=[],m=0,T=0,v=0,b="",y=["mapping","intmapping","flags","_minWidth","period","_precision","specifier"];n=f.exec(t);){if(o=t.slice(T,f.lastIndex-n[0].length),o.length&&p.push(o),h){for(r=n.slice(0);r.length<n.length;)r.push(null);n=r}e={},n.slice(1).concat(p.length).map(function(t,i){y[i]&&(e[y[i]]=t)}),p.push(e),e[0]&&m++,T=f.lastIndex}return o=t.slice(T),o.length&&p.push(o),_.shift(),l(!m||_.length,"Format has no mapped arguments"),p.forEach(function(e){var i,n,r,o={},h=g[e.specifier];if(c(e,"String"))b+=e;else{if(m?l(void 0===_[e.mapping],"Missing key "+e.mapping):(e.intmapping&&(v=parseInt(e.intmapping)-1),l(_.length>v,"Got "+_.length+" format arguments, insufficient for '"+t+"'")),e.arg=_[m?e.mapping:v++],!e.compiled){for(d(e,{compiled:1,sign:"",zeroPad:0,rightJustify:0,alternative:0,minWidth:0|e._minWidth,maxWidth:-1,toUpper:0,isUnsigned:0,isInt:0,isDouble:0,precision:"."===e.period?0|e._precision:1}),i=e.flags,n=i.length;n--;)switch(o[r=i.charAt(n)]=1,r){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"0":e.zeroPad=!o["-"];break;case"-":e.rightJustify=1,e.zeroPad=0;break;case"#":e.alternative=1;break;default:throw Error("Bad formatting flag '"+r+"'")}l(void 0!==h,"Unexpected specifier '"+e.specifier+"'"),h.extend&&(d(h,g[h.extend]),delete h.extend),d(e,h)}c(e.setArg,"Function")&&e.setArg(e),c(e.setMaxWidth,"Function")&&e.setMaxWidth(e),"*"===e._minWidth&&(l(m,"* width not supported in mapped formats"),l(isNaN(e.minWidth=parseInt(_[v++])),"The argument for * width at position "+v+" is not a number in "+this._format),0>e.minWidth&&(e.rightJustify=1,e.minWidth=-e.minWidth)),"*"===e._precision&&"."===e.period&&(l(m,"* precision not supported in mapped formats"),l(isNaN(e.precision=parseInt(_[v++])),"The argument for * precision at position "+v+" is not a number in "+this._format),0>e.precision&&(e.precision=1,e.period="")),e.isInt?("."===e.period&&(e.zeroPad=0),s(e)):e.isDouble&&("."!==e.period&&(e.precision=6),u(e)),a(e),b+=""+e.arg}}),b},{capitalize:function(t){return t=t||"",t.substring(0,1).toUpperCase()+t.substring(1)},trim:String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}}});