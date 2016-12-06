(ns modern-cljs.macros)
(declare check-type)
(defn set-default [[ch-key ch-val]]	
 (cond  (map? ch-val) {ch-key (check-type ch-val)}
	(fn? ch-val) {ch-key [ch-val 500]};fix this to be escaped function
	(vector? ch-val) (if (not (fn? (first ch-val))) {ch-key [`#(identity (first ~ch-val)) (second ch-val)]}
			 {ch-key ch-val});fix this to be escaped function
	:else {ch-key [`#(identity ~ch-val) 500]}))
(defn check-type [change]
(into {}
(map 
set-default
change)))
(defmacro default
[change]
(let [  defaulted (check-type change)
	a (first defaulted)
        b (first a)
        no-id? (keyword? b) ;ids are numbers or strings, not keywords
]
(if no-id? {'id defaulted} defaulted)))
