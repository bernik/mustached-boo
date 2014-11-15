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
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
mustached_boo.app.Foo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k5084,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__5086 = (((k5084 instanceof cljs.core.Keyword))?k5084.fqn:null);switch (G__5086) {
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
return cljs.core.get.call(null,self__.__extmap,k5084,else__4239__auto__);

}
});
mustached_boo.app.Foo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#mustached_boo.app.Foo{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bar","bar",-1386246584),self__.bar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"baz","baz",-1134894686),self__.baz],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
mustached_boo.app.Foo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
mustached_boo.app.Foo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
mustached_boo.app.Foo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
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
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"baz","baz",-1134894686),null,new cljs.core.Keyword(null,"bar","bar",-1386246584),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
mustached_boo.app.Foo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__5083){var self__ = this;
var this__4243__auto____$1 = this;var pred__5087 = cljs.core.keyword_identical_QMARK_;var expr__5088 = k__4244__auto__;if(cljs.core.truth_(pred__5087.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584),expr__5088)))
{return (new mustached_boo.app.Foo(G__5083,self__.baz,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5087.call(null,new cljs.core.Keyword(null,"baz","baz",-1134894686),expr__5088)))
{return (new mustached_boo.app.Foo(self__.bar,G__5083,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5087.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__5088)))
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,G__5083,self__.__meta,self__.__extmap,null));
} else
{return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__5083),null));
}
}
}
});
mustached_boo.app.Foo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bar","bar",-1386246584),self__.bar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"baz","baz",-1134894686),self__.baz],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
mustached_boo.app.Foo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__5083){var self__ = this;
var this__4235__auto____$1 = this;return (new mustached_boo.app.Foo(self__.bar,self__.baz,self__.name,G__5083,self__.__extmap,self__.__hash));
});
mustached_boo.app.Foo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
mustached_boo.app.Foo.cljs$lang$type = true;
mustached_boo.app.Foo.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mustached_boo.app/Foo");
});
mustached_boo.app.Foo.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"mustached_boo.app/Foo");
});
mustached_boo.app.__GT_Foo = (function __GT_Foo(bar,baz,name){return (new mustached_boo.app.Foo(bar,baz,name));
});
mustached_boo.app.map__GT_Foo = (function map__GT_Foo(G__5085){return (new mustached_boo.app.Foo(new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(G__5085),new cljs.core.Keyword(null,"baz","baz",-1134894686).cljs$core$IFn$_invoke$arity$1(G__5085),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__5085),null,cljs.core.dissoc.call(null,G__5085,new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"baz","baz",-1134894686),new cljs.core.Keyword(null,"name","name",1843675177))));
});
mustached_boo.app.main = (function main(){var f1 = (new mustached_boo.app.Foo("bar1","baz1","f1"));var f2 = (new mustached_boo.app.Foo("bar2","baz2","f2"));var m = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"i am map"], null);console.log(f1);
console.log(f2);
return console.log(m);
});
mustached_boo.app.main.call(null);

//# sourceMappingURL=app.js.map