!function(){function a(a){var b=a.target||a.srcElement,c=-1!==location.href.indexOf("itemlist/list_bought_items")||-1!==location.href.indexOf("itemlist/listBoughtItems.htm");if(!c)return"";for(;b&&"TBODY"!==b.nodeName;)b=b.parentNode;return b.getAttribute("data-status")}var b=KISSY;parseFloat(b.version)>=1.4&&b.config({modules:{ajax:{alias:["io"]}}}),b.use("dom,event,cookie,ajax,ua",function(b,c,d,e,f,g){function h(){return b.unparam(location.search.replace(/^\?/,"")).id}function j(a){try{(new Image).src=a}catch(b){}}c=c||b.DOM,d=d||b.Event,e=e||b.Cookie,f=f||b.IO||b.Ajax,g=g||b.UA;var k,l=!1,g=b.UA,m=window,n=document,o=encodeURIComponent,p=decodeURIComponent,q=b.now(),r=unescape((e.get("_nk_")||e.get("tracknick")||e.get("l")&&e.get("l").split("::")[0]||"").replace(/\\u/g,"%u")),s=(h(),"x"),t=m.navigator.userAgent,u=/Windows NT 6.2/g.test(t),v=g.ie||/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(t),w=(t.indexOf("Edge")>-1,/tablet/i.test(t)),x=m.g_config||{},y="J_WangWang",z=0,A=function(){var a,b=location.hostname;return b.indexOf("tmall.com")>-1?(a="tmall.com",s="otherx"):b.indexOf("daily.tmall.net")>0?(a="daily.tmall.net",s="otherx"):a=b.indexOf("taobao.net")>0?"taobao.net":"taobao.com",a}(),B=/daily/i,C=!B.test(location.host),D=function(){return C?"taobao.com":"daily.taobao.net"}(),E=function(){return e.get("_l_g_")?!0:!1},F=6,G=6===(m.g_config||0).appId,H=location.protocol+"//amos.alicdn.com/getcid.aw?v=3&site=cntaobao&groupid=0&s=1&fromid=cntaobao"+r,I=location.protocol+"//amos.alicdn.com/muliuserstatus.aw?beginnum=0&site=cntaobao&charset=utf-8&uids=",J=location.protocol+"//amos.alicdn.com/getRealCid.aw?fromId=cntaobao"+o(r)+"&fromurl="+(location.hostname+location.pathname)+"&t="+e.get("t")+"&toId=",K="//log.mmstat.com/ww?cache="+q,L={SNS:"\u6211\u5728\u7ebf\uff0c\u548c\u6211\u804a\u804a\u5427~",DEFAULT:"\u70b9\u6b64\u53ef\u4ee5\u76f4\u63a5\u548c\u5356\u5bb6\u4ea4\u6d41\u9009\u597d\u7684\u5b9d\u8d1d\uff0c\u6216\u76f8\u4e92\u4ea4\u6d41\u7f51\u8d2d\u4f53\u9a8c\uff0c\u8fd8\u652f\u6301\u8bed\u97f3\u89c6\u9891\u5662\u3002"},M=["ie","firefox","chrome","safari","opera"],N=[1,2,10,8,12,12,12],O={addonIsOK:function(a){return location.href.indexOf("topen")>-1?(a&&a.call(null,!1),k=!1,!1):(b.isBoolean(k)?a&&a.call(null,k):this._checkWangWangInstalled(function(b){k=b,a&&a.call(null,k)}),a?void 0:k)},data:{},lightedUsers:[],init:function(){var a=this;c.addStyleSheet('.ww-light{overflow:hidden;}.ww-block{display:block;margin-top:3px;}.ww-inline{display:inline-block;vertical-align:text-bottom;}.ww-light a{background-image: url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");background-image: -webkit-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -moz-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -o-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -ms-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);text-decoration:none!important;width:20px;height:20px;zoom:1;}.ww-large a{width:67px;}a.ww-offline{background-position:0 -20px;}a.ww-mobile{background-position:0 -40px;}.ww-small .ww-online{background-position:-80px 0;}.ww-small .ww-offline{background-position:-80px -20px;}.ww-small .ww-mobile{background-position:-80px -40px;}.ww-static .ww-online{background-position:-110px 0;}.ww-static .ww-offline{background-position:-110px -20px;}.ww-static .ww-mobile{background-position:-110px -40px;}.ww-light a span{display:none;}'),a.light();for(var b=0,d=M.length;d>b;++b)if(g[M[b]]){z=M[b]+g[M[b]];break}},initStart:function(){var a=this;if(!G){var c=b.unparam(location.search.substring(1));("g_config"in m&&"appId"in m.g_config&&-1!=m.g_config.appId||"tstart"in c||"tdog"in c)&&b.ready(function(){var b=function(a,b){b=b||location.hostname;var c=".",d=b.split(c),e=d.length;return 2>=e?b:(a=a||1,a>e-2&&(a=e-2),d.slice(a).join(c))},c=n.getElementsByTagName("head")[0]||n.documentElement,d=(n.createElement("link"),n.createElement("script")),e=b(2),f=/daily/i,g=!f.test(location.host),h=g?"g.alicdn.com":"assets.daily.taobao.net/g",i=location.protocol+"//"+h+"/aliww/web.ww.im/0.1.2/scripts/adapter.js";"etao.com"!=e&&(d.src=i,c.insertBefore(d,c.firstChild),!a.addonIsOK()&&m.g_config.toolbar&&m.g_config.toolbar.delay&&parseInt(m.g_config.toolbar.delay)>3&&(m.g_config.toolbar.delay=3))})}},light:function(a){function d(a){g(z[a],x[a],A[a],function(){E++,D>E&&d(++a)})}function e(a){return v&&a.length>w}function g(a,d,e,g){m.online=[],f({dataType:"jsonp",url:I+a.join(";"),data:{},jsonp:"callback",success:function(a){var f=a.data;a.success&&(b.each(d,function(a,b){0==c.query("a",a).length&&h._lightToken(a,e[b],f[b])}),g&&g())}})}a=c.get(a)||n.body;var h=this,i=c.query("."+y,a),j=i.length;if(0!==j){var k,l,p,q=[],r=[];for(p=0;j>p;++p)l=h._getParamsFromData(i[p]),q.push(l),k=l.nick,r.push(o(k));var s,t,u=100,w=1800,x=[],z=[],A=[],B="",C=0,D=0;for(s=0;j>s;++s)(e(B+r[s])||s>=u||s===j-1)&&(t=s===j-1?j:s,z[D]=r.slice(C,t),x[D]=i.slice(C,t),A[D]=q.slice(C,t),B="",C=s,D++),B+=r[s]+";";d(0);var E=0}},_lightToken:function(g,i,j){var k=this,l=c.create('<a href="javascript: void(0);" target="_blank"></a>'),n=i.encode?p(i.nick):i.nick,q=i.from+n,r=i.item,t=i.items,v=i.portal,w=q;r&&(w+="-{"+r+"}"),k.data[w]={key:w,userName:n,userId:q,fromSite:i.from,status:N[j],itemId:r,itemsId:t,portalId:v},g.className="ww-light ww-"+i.icon,l.className="ww-"+i.display,1===j?(c.addClass(l,"ww-online"),l.title=L.DEFAULT,x.appId&&4==x.appId&&(l.title=L.SNS),l.innerHTML="<span>\u65fa\u65fa\u5728\u7ebf</span>"):4===j||5===j?(c.addClass(l,"ww-mobile"),l.innerHTML="<span>\u624b\u673a\u5728\u7ebf</span>"):(c.addClass(l,"ww-offline"),l.innerHTML="<span>\u65fa\u65fa\u79bb\u7ebf</span>"),l.href=H+"&uid="+n,d.on(l,"click",function(c){var d=b.unparam(e.get(s)),g=k.data[w];unescape((e.get("_nk_")||e.get("tracknick")||e.get("l")&&e.get("l").split("::")[0]||"").replace(/\\u/g,"%u"));if((k.addonIsOK()||d&&1==d.e)&&c.preventDefault(),!k.addonIsOK()&&(c.preventDefault(),k._isOtherHost()))return void(u?m.location="aliim:sendmsg?"+k._paramUserInfo(g,null,l):(alert("\u4f60\u6ca1\u6709\u5b89\u88c5\u963f\u91cc\u65fa\u65fa,\u8bf7\u4e0b\u8f7d\u963f\u91cc\u65fa\u65fa!"),window.open("//www.taobao.com/wangwang")));var i="";if(!g.dispatched&&4>j&&-1==g.userId.indexOf(":")){try{i=0===location.href.indexOf("//trade.taobao.com/")||-1!==location.href.indexOf("//list.taobao.com/")||0===location.href.indexOf("//list.tmall.com/search_product.htm")||0===location.href.indexOf("//s.taobao.com/")?"":"&clientX="+c.clientX+"&clientY="+c.clientY,(0===location.href.indexOf("//detail.taobao.com/")||0===location.href.indexOf("//item.taobao.com/"))&&(i+="&itemId="+r||h());var n=a(c);n&&(i+="&orderStatus="+n)}catch(q){}f.getScript(J+o(g.userId)+"&charset=utf-8"+i,function(){var a=p(m.realcid);a&&a!==g.userId&&(g.userName=a.substring(8),g.userId=a),g.dispatched=!0,k._openChatDialog(g,l)},"utf-8")}else k._openChatDialog(g,l)}),g.appendChild(l)},_setCookie:function(){e.set(s,b.param(cookieX),365,A,"/")},_directToTBLogin:function(a){var c=location,d=c.protocol+"//"+c.host+c.pathname,e=c.search,f=c.hash,g=c.href,h="wwlight",i="https://login."+D+"/member/login.jhtml?f=top";e=e?b.unparam(e.substring(1)):{},h in e&&delete e[h],a&&(e[h]=a),e=b.param(e),g=d+"?"+e+f,g=o(g),c.href=i+"&redirectURL="+g},_openTBLoginPopup:function(a){function e(a){c.css(a,"left",parseInt(c.viewportWidth()/2)-parseInt(p.offsetWidth/2)+"px"),c.css(a,"top",parseInt(c.viewportHeight()/2)-parseInt(p.offsetHeight/2)+(6===b.UA.ie?c.scrollTop():0)+"px")}var f,g=location,h=g.protocol+"//"+g.host+g.pathname,i=g.search,j=g.hash,k=g.href,l="wwlight",m=this,n=location.hostname.indexOf("taobao.com")>-1;i=i?b.unparam(i.substring(1)):{},l in i&&delete i[l],a&&(i[l]=a,m.isSearch()?(f=i.q,delete i.q,i[l]=a):i[l]=a),i=b.param(i),this.isSearch()&&f&&(i="q="+f+"&"+i),k=h+"?"+i+j;var g=location;c.addStyleSheet(".tstart-login{width:410px;height:300px;bottom:100px;left:200px;opacity:1;position:fixed;_position:absolute;z-index:100000000;background-color:#fff;padding:0;overflow:hidden;-moz-border-radius-bottomleft:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border:7px solid #BBB;}.tstart-login .hd{height:22px;line-height:22px;padding-left:8px;border-bottom:1px solid #D1D1D1;font-weight:bold;background-color:#fff;}.tstart-login .ft{background-color:#F5F5F5;}.tstart-login .ft .btn-close{color:#C9C9C9;font-family:Tahoma,sans;font-size:12px;font-weight:bold;position:absolute;right:8px;text-decoration:none;top:3px;}");var o='<div id="tstartLogin" class="tstart-login"><div class="hd"><h3></h3></div><div class="bd" style="padding: 0px; overflow: hidden;"><iframe width="410" height="270" frameborder="0" scrolling="no" id="frameContent" name="frameContent" ></iframe></div><div class="ft"><a class="btn-close" title="\u5173\u95ed\u6b64\u7a97\u53e3" href="javascript:void(0)">x</a></div></div>',p=c.get(".tstart-login");if(p)c.css(p,"display","block"),e(p);else{if(p=c.create(o),document.body.appendChild(p),e(p),d.on(c.get(".btn-close",p),"click",function(){c.css(p,"display","none")}),6===b.UA.ie?d.on(window,"scroll resize",function(){e(p)}):d.on(window,"scroll resize",function(){c.css(p,"left",parseInt(c.viewportWidth()/2)-parseInt(p.offsetWidth/2)+"px")}),n)var q="//www.taobao.com/go/act/share/loginsuccess.php";else var q="//www.daily.taobao.net/go/act/share/loginsuccess.php";var r="https://login."+D+"/member/login.jhtml?style=mini&full_redirect=false&redirect_url="+q,s=p.getElementsByTagName("iframe")[0];s.src=r,d.on(s,"load",function(){E()&&(location.href=k)})}},_isOtherHost:function(){var a=location.hostname,b=["tmall.net","tmall.com","taobao.com","daily.taobao.net"],c=b.length;for(i=0;i<c;i++)if(a.indexOf(b[i])>-1)return!1;return!0},isSearch:function(){var a,b=["search.taobao.com","sandbox.search.taobao.com","search8.taobao.com","search8.daily.taobao.net","s.taobao.com","list.mall.daily.taobao.net","list.mall.taobao.com","s8.taobao.com","list.tmall.com","list.daily.tmall.net"],c=b.length,d=location;for(a=0;c>a;a++)if(d.host.indexOf(b[a]>-1))return!0},_paramUserInfo:function(a,b,c){var d=a.userId||a.siteid+a.touid,e="";return b&&(d=o(d)),6!=F?"uid="+d.split("cntaobao")[1]+"&tositeid="+a.fromSite+"&status="+a.status+"&suid="+a.portalId:(c&&c.parentNode&&(e=c.parentNode.getAttribute("data-items")||""),"&touid="+d+"&siteid="+(a.fromSite||a.siteid)+"&status="+a.status+"&portalId="+(a.portalId||"")+"&gid="+(a.itemId||"")+"&itemsId="+e)},_openChatDialog:function(a,f){var h=this,i=1;if(h.userInfo=a,h.link=f,h.addonIsOK()){if(v)try{new ActiveXObject("AliIMX.WangWangX").ExecCmd("Aliim:sendmsg?"+h._paramUserInfo(a,!0,f))}catch(k){m.location="aliim:sendmsg?"+h._paramUserInfo(a,null,f)}else h._openChatDialogInUnIE(a,f);i=0}else if(l)if(g.firefox){var n=c.get("#J_WebWangWangPluginNotice");if(n)c.css(n,"display","block"),c.css("#J_WebWangWangPluginNoticeMask","display","block");else{var o='<div id="J_WebWangWangPluginNoticeMask" style="background-color:#000;opacity:.6;position:fixed;width:100%;height:100%;left:0;top:0;z-index:100000004"></div><div id="J_WebWangWangPluginNotice" class="webww-plugin-notice" style="background-color:#fff;position:fixed;width:400px;height:120px;z-index:100000005;text-align:center;margin-left:-200px;left:50%;top:50%;margin-top:-60px"><div class="webww-plugin-notice-content" style="padding:15px;line-height:80px">\u4eb2\uff0c\u60a8\u5f53\u524d\u6d4f\u89c8\u5668\u672a\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\uff0c<a href="//bangpai.taobao.com/group/thread/15625975-291119934.htm?spm=0.0.0.0.PBQheF" target="_blank">\u70b9\u6b64\u67e5\u770b\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\u6559\u7a0b</a></div><div class="webww-plugin-notice-footer" style="padding:10px;height:20px;background-color:#eaeaea;cursor:pointer">\u53d6\u6d88<div></div>';document.body.appendChild(c.create(o)),n=c.get("#J_WebWangWangPluginNotice"),d.on(n,"click",function(a){c.hasClass(a.target,"webww-plugin-notice-footer")&&(c.css(n,"display","none"),c.css("#J_WebWangWangPluginNoticeMask","display","none"))})}}else try{h._openChatDialogInUnIE(a,f)}catch(k){}else{if(!u)return void h._openWebWW();if(w)h._openDialogBySelectionDialog(a,f,2);else{var p=b.unparam(e.get(s)).c;p>1?h._openDialogBySelectionDialog(a,f,p):h._createSelectionDialog()}}j(K+"&uid="+r+"&tid="+a.userId+"&gid="+a.itemId+"&ver="+i+"&browse="+z+"&playform="+navigator.platform)},_openWebWW:function(){var a=this,c=a.userInfo,d=b.unparam(e.get(s));d&&1==d.e&&window.TDog&&TDog.EventCenter?(a._isOtherHost()||TDog.EventCenter.fire(TDog.EVENTS.CLICK_LIGHT_ICON,{userInfo:c}),j(K+"&uid="+r+"&tid="+c.userId+"&gid="+c.itemId+"&ver=2&browse="+z+"&playform="+navigator.platform)):a._directToTBLogin(c.key)},_openChatDialogInUnIE:function(a,b){var c=this;if(c.plugin){var d="function"==typeof c.plugin.NPWWVersion;if(g.webkit&&d&&c.numberify(c.plugin.NPWWVersion())<1.005)m.location="aliim:sendmsg?"+c._paramUserInfo(a,null,b);else try{var e="aliim:sendmsg?"+c._paramUserInfo(a,!0,b);c.plugin.SendCommand(e,1)}catch(f){m.location="aliim:sendmsg?"+c._paramUserInfo(a,null,b)}}else m.location="aliim:sendmsg?"+c._paramUserInfo(a,null,b)},_createSelectionDialog:function(){var a=this,f=b.unparam(e.get(s));if(a.selectionDialog)h=a.selectionDialog,h.style.display="block";else{c.addStyleSheet("#J_Windows8_Selection_Dialog{display:block;width:440px;height:270px;position:fixed;top: 50%;left:50%;margin:-134px 0 0 -220px;padding:0;z-index:100000001;}#J_Windows8_Selection_Dialog_Bg{width:100%;height:100%;background:#000;opacity:0.2;filter:alpha(opacity=20);position:fixed;left:0;top:0;z-index:100000000;}#J_Windows8_Selection_Dialog .win8-dialog-bg{display:block;width: 440px;height:270px;background:#000;opacity:0.2;filter:alpha(opacity=20);position:absolute;top:0;left:0;padding:0;margin:0;}#J_Windows8_Selection_Dialog .win8-dialog-con{display:block;margin:5px;width:390px;height:220px;background:#fff;position:absolute;top:0;left:0;font:14px/1.5 Microsoft YaHei;padding:20px;}#J_Windows8_Selection_Dialog h4{font-size:18px;font-weight:bold;padding:0;margin:0;color:#000;}#J_Windows8_Selection_Dialog ul{padding:15px 0 30px 20px;margin:10px 0 0 0;}#J_Windows8_Selection_Dialog li{padding:0 0 0 40px;margin:0;list-style:none;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 0 2px;height:30px;line-height:30px;font-size: 16px;color: #000;cursor:pointer;}#J_Windows8_Selection_Dialog li.win8-slt{background-position: 0 -45px;}#J_Windows8_Selection_Dialog li.win8-tip{background:none;cursor:default;font-size:12px;color:#666;line-height:16px;height:16px;margin-bottom:5px;}#J_Windows8_Selection_Dialog .win8-btn{font-size:14px;padding:30px 0 0 0;border-top:1px solid #ddd;}#J_Windows8_Selection_Dialog .win8-cb{display:block;float:left;margin:5px 50px 0 0;padding:0;}#J_Windows8_Selection_Dialog .win8-cb input{vertical-align:-1px;margin-right:5px;}#J_Windows8_Selection_Dialog .win8-btn a{display: block;float:left;width:96px;height:28px;background:#fff;border:2px solid #ddd;color:#737373;text-decoration:none;text-align:center;line-height:28px;font-size:16px;margin-right:15px;overflow:hidden;}#J_Windows8_Selection_Dialog .win8-btn a:hover{background:#00ade8;color:#fff;text-decoration:none;}#J_Windows8_Btn_Close{display:block;width:40px;height:40px;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 8px -113px;position:absolute;top:0;right:0;text-indent:-9999px;}#J_Windows8_Btn_Close:hover{background-position:8px -188px}");var g='<div><div id="J_Windows8_Selection_Dialog_Bg" class="win8-bg"></div><div id="J_Windows8_Selection_Dialog"><div class="win8-dialog-bg"></div><div class="win8-dialog-con"><h4>\u8bf7\u9009\u62e9\u9700\u8981\u6253\u5f00\u7684\u65fa\u65fa\uff1a</h4><ul><li class="win8-slt J_Windows8_selection_item" data-value="2">\u963f\u91cc\u65fa\u65fa for Windows 8</li><li class="win8-tip">\u5982\u679c\u672a\u5b89\u88c5\uff0c\u8bf7\u5148\u5728\u5e94\u7528\u5546\u5e97\u4e0b\u8f7d\u5b89\u88c5</li><li class="J_Windows8_selection_item" data-value="3">\u963f\u91cc\u65fa\u65fa\u7f51\u9875\u7248</li></ul><div class="win8-btn"><label class="win8-cb"><input type="checkbox" id="J_Window8_remember" />\u8bb0\u4f4f\u6211\u7684\u9009\u62e9</label><a href="javascript:;" title="\u786e\u5b9a" id="J_Windows8_Btn_Yes">\u786e\u5b9a</a><a href="javascript:;" title="\u53d6\u6d88" id="J_Windows8_Btn_No">\u53d6\u6d88</a></div><a href="javascript:;" title="\u5173\u95ed" id="J_Windows8_Btn_Close">\u5173\u95ed</a></div></div></div>',h=c.create(g);a.selectionDialog=h,n.body.appendChild(h),d.on(h,"click",function(d){var g=d.target;if("J_Windows8_Btn_Yes"===g.id){var i=c.attr(c.get(".win8-slt"),"data-value");c.get("#J_Window8_remember").checked?(f.c=parseInt(i),e.set(s,b.param(f),365,A,"/"),a._destorySelectionDialog()):h.style.display="none",a._openDialogBySelectionDialog(a.userInfo,a.link,i)}else"J_Windows8_Btn_No"===g.id||"J_Windows8_Btn_Close"===g.id?h.style.display="none":c.hasClass(g,"J_Windows8_selection_item")&&!c.hasClass("win8-slt")&&(c.addClass(g,"win8-slt"),c.removeClass(c.siblings(g),"win8-slt"))})}},_destorySelectionDialog:function(){var a=this;c.remove(a.selectionDialog),d.remove(a.selectionDialog,"click"),a.selectionDialog=null},_openDialogBySelectionDialog:function(a,b,c){var d=this;2==c?m.location.href="aliim:sendmsg?"+d._paramUserInfo(a,null,b):3==c&&d._openWebWW(a)},_checkWangWangInstalled:function(a){var d=this,f=!1,g=(b.unparam(e.get(s)),navigator.platform.indexOf("Mac")>-1?!0:!1);if(location.href.indexOf("topen")>-1)return f=!1,void(a&&a.call(null,f));if(g)return f=!0,void(a&&a.call(null,f));if(!f&&v)return f=d._checkWangWangVersion(),void(a&&a.call(null,f));var h=navigator.mimeTypes["application/ww-plugin"];if(h){var i=n.createElement("embed");if(i.setAttribute("type","application/ww-plugin"),c.css(i,"visibility","hidden"),c.css(i,"width",0),c.css(i,"height",0),n.body.appendChild(i),"function"==typeof i.NPWWVersion){var j=d.numberify(i.NPWWVersion());j>=1.003&&(f=!0)}else l=!0;return d.plugin=i,void(a&&a.call(null,f))}return this.localServer(function(b){b?a&&a.call(null,b):d.localServer(function(b){a&&a.call(null,b)},"https:"==location.protocol?"4813":"4812")}),f},localServer:function(a,b){var c=this;if(a)var d=setTimeout(function(){a.call(null,!1),c._log("ww.69.2")},1500);b=b||("https:"==location.protocol?"4013":"4012"),f({dataType:"jsonp",url:location.protocol+"//localhost.wwbizsrv.alibaba.com:"+b,success:function(b){d&&clearTimeout(d),a&&a.call(null,!0),c._log("ww.69.1")}})},numberify:function(a){var b=0;return parseFloat(a.replace(/\./g,function(){return 0===b++?".":""}))},_checkWangWangVersion:function(){var a,c=!0;b.unparam(e.get(s));try{a=new ActiveXObject("aliimx.wangwangx")}catch(d){try{a=new ActiveXObject("WangWangX.WangWangObj"),F=5}catch(d){c=!1}}finally{a=null}return c},_getParamsFromData:function(a){var b=c.attr(a,"data-encode")||!1,d=c.attr(a,"data-nick")||"";return b&&(d=p(d)),{nick:d,item:c.attr(a,"data-item")||(m.g_config||{}).itemId||"",items:c.attr(a,"data-items")||"",display:c.attr(a,"data-display")||"inline",icon:c.attr(a,"data-icon")||"large",from:c.attr(a,"data-from")||"cntaobao",portal:c.attr(a,"data-portal")||"",fromId:c.attr(a,"data-portal")||"",encode:o}},_log:function(a){j("//gm.mmstat.com/"+a+"?cache="+Math.floor(-8888888*Math.random()+9999999)+"&wwnick=cntaobao"+r)}};window.Light=O,b.ready(function(){O.addonIsOK(function(){O.initStart()}),O.init()})})}();