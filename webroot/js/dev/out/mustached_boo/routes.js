// Compiled by ClojureScript 0.0-2371
goog.provide('mustached_boo.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__6034__auto___7107 = (function (params__6035__auto__){if(cljs.core.map_QMARK_.call(null,params__6035__auto__))
{var map__7105 = params__6035__auto__;var map__7105__$1 = ((cljs.core.seq_QMARK_.call(null,map__7105))?cljs.core.apply.call(null,cljs.core.hash_map,map__7105):map__7105);return console.log("home");
} else
{if(cljs.core.vector_QMARK_.call(null,params__6035__auto__))
{var vec__7106 = params__6035__auto__;return console.log("home");
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__6034__auto___7107);
var action__6034__auto___7110 = (function (params__6035__auto__){if(cljs.core.map_QMARK_.call(null,params__6035__auto__))
{var map__7108 = params__6035__auto__;var map__7108__$1 = ((cljs.core.seq_QMARK_.call(null,map__7108))?cljs.core.apply.call(null,cljs.core.hash_map,map__7108):map__7108);var query_params = cljs.core.get.call(null,map__7108__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var name = cljs.core.get.call(null,map__7108__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(("name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(!(cljs.core.empty_QMARK_.call(null,query_params)))
{return console.log(cljs.core.pr_str.call(null,query_params));
} else
{return null;
}
} else
{if(cljs.core.vector_QMARK_.call(null,params__6035__auto__))
{var vec__7109 = params__6035__auto__;var name = cljs.core.nth.call(null,vec__7109,(0),null);var query_params = cljs.core.nth.call(null,vec__7109,(1),null);console.log(("name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(!(cljs.core.empty_QMARK_.call(null,query_params)))
{return console.log(cljs.core.pr_str.call(null,query_params));
} else
{return null;
}
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/foo/:name",action__6034__auto___7110);
var action__6034__auto___7113 = (function (params__6035__auto__){if(cljs.core.map_QMARK_.call(null,params__6035__auto__))
{var map__7111 = params__6035__auto__;var map__7111__$1 = ((cljs.core.seq_QMARK_.call(null,map__7111))?cljs.core.apply.call(null,cljs.core.hash_map,map__7111):map__7111);return console.log("bar");
} else
{if(cljs.core.vector_QMARK_.call(null,params__6035__auto__))
{var vec__7112 = params__6035__auto__;return console.log("bar");
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bar",action__6034__auto___7113);
var action__6034__auto___7116 = (function (params__6035__auto__){if(cljs.core.map_QMARK_.call(null,params__6035__auto__))
{var map__7114 = params__6035__auto__;var map__7114__$1 = ((cljs.core.seq_QMARK_.call(null,map__7114))?cljs.core.apply.call(null,cljs.core.hash_map,map__7114):map__7114);return console.log("all");
} else
{if(cljs.core.vector_QMARK_.call(null,params__6035__auto__))
{var vec__7115 = params__6035__auto__;return console.log("all");
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__6034__auto___7116);
var h_7119 = (new goog.History());goog.events.listen(h_7119,goog.history.EventType.NAVIGATE,((function (h_7119){
return (function (p1__7117_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__7117_SHARP_.token);
});})(h_7119))
);
var G__7118_7120 = h_7119;G__7118_7120.setEnabled(true);

//# sourceMappingURL=routes.js.map