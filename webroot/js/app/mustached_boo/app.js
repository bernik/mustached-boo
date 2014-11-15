// Compiled by ClojureScript 0.0-2371
goog.provide('mustached_boo.app');
goog.require('cljs.core');

/**
* @constructor
* @param {*} bar
* @param {*} baz
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
mustached_boo.app.Foo = (function (bar,baz,name,__meta,__extmap){
this.bar = bar;
this.baz = baz;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
mustached_boo.app.Foo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4236__auto____$1,k__4237__auto__,null);
});
mustached_boo.app.Foo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k9452,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__9454 = (((k9452 instanceof cljs.core.Keyword))?k9452.fqn:null);switch (G__9454) {
case "name":
return self__.name;

break;
case "baz":
return self__.baz;

break;
case "bar":
return self__.bar;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9452,else__4239__auto__);

}
});
mustached_boo.app.Foo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer(writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4251__auto__,pr_pair__4253__auto__,"#mustached_boo.app.Foo{",", ","}",opts__4252__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$15,self__.bar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$16,self__.baz],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null))], null),self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
mustached_boo.app.Foo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
mustached_boo.app.Foo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap(this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
mustached_boo.app.Foo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map(this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
mustached_boo.app.Foo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$16,null,cljs.core.constant$keyword$15,null,cljs.core.constant$keyword$17,null], null), null),k__4246__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4246__auto__)),null));
}
});
mustached_boo.app.Foo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__9451){var self__ = this;
var this__4243__auto____$1 = this;var pred__9455 = cljs.core.keyword_identical_QMARK_;var expr__9456 = k__4244__auto__;if(cljs.core.truth_((function (){var G__9458 = cljs.core.constant$keyword$15;var G__9459 = expr__9456;return (pred__9455.cljs$core$IFn$_invoke$arity$2 ? pred__9455.cljs$core$IFn$_invoke$arity$2(G__9458,G__9459) : pred__9455.call(null,G__9458,G__9459));
})()))
{return (new mustached_boo.app.Foo(G__9451,self__.baz,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__9460 = cljs.core.constant$keyword$16;var G__9461 = expr__9456;return (pred__9455.cljs$core$IFn$_invoke$arity$2 ? pred__9455.cljs$core$IFn$_invoke$arity$2(G__9460,G__9461) : pred__9455.call(null,G__9460,G__9461));
})()))
{return (new mustached_boo.app.Foo(self__.bar,G__9451,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__9462 = cljs.core.constant$keyword$17;var G__9463 = expr__9456;return (pred__9455.cljs$core$IFn$_invoke$arity$2 ? pred__9455.cljs$core$IFn$_invoke$arity$2(G__9462,G__9463) : pred__9455.call(null,G__9462,G__9463));
})()))
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,G__9451,self__.__meta,self__.__extmap,null));
} else
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4244__auto__,G__9451),null));
}
}
}
});
mustached_boo.app.Foo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$15,self__.bar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$16,self__.baz],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null))], null),self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__9451){var self__ = this;
var this__4235__auto____$1 = this;return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,G__9451,self__.__extmap,self__.__hash));
});
mustached_boo.app.Foo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4242__auto__))
{return cljs.core._assoc(this__4241__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4242__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
mustached_boo.app.Foo.cljs$lang$type = true;
mustached_boo.app.Foo.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"mustached_boo.app/Foo");
});
mustached_boo.app.Foo.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write(writer__4271__auto__,"mustached_boo.app/Foo");
});
mustached_boo.app.__GT_Foo = (function __GT_Foo(bar,baz,name){return (new mustached_boo.app.Foo(bar,baz,name));
});
mustached_boo.app.map__GT_Foo = (function map__GT_Foo(G__9453){return (new mustached_boo.app.Foo(cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(G__9453),cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(G__9453),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__9453),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9453,cljs.core.constant$keyword$15,cljs.core.array_seq([cljs.core.constant$keyword$16,cljs.core.constant$keyword$17], 0))));
});
mustached_boo.app.main = (function main(){var f1 = (new mustached_boo.app.Foo("bar1","baz1","f1"));var f2 = (new mustached_boo.app.Foo("bar2","baz2","f2"));console.log(f1);
return console.log(f2);
});
mustached_boo.app.main();
