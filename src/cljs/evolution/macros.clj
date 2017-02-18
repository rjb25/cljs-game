(ns evolution.macros)
(declare check-type)
(defmacro print-is [what] (print what))
(defn set-default [[ch-key ch-val]]	
 (cond  (map? ch-val) {ch-key (check-type ch-val)}
	(fn? (eval ch-val))  `{~ch-key [~ch-val 40]} ;here is the faulty case
	(vector? ch-val) (if (not (fn? (first ch-val)))
			 {ch-key [`#(identity ~(first ch-val)) (second ch-val)]}
			 `{~ch-key ~ch-val})
	:else {ch-key [`#(identity ~ch-val) 500]})) ;and here
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
(defmacro evaluate
  [to-eval]
  `(eval ~to-eval))
(defmacro evaluate-bad
  [to-eval]
  (eval to-eval))
