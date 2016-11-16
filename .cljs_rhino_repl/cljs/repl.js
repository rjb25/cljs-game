// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9606_9620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9607_9621 = null;
var count__9608_9622 = (0);
var i__9609_9623 = (0);
while(true){
if((i__9609_9623 < count__9608_9622)){
var f_9624 = cljs.core._nth.call(null,chunk__9607_9621,i__9609_9623);
cljs.core.println.call(null,"  ",f_9624);

var G__9625 = seq__9606_9620;
var G__9626 = chunk__9607_9621;
var G__9627 = count__9608_9622;
var G__9628 = (i__9609_9623 + (1));
seq__9606_9620 = G__9625;
chunk__9607_9621 = G__9626;
count__9608_9622 = G__9627;
i__9609_9623 = G__9628;
continue;
} else {
var temp__4657__auto___9629 = cljs.core.seq.call(null,seq__9606_9620);
if(temp__4657__auto___9629){
var seq__9606_9630__$1 = temp__4657__auto___9629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9606_9630__$1)){
var c__9247__auto___9631 = cljs.core.chunk_first.call(null,seq__9606_9630__$1);
var G__9632 = cljs.core.chunk_rest.call(null,seq__9606_9630__$1);
var G__9633 = c__9247__auto___9631;
var G__9634 = cljs.core.count.call(null,c__9247__auto___9631);
var G__9635 = (0);
seq__9606_9620 = G__9632;
chunk__9607_9621 = G__9633;
count__9608_9622 = G__9634;
i__9609_9623 = G__9635;
continue;
} else {
var f_9636 = cljs.core.first.call(null,seq__9606_9630__$1);
cljs.core.println.call(null,"  ",f_9636);

var G__9637 = cljs.core.next.call(null,seq__9606_9630__$1);
var G__9638 = null;
var G__9639 = (0);
var G__9640 = (0);
seq__9606_9620 = G__9637;
chunk__9607_9621 = G__9638;
count__9608_9622 = G__9639;
i__9609_9623 = G__9640;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9641 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8436__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8436__auto__)){
return or__8436__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9641);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9641)))?cljs.core.second.call(null,arglists_9641):arglists_9641));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9611 = null;
var count__9612 = (0);
var i__9613 = (0);
while(true){
if((i__9613 < count__9612)){
var vec__9614 = cljs.core._nth.call(null,chunk__9611,i__9613);
var name = cljs.core.nth.call(null,vec__9614,(0),null);
var map__9615 = cljs.core.nth.call(null,vec__9614,(1),null);
var map__9615__$1 = ((((!((map__9615 == null)))?((((map__9615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9615):map__9615);
var doc = cljs.core.get.call(null,map__9615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9642 = seq__9610;
var G__9643 = chunk__9611;
var G__9644 = count__9612;
var G__9645 = (i__9613 + (1));
seq__9610 = G__9642;
chunk__9611 = G__9643;
count__9612 = G__9644;
i__9613 = G__9645;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9610);
if(temp__4657__auto__){
var seq__9610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9610__$1)){
var c__9247__auto__ = cljs.core.chunk_first.call(null,seq__9610__$1);
var G__9646 = cljs.core.chunk_rest.call(null,seq__9610__$1);
var G__9647 = c__9247__auto__;
var G__9648 = cljs.core.count.call(null,c__9247__auto__);
var G__9649 = (0);
seq__9610 = G__9646;
chunk__9611 = G__9647;
count__9612 = G__9648;
i__9613 = G__9649;
continue;
} else {
var vec__9617 = cljs.core.first.call(null,seq__9610__$1);
var name = cljs.core.nth.call(null,vec__9617,(0),null);
var map__9618 = cljs.core.nth.call(null,vec__9617,(1),null);
var map__9618__$1 = ((((!((map__9618 == null)))?((((map__9618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9618):map__9618);
var doc = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9650 = cljs.core.next.call(null,seq__9610__$1);
var G__9651 = null;
var G__9652 = (0);
var G__9653 = (0);
seq__9610 = G__9650;
chunk__9611 = G__9651;
count__9612 = G__9652;
i__9613 = G__9653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map