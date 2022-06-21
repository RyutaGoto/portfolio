exports.ids=[2],exports.modules={40:function(t,o,e){var content=e(53);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=e(8).default;t.exports.__inject__=function(t){d("46c5fcd7",content,!0,t)}},51:function(t,o,e){t.exports=e.p+"img/b16cd11.png"},52:function(t,o,e){"use strict";e.r(o);var d=e(40),n=e.n(d);for(var c in d)"default"!==c&&function(t){e.d(o,t,(function(){return d[t]}))}(c);o.default=n.a},53:function(t,o,e){(o=e(7)(!1)).push([t.i,"@media screen and (max-width:700px){.container[data-v-05c423f4]{display:flex;justify-content:center;position:relative;width:100vw;height:100vh}.fadein[data-v-05c423f4]{opacity:1}.fadein[data-v-05c423f4],.fadeout[data-v-05c423f4]{filter:brightness(80%);transition:opacity 1s;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.fadeout[data-v-05c423f4]{opacity:0}.slideshow[data-v-05c423f4]{position:absolute;left:0}.symbol[data-v-05c423f4]{display:flex;flex-direction:column;align-items:center;position:absolute;top:30%;width:80%;height:auto}.symbol .logo[data-v-05c423f4]{margin-bottom:16px;width:50%;height:auto;-o-object-fit:cover;object-fit:cover}.symbol .title[data-v-05c423f4]{text-align:center;font-weight:400;font-size:28px;color:#fff;text-shadow:0 3px 4px #222}.link[data-v-05c423f4]{position:absolute;top:80%}.link a[data-v-05c423f4]{color:#fff;font-weight:400;font-size:26px;text-shadow:0 3px 4px #222;padding-bottom:.1px;text-decoration:none;border-bottom:3px solid #fff;box-shadow:0 6px 6px -2px #999}}@media screen and (min-width:701px){.container[data-v-05c423f4]{display:flex;justify-content:center;position:relative;width:100vw;height:100vh}.container .background-filter[data-v-05c423f4]{background-color:#999}.fadein[data-v-05c423f4]{opacity:1}.fadein[data-v-05c423f4],.fadeout[data-v-05c423f4]{filter:brightness(80%);transition:opacity 1s;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.fadeout[data-v-05c423f4]{opacity:0}.slideshow[data-v-05c423f4]{position:absolute;left:0}.symbol[data-v-05c423f4]{display:flex;flex-direction:column;align-items:center;position:absolute;top:25%;width:80%;height:auto}.symbol .logo[data-v-05c423f4]{margin-bottom:32px;width:200px;height:auto;-o-object-fit:cover;object-fit:cover}.symbol .title[data-v-05c423f4]{text-align:center;font-weight:500;font-size:28px;color:#fff;text-shadow:0 3px 4px #222}.link[data-v-05c423f4]{position:absolute;top:80%}.link a[data-v-05c423f4]{font-weight:400;font-size:40px;text-shadow:0 3px 4px #222;padding:0 16px .1px;text-decoration:none;box-shadow:0 6px 6px -3px #999;transition:all .3s}.link a[data-v-05c423f4],.link a[data-v-05c423f4]:hover{color:#fff;border-bottom:3px solid #fff}.link a[data-v-05c423f4]:hover{text-shadow:0 4px 4px #317033;box-shadow:0 7px 6px -3px #317033}}",""]),t.exports=o},57:function(t,o,e){"use strict";e.r(o);var d={components:{},head:()=>({title:"RyutaGoto`s Portfolio",titleTemplate:""}),data:()=>({index:0}),mounted(){const t=document.getElementsByClassName("slideshow");this.slideshow(t),setInterval(()=>{this.index=this.index<t.length-1?this.index+1:0,this.slideshow(t)},3e3)},methods:{slideshow(t){const o=t[this.index],e=t[this.index-1]?t[this.index-1]:t[t.length-1];o.classList.add("fadein"),o.classList.remove("fadeout"),e.classList.remove("fadein"),e.classList.add("fadeout")}}},n=e(1);var component=Object(n.a)(d,(function(){var t=this,o=t.$createElement,d=t._self._c||o;return d("div",[t._ssrNode('<div class="nav" data-v-05c423f4>',"</div>",[t._ssrNode('<div id="nav-drawer" data-v-05c423f4>',"</div>",[t._ssrNode('<input type="checkbox" id="nav-input" class="nav-unshown" data-v-05c423f4><label for="nav-input" id="nav-open" data-v-05c423f4><span data-v-05c423f4></span><span data-v-05c423f4></span><span data-v-05c423f4></span></label><label for="nav-input" id="nav-close" class="nav-unshown" data-v-05c423f4></label>'),t._ssrNode('<div id="nav-content" data-v-05c423f4>',"</div>",[d("nuxt-link",{attrs:{to:"/",id:"nav-item"}},[t._v("top")]),d("nuxt-link",{attrs:{to:"/works",id:"nav-item"}},[t._v("works")]),d("nuxt-link",{attrs:{to:"/about",id:"nav-item"}},[t._v("about")])],1)],2)]),t._ssrNode('<div class="container" data-v-05c423f4>',"</div>",[t._ssrNode('<div id="app" data-v-05c423f4><p class="background-filter" data-v-05c423f4><img src="/img/moss_01.jpg" class="background slideshow" data-v-05c423f4><img src="/img/moss_02.jpg" class="background slideshow fadeout" data-v-05c423f4><img src="/img/moss_03.jpg" class="background slideshow fadeout" data-v-05c423f4><img src="/img/moss_04.jpg" class="background slideshow fadeout" data-v-05c423f4></p></div><div class="symbol" data-v-05c423f4><img'+t._ssrAttr("src",e(51))+' class="logo" data-v-05c423f4><h1 class="title" data-v-05c423f4>RyutaGoto\'s Portfolio</h1></div>'),t._ssrNode('<div class="link" data-v-05c423f4>',"</div>",[d("nuxt-link",{attrs:{to:"/works"}},[t._v("view works")])],1)],2)])}),[],!1,(function(t){var o=e(52);o.__inject__&&o.__inject__(t)}),"05c423f4","7b495888");o.default=component.exports}};