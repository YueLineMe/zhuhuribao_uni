require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=s(n(0)),u=s(n(15));function s(e){return e&&e.__esModule?e:{default:e}}new o.default(u.default).$mount()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),u=n.n(o),s=n(18),r=!1;var i=function(e){r||n(16)},a=n(1)(u.a,s.a,i,null,null);a.options.__file="E:\\HBuilder-test\\newZhiHuDemo\\pages\\newsInfo\\newsInfo.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] newsInfo.vue: functional components are not supported with templates, they should use render functions."),t.default=a.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{body:[]}},methods:{createLink:function(e){}},onLoad:function(t){var n=this;e.request({url:"http://news-at.zhihu.com/api/4/news/"+t.id,success:function(e){n.body=e.data.body},fail:function(){},complete:function(){}})}}}).call(t,n(2).default)},function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("view",{attrs:{id:"newInfo"},domProps:{innerHTML:this._s(this.body)}})])};o._withStripped=!0;var u={render:o,staticRenderFns:[]};t.a=u}],[14]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/newsInfo/newsInfo.js.map