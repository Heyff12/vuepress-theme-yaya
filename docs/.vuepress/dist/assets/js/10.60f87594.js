(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){"use strict";var a=n(161);n.n(a).a},165:function(t,e,n){"use strict";var a=n(73),r={name:"YaLineContainer",data:function(){return{color:""}},mounted:function(){this.color=Object(a.a)(!1)}},s=(n(163),n(9)),c=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"containerOuter"},[e("section",{staticClass:"containerInner",style:{borderColor:this.color}},[e("section",{staticClass:"bodyPadding color",style:{backgroundColor:this.color}},[e("section",{staticClass:"containerHeader"},[this._t("header")],2)]),this._v(" "),e("section",{staticClass:"bodyPadding"},[e("section",{staticClass:"containerBody"},[this._t("default")],2)])])])}),[],!1,null,"3373dcf0",null);e.a=c.exports},166:function(t,e,n){"use strict";var a=n(162);n.n(a).a},167:function(t,e,n){"use strict";var a={name:"YaPageHeader",components:{SearchBox:n(170).a},props:{current:{type:String,required:!1,default:""},dynamicData:{type:Array,required:!1,default:function(){return[]}},showSearch:{type:Boolean,required:!1,default:!0},showBack:{type:Boolean,required:!1,default:!1}}},r=(n(166),n(9)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pageHeader"},[n("section",{class:["pageHeaderLeft",{show:t.dynamicData.length||t.current||t.showBack}]},[t.showBack?n("p",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}},[n("i",{staticClass:"iconfont iconfanhui"}),t._v("返回\n    ")]):t._e(),t._v(" "),n("ul",[t._l(t.dynamicData,(function(e,a){return n("li",{key:a},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])})),t._v(" "),t.current?[n("li",{staticClass:"current"},[t._v(t._s(t.current))])]:t._e()],2)]),t._v(" "),t.showSearch?n("section",{staticClass:"headerSearch"},[n("SearchBox")],1):t._e()])}),[],!1,null,"2689be98",null);e.a=s.exports},200:function(t,e,n){},330:function(t,e,n){"use strict";var a=n(200);n.n(a).a},345:function(t,e,n){"use strict";n.r(e);var a=n(167),r={name:"About",components:{YaLineContainer:n(165).a,YaPageHeader:a.a}},s=(n(330),n(9)),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("YaLineContainer",{scopedSlots:t._u([{key:"header",fn:function(){return[n("YaPageHeader",{attrs:{current:"关于我",showSearch:!1}})]},proxy:!0}])},[t._v(" "),n("section",{staticClass:"about"},[n("p",[t._v("\n      公元纪年--1988年1月30号，在家人的喜悦和期待中来到了地球^_^，开启了我的人生，书写着我的故事……小眼睛、小嘴巴，\n      还有那被上帝珍藏了一半的”半、截、眉“O(∩_∩)O~\n    ")]),t._v(" "),n("p",[t._v("\n      记得小时候的翻老房子、爬树、翻土丘、趟水塘、跳秸秆堆……记得小时候的橡皮筋、石子、过山羊、纸面包……记得小时候的大大泡泡糖、\n      1角钱10个的硬糖、过家家、5角钱一对的耳环……\n    ")]),t._v(" "),n("p",[t._v("\n      时光如梭，就到了选择学校专业的十字路口。怕不足一本的成绩无法进入北京服装学院，放弃了我的最爱‘服装设计’；\n      鉴于叔叔说南方的哪些学校时间短，质量薄弱，放弃了‘新闻传媒’；屡屡舍弃最爱，索性选择了一窍不通还充满挑战的计算机专业——软件工程！\n      以583的凄凄惨惨分数进入四川理工学院，与一群智力精英为伍，开启了一个女屌丝的进化史……\n    ")]),t._v(" "),n("p",[t._v("\n      回想2011年的自荐信，现在读来，觉得自己挺傻挺天真！——“我的经验或许让您犹豫不决，但请相信我的干劲与努力将弥补这暂时的不足，\n      也许我不是最好的，但我绝对是最努力的。我相信：用心一定能赢得精彩！ ”！蓝海基业，一个奉献了四年青春的地方，\n      一个陪我度过了又一个社会大学的地方，我想，我不负你，也对得起那句稚嫩的豪语！\n    ")])])])}),[],!1,null,"74e9605e",null);e.default=c.exports}}]);