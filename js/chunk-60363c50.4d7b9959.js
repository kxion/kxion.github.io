(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60363c50"],{"448e":function(t,a,e){},c6b9:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article",attrs:{id:"showdata"}},[e("div",{staticClass:"artitle"},[t._v(t._s(t.article.title))]),e("div",{staticClass:"artime"},[t._v(t._s(t.article.created_time))]),e("div",{staticClass:"arcontent"},[e("p",{domProps:{innerHTML:t._s(t.article.content)}}),e("div",{staticClass:"arcopyright"},[e("p",[t._v("版权属于：ShaHeXi.Work （除特别注明外）")]),e("p",[t._v("本文链接："+t._s(t.myurl))]),e("p",[t._v("本站文章采用 知识共享署名4.0 国际许可协议 进行许可，请在转载时注明出处及本声明！")])])])])},n=[],c=e("2423"),s={name:"ShowArticle",mounted:function(){c["c"]()},updated:function(){c["c"]()},data:function(){return{article:{},myurl:window.location.href}},methods:{load:function(){var t=this;c["a"](this.$route.params.articleID).then(function(a){t.article=a.data})}},components:{},beforeMount:function(){this.load()}},r=s,o=(e("eb21"),e("2877")),l=Object(o["a"])(r,i,n,!1,null,null,null);a["default"]=l.exports},eb21:function(t,a,e){"use strict";var i=e("448e"),n=e.n(i);n.a}}]);