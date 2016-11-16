// Compiled by ClojureScript 1.8.51 {}
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
monet.canvas.transform = (function monet$canvas$transform(var_args){
var args9769 = [];
var len__9506__auto___9775 = arguments.length;
var i__9507__auto___9776 = (0);
while(true){
if((i__9507__auto___9776 < len__9506__auto___9775)){
args9769.push((arguments[i__9507__auto___9776]));

var G__9777 = (i__9507__auto___9776 + (1));
i__9507__auto___9776 = G__9777;
continue;
} else {
}
break;
}

var G__9771 = args9769.length;
switch (G__9771) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9769.length)].join('')));

}
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__9772){
var map__9773 = p__9772;
var map__9773__$1 = ((((!((map__9773 == null)))?((((map__9773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9773):map__9773);
var m11 = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));
var m12 = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));
var m21 = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));
var m22 = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));
var dx = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$lang$maxFixedArity = 7;
/**
 * Fills the subpaths with the current fill style.
 */
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Further constrains the clipping region to the current path.
 */
monet.canvas.clip = (function monet$canvas$clip(ctx){
ctx.clip();

return ctx;
});
/**
 * Path for a rectangle at position (x, y) with a size (w, h).
 */
monet.canvas.rect = (function monet$canvas$rect(ctx,p__9779){
var map__9782 = p__9779;
var map__9782__$1 = ((((!((map__9782 == null)))?((((map__9782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9782):map__9782);
var x = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.rect(x,y,w,h);

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__9784){
var map__9787 = p__9784;
var map__9787__$1 = ((((!((map__9787 == null)))?((((map__9787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9787):map__9787);
var x = cljs.core.get.call(null,map__9787__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9787__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__9787__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__9787__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__9789){
var map__9792 = p__9789;
var map__9792__$1 = ((((!((map__9792 == null)))?((((map__9792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9792):map__9792);
var x = cljs.core.get.call(null,map__9792__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9792__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__9792__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__9792__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__9794){
var map__9797 = p__9794;
var map__9797__$1 = ((((!((map__9797 == null)))?((((map__9797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9797):map__9797);
var x = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
monet.canvas.arc = (function monet$canvas$arc(ctx,p__9799){
var map__9802 = p__9799;
var map__9802__$1 = ((((!((map__9802 == null)))?((((map__9802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9802):map__9802);
var x = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var start_angle = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493));
var end_angle = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"end-angle","end-angle",1398887581));
var counter_clockwise_QMARK_ = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965));
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
monet.canvas.ellipse = (function monet$canvas$ellipse(ctx,p__9804){
var map__9807 = p__9804;
var map__9807__$1 = ((((!((map__9807 == null)))?((((map__9807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9807):map__9807);
var x = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rw = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"rw","rw",1113242370));
var rh = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"rh","rh",1692287680));
return monet.canvas.restore.call(null,monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,monet.canvas.scale.call(null,monet.canvas.save.call(null,ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),rw,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__9809){
var map__9812 = p__9809;
var map__9812__$1 = ((((!((map__9812 == null)))?((((map__9812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9812):map__9812);
var x = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,ctx),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__9814){
var map__9817 = p__9814;
var map__9817__$1 = ((((!((map__9817 == null)))?((((map__9817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9817):map__9817);
var text__$1 = cljs.core.get.call(null,map__9817__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var x = cljs.core.get.call(null,map__9817__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9817__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillText(text__$1,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name.call(null,cap);

return ctx;
});
/**
 * Can be set, to change the line join style. Possible values (as string
 * or keyword): bevel, round, and miter. Other values are ignored.
 */
monet.canvas.stroke_join = (function monet$canvas$stroke_join(ctx,join){
ctx.lineJoin = cljs.core.name.call(null,join);

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
ctx.globalAlpha = a;

return ctx;
});
/**
 * With Global Alpha applied this sets how shapes and images are drawn
 * onto the existing bitmap. Possible values (as string or keyword):
 * source-atop, source-in, source-out, source-over (default),
 * destination-atop, destination-in, destination-out, destination-over,
 * lighter, darker, copy, xor
 */
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name.call(null,operation);

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var args9819 = [];
var len__9506__auto___9828 = arguments.length;
var i__9507__auto___9829 = (0);
while(true){
if((i__9507__auto___9829 < len__9506__auto___9828)){
args9819.push((arguments[i__9507__auto___9829]));

var G__9830 = (i__9507__auto___9829 + (1));
i__9507__auto___9829 = G__9830;
continue;
} else {
}
break;
}

var G__9821 = args9819.length;
switch (G__9821) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9819.length)].join('')));

}
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__9822){
var map__9823 = p__9822;
var map__9823__$1 = ((((!((map__9823 == null)))?((((map__9823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9823):map__9823);
var params = map__9823__$1;
var sh = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));
var sw = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var x = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dh = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"dh","dh",528137731));
var dx = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var w = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"w","w",354169001));
var sy = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var dy = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var h = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dw = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));
var sx = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var pred__9825_9832 = cljs.core._EQ_;
var expr__9826_9833 = cljs.core.count.call(null,params);
if(cljs.core.truth_(pred__9825_9832.call(null,(2),expr__9826_9833))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_(pred__9825_9832.call(null,(4),expr__9826_9833))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_(pred__9825_9832.call(null,(8),expr__9826_9833))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9826_9833)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;
monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var args9834 = [];
var len__9506__auto___9840 = arguments.length;
var i__9507__auto___9841 = (0);
while(true){
if((i__9507__auto___9841 < len__9506__auto___9840)){
args9834.push((arguments[i__9507__auto___9841]));

var G__9842 = (i__9507__auto___9841 + (1));
i__9507__auto___9841 = G__9842;
continue;
} else {
}
break;
}

var G__9836 = args9834.length;
switch (G__9836) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9834.length)].join('')));

}
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__9837){
var map__9838 = p__9837;
var map__9838__$1 = ((((!((map__9838 == null)))?((((map__9838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9838):map__9838);
var cpx = cljs.core.get.call(null,map__9838__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));
var cpy = cljs.core.get.call(null,map__9838__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));
var x = cljs.core.get.call(null,map__9838__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9838__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;
monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var args9844 = [];
var len__9506__auto___9850 = arguments.length;
var i__9507__auto___9851 = (0);
while(true){
if((i__9507__auto___9851 < len__9506__auto___9850)){
args9844.push((arguments[i__9507__auto___9851]));

var G__9852 = (i__9507__auto___9851 + (1));
i__9507__auto___9851 = G__9852;
continue;
} else {
}
break;
}

var G__9846 = args9844.length;
switch (G__9846) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9844.length)].join('')));

}
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__9847){
var map__9848 = p__9847;
var map__9848__$1 = ((((!((map__9848 == null)))?((((map__9848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9848):map__9848);
var cp1x = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));
var cp1y = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));
var cp2x = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));
var cp2y = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));
var x = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9848__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;
monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__9854){
var map__9857 = p__9854;
var map__9857__$1 = ((((!((map__9857 == null)))?((((map__9857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9857):map__9857);
var x = cljs.core.get.call(null,map__9857__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9857__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__9857__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__9857__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__9857__$1,new cljs.core.Keyword(null,"r","r",-471384190));

monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__9513__auto__ = [];
var len__9506__auto___9863 = arguments.length;
var i__9507__auto___9864 = (0);
while(true){
if((i__9507__auto___9864 < len__9506__auto___9863)){
args__9513__auto__.push((arguments[i__9507__auto___9864]));

var G__9865 = (i__9507__auto___9864 + (1));
i__9507__auto___9864 = G__9865;
continue;
} else {
}
break;
}

var argseq__9514__auto__ = ((((3) < args__9513__auto__.length))?(new cljs.core.IndexedSeq(args__9513__auto__.slice((3)),(0),null)):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9514__auto__);
});

monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.call(null,func,cur,extra);
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

monet.canvas.update_entity.cljs$lang$maxFixedArity = (3);

monet.canvas.update_entity.cljs$lang$applyTo = (function (seq9859){
var G__9860 = cljs.core.first.call(null,seq9859);
var seq9859__$1 = cljs.core.next.call(null,seq9859);
var G__9861 = cljs.core.first.call(null,seq9859__$1);
var seq9859__$2 = cljs.core.next.call(null,seq9859__$1);
var G__9862 = cljs.core.first.call(null,seq9859__$2);
var seq9859__$3 = cljs.core.next.call(null,seq9859__$2);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__9860,G__9861,G__9862,seq9859__$3);
});
monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));
var seq__9870 = cljs.core.seq.call(null,ks);
var chunk__9871 = null;
var count__9872 = (0);
var i__9873 = (0);
while(true){
if((i__9873 < count__9872)){
var k = cljs.core._nth.call(null,chunk__9871,i__9873);
monet.canvas.remove_entity.call(null,mc,k);

var G__9874 = seq__9870;
var G__9875 = chunk__9871;
var G__9876 = count__9872;
var G__9877 = (i__9873 + (1));
seq__9870 = G__9874;
chunk__9871 = G__9875;
count__9872 = G__9876;
i__9873 = G__9877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9870);
if(temp__4657__auto__){
var seq__9870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9870__$1)){
var c__9247__auto__ = cljs.core.chunk_first.call(null,seq__9870__$1);
var G__9878 = cljs.core.chunk_rest.call(null,seq__9870__$1);
var G__9879 = c__9247__auto__;
var G__9880 = cljs.core.count.call(null,c__9247__auto__);
var G__9881 = (0);
seq__9870 = G__9878;
chunk__9871 = G__9879;
count__9872 = G__9880;
i__9873 = G__9881;
continue;
} else {
var k = cljs.core.first.call(null,seq__9870__$1);
monet.canvas.remove_entity.call(null,mc,k);

var G__9882 = cljs.core.next.call(null,seq__9870__$1);
var G__9883 = null;
var G__9884 = (0);
var G__9885 = (0);
seq__9870 = G__9882;
chunk__9871 = G__9883;
count__9872 = G__9884;
i__9873 = G__9885;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__9886){
var map__9894 = p__9886;
var map__9894__$1 = ((((!((map__9894 == null)))?((((map__9894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9894):map__9894);
var mc = map__9894__$1;
var canvas = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var updating_QMARK_ = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));
var ctx = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var active = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var entities = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
var last_frame_time = cljs.core.get.call(null,map__9894__$1,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617));
monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr.call(null,canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref.call(null,active))){
var ks_9901 = cljs.core.js_keys.call(null,entities);
var cnt_9902 = ks_9901.length;
var now_9903 = Date.now();
var dt_9904 = (now_9903 - cljs.core.deref.call(null,last_frame_time));
cljs.core.reset_BANG_.call(null,last_frame_time,now_9903);

var i_9905 = (0);
while(true){
if((i_9905 < cnt_9902)){
var k_9906 = (ks_9901[i_9905]);
var map__9896_9907 = (entities[k_9906]);
var map__9896_9908__$1 = ((((!((map__9896_9907 == null)))?((((map__9896_9907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9896_9907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9896_9907):map__9896_9907);
var ent_9909 = map__9896_9908__$1;
var draw_9910 = cljs.core.get.call(null,map__9896_9908__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var update_9911 = cljs.core.get.call(null,map__9896_9908__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var value_9912 = cljs.core.get.call(null,map__9896_9908__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__8424__auto__ = update_9911;
if(cljs.core.truth_(and__8424__auto__)){
return cljs.core.deref.call(null,updating_QMARK_);
} else {
return and__8424__auto__;
}
})())){
var updated_9913 = (function (){var or__8436__auto__ = (function (){try{return update_9911.call(null,value_9912,dt_9904);
}catch (e9899){if((e9899 instanceof Error)){
var e = e9899;
console.log(e);

return value_9912;
} else {
throw e9899;

}
}})();
if(cljs.core.truth_(or__8436__auto__)){
return or__8436__auto__;
} else {
return value_9912;
}
})();
if(cljs.core.truth_((entities[k_9906]))){
(entities[k_9906] = cljs.core.assoc.call(null,ent_9909,new cljs.core.Keyword(null,"value","value",305978217),updated_9913));
} else {
}
} else {
}

if(cljs.core.truth_(draw_9910)){
try{draw_9910.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_9906])));
}catch (e9900){if((e9900 instanceof Error)){
var e_9914 = e9900;
console.log(e_9914);
} else {
throw e9900;

}
}} else {
}

var G__9915 = (i_9905 + (1));
i_9905 = G__9915;
continue;
} else {
}
break;
}

return monet.core.animation_frame.call(null,((function (map__9894,map__9894__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time){
return (function (){
return monet$canvas$draw_loop.call(null,mc);
});})(map__9894,map__9894__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time))
);
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__8436__auto__ = context_type;
if(cljs.core.truth_(or__8436__auto__)){
return or__8436__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context.call(null,elem,ct);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),cljs.core.atom.call(null,Date.now()),new cljs.core.Keyword(null,"entities","entities",1940967403),{},new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.call(null,true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__9513__auto__ = [];
var len__9506__auto___9924 = arguments.length;
var i__9507__auto___9925 = (0);
while(true){
if((i__9507__auto___9925 < len__9506__auto___9924)){
args__9513__auto__.push((arguments[i__9507__auto___9925]));

var G__9926 = (i__9507__auto___9925 + (1));
i__9507__auto___9925 = G__9926;
continue;
} else {
}
break;
}

var argseq__9514__auto__ = ((((1) < args__9513__auto__.length))?(new cljs.core.IndexedSeq(args__9513__auto__.slice((1)),(0),null)):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9514__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__9922){
var vec__9923 = p__9922;
var context_type = cljs.core.nth.call(null,vec__9923,(0),null);
var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);
monet.canvas.draw_loop.call(null,mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

monet.canvas.init.cljs$lang$applyTo = (function (seq9920){
var G__9921 = cljs.core.first.call(null,seq9920);
var seq9920__$1 = cljs.core.next.call(null,seq9920);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__9921,seq9920__$1);
});
monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(mc),Date.now());

return monet.canvas.draw_loop.call(null,mc);
});

//# sourceMappingURL=canvas.js.map