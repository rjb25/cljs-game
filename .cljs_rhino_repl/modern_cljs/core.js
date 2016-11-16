// Compiled by ClojureScript 1.8.51 {}
goog.provide('modern_cljs.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
modern_cljs.core.fps = cljs.core.atom.call(null,(0));
modern_cljs.core.tick_count = cljs.core.atom.call(null,(0));
modern_cljs.core.tick_total = cljs.core.atom.call(null,(0));
modern_cljs.core.reset_count = (function modern_cljs$core$reset_count(){
console.log(cljs.core.deref.call(null,modern_cljs.core.fps),cljs.core.deref.call(null,modern_cljs.core.tick_count),cljs.core.deref.call(null,modern_cljs.core.tick_total));

cljs.core.reset_BANG_.call(null,modern_cljs.core.fps,(0));

return cljs.core.reset_BANG_.call(null,modern_cljs.core.tick_count,(0));
});
modern_cljs.core.new_object = (function modern_cljs$core$new_object(object,collection){
return cljs.core.conj.call(null,collection,object);
});
modern_cljs.core.move = (function modern_cljs$core$move(p__9600){
var map__9603 = p__9600;
var map__9603__$1 = ((((!((map__9603 == null)))?((((map__9603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9603):map__9603);
var x = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (vx / (10))),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (vy / (10)))], null);
});
modern_cljs.core.loop_in_boundary = (function modern_cljs$core$loop_in_boundary(p__9605){
var map__9608 = p__9605;
var map__9608__$1 = ((((!((map__9608 == null)))?((((map__9608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);
var object = map__9608__$1;
var x = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
if(((x < (0))) || ((x > (700)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null);
} else {
if(((y < (0))) || ((y > (600)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
} else {
return modern_cljs.core.move.call(null,object);
}
}
});
modern_cljs.core.bounce_in_boundary = (function modern_cljs$core$bounce_in_boundary(p__9610){
var map__9613 = p__9610;
var map__9613__$1 = ((((!((map__9613 == null)))?((((map__9613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9613):map__9613);
var object = map__9613__$1;
var x = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
if(((x < (0))) || ((x > (700)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(vx * (-1))], null);
} else {
if(((y < (0))) || ((y > (600)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(vy * (-1))], null);
} else {
return modern_cljs.core.move.call(null,object);
}
}
});
modern_cljs.core.accelerate = (function modern_cljs$core$accelerate(p__9615){
var map__9618 = p__9615;
var map__9618__$1 = ((((!((map__9618 == null)))?((((map__9618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9618):map__9618);
var vx = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(vx + .01),new cljs.core.Keyword(null,"vy","vy",-2018509997),(vy + .01)], null);
});
/**
 * updates all members of collection by merging changes. Returns a new collection
 */
modern_cljs.core.update_collection = (function modern_cljs$core$update_collection(function$,old,build){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__9621_SHARP_,p2__9620_SHARP_){
return cljs.core.merge.call(null,p2__9620_SHARP_,function$.call(null,p1__9621_SHARP_));
}),old,build));
});
window.addEventListener("DOMContentLoaded",(function (){
modern_cljs.core.ctx = document.getElementById("canvas").getContext("2d");

modern_cljs.core.draw_rectangle = (function modern_cljs$core$draw_rectangle(x,y){
modern_cljs.core.ctx.beginPath();

modern_cljs.core.ctx.fillStyle = "red";

modern_cljs.core.ctx.fillRect(x,y,(10),(10));

return modern_cljs.core.ctx.closePath();
});

modern_cljs.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(15),new cljs.core.Keyword(null,"vx","vx",-1685168462),(-2),new cljs.core.Keyword(null,"vy","vy",-2018509997),(-20),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(10),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(17),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(114),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(411),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(44),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null)], null));

modern_cljs.core.update = (function modern_cljs$core$update(){
cljs.core.reset_BANG_.call(null,modern_cljs.core.state,modern_cljs.core.new_object.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"vx","vx",-1685168462),(7),new cljs.core.Keyword(null,"vy","vy",-2018509997),(15),new cljs.core.Keyword(null,"draw","draw",1358331674),modern_cljs.core.draw_rectangle], null),modern_cljs.core.update_collection.call(null,modern_cljs.core.accelerate,cljs.core.deref.call(null,modern_cljs.core.state),modern_cljs.core.update_collection.call(null,modern_cljs.core.loop_in_boundary,cljs.core.deref.call(null,modern_cljs.core.state),cljs.core.deref.call(null,modern_cljs.core.state)))));

cljs.core.reset_BANG_.call(null,modern_cljs.core.tick_count,(cljs.core.deref.call(null,modern_cljs.core.tick_count) + (1)));

return cljs.core.reset_BANG_.call(null,modern_cljs.core.tick_total,(cljs.core.deref.call(null,modern_cljs.core.tick_total) + (1)));
});

modern_cljs.core.graphics = (function modern_cljs$core$graphics(){
modern_cljs.core.ctx.clearRect((0),(0),(700),(600));

var seq__9626_9630 = cljs.core.seq.call(null,cljs.core.deref.call(null,modern_cljs.core.state));
var chunk__9627_9631 = null;
var count__9628_9632 = (0);
var i__9629_9633 = (0);
while(true){
if((i__9629_9633 < count__9628_9632)){
var draw_9634 = cljs.core._nth.call(null,chunk__9627_9631,i__9629_9633);
new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(draw_9634).call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(draw_9634),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(draw_9634));

var G__9635 = seq__9626_9630;
var G__9636 = chunk__9627_9631;
var G__9637 = count__9628_9632;
var G__9638 = (i__9629_9633 + (1));
seq__9626_9630 = G__9635;
chunk__9627_9631 = G__9636;
count__9628_9632 = G__9637;
i__9629_9633 = G__9638;
continue;
} else {
var temp__4657__auto___9639 = cljs.core.seq.call(null,seq__9626_9630);
if(temp__4657__auto___9639){
var seq__9626_9640__$1 = temp__4657__auto___9639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9626_9640__$1)){
var c__9249__auto___9641 = cljs.core.chunk_first.call(null,seq__9626_9640__$1);
var G__9642 = cljs.core.chunk_rest.call(null,seq__9626_9640__$1);
var G__9643 = c__9249__auto___9641;
var G__9644 = cljs.core.count.call(null,c__9249__auto___9641);
var G__9645 = (0);
seq__9626_9630 = G__9642;
chunk__9627_9631 = G__9643;
count__9628_9632 = G__9644;
i__9629_9633 = G__9645;
continue;
} else {
var draw_9646 = cljs.core.first.call(null,seq__9626_9640__$1);
new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(draw_9646).call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(draw_9646),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(draw_9646));

var G__9647 = cljs.core.next.call(null,seq__9626_9640__$1);
var G__9648 = null;
var G__9649 = (0);
var G__9650 = (0);
seq__9626_9630 = G__9647;
chunk__9627_9631 = G__9648;
count__9628_9632 = G__9649;
i__9629_9633 = G__9650;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,modern_cljs.core.fps,(cljs.core.deref.call(null,modern_cljs.core.fps) + (1)));
});

modern_cljs.core.update_interval = setInterval(modern_cljs.core.update,((1000) / (25)));

modern_cljs.core.graphics_interval = setInterval(modern_cljs.core.graphics,(0));

modern_cljs.core.per_second_interval = setInterval(modern_cljs.core.reset_count,(1000));
}));

//# sourceMappingURL=core.js.map