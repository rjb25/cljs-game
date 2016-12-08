;; TODO
;; create collision area functions
;; continue formatting the boundary functions
;; make a case for boudary where they move back in if they happen to be out of bound. Or just make the function work that way. basically if x is outside set vx to be going to the center, if y is outside set vy to be going to the center
;; Create a merge method that allows for cumulative change and order of application.
;;
;; FUNCTION TYPES
;; :move :boundary :draw :collision
;; this could be a problem with multiple of these affecting the same aspect (Ex. Move and boundary both affecting x and y, NOT because i decide the order and proof it. Could still become a long term problem
;;
;; FUN IDEAS
;; On collision make a new one with the average of the rgb values
;; have all type functions (ex. :move :boundary :on-enemy) also be randomly inherited on mating

(ns modern-cljs.core
(:require-macros [modern-cljs.macros :refer [default evaluate evaluate-bad]]))
(enable-console-print!)

;DECLARATIONS
(declare context)
(declare game-state)
(declare c-width)
(declare c-height)
(declare draw-rectangle)
(declare ident-or-val)

;FRAMES
(def fps (atom 0))
(def tick-count (atom 0))
(def available-id (atom 100))
(def available-pos (atom 1))
(def tick-total (atom 0))
(defn reset-count [] (.log js/console @fps @tick-count @tick-total) (reset! fps 0)(reset! tick-count 0))

;DEV
(defn return-one [object] #(+ 1 1))

(defn return-1 [id object] {id {:x [#(+ % .5) 200]}})
(defn return-2 [id object] {id {:x [#(+ % .5) 1]} 2 {:y [#(+ % .5) 5]}})

(defn change-atom-where [atomic conditional changes]
(->> @atomic
(map #(if (conditional %) (merge % changes) %) )
(into [] )
(reset! atomic )))

(defn edit-id [id changes]
(change-atom-where game-state #(= (:id %) id) changes))

(defn dev-new-object [atomic object]
(reset! atomic (conj @atomic object)))

(defn new-object [object collection]
(conj collection object))

;;MOVEMENT
(defn move-single [speed]
#(+ % (/ speed 10)))
;could still have wrappers if you used a map like{:func #() :val 5 :order}
;then no need for fn? just contains? :func
;However storing them in a map means that the recursive interpreter would have to check something
;other than the data type to see that this is a leaf and not another level to dive into
;This might be able to be used with a back out system that checks if not map and grabs the previous map as leaf
;ups of this would be some clarity, and flexability. Downs would be complexity and in some sense less clarity through lack of consistency.
;so move would look like
;defaults seemed to be adding more complexity than it was taking away
;(defn move
;[id {:keys [x y vx vy]}]
; {id {:x {:func #(+ (/ vx   :y [#(+ (/ vy 10) %)]}})
; hmm not so simple very quick, doesnt seem worth the trouble of cleaning
; however having this many anonymous functions could hurt modularity
; you could make macros that make these anonymous functions if they are used too frequently
(defn move
[id {:keys [x y vx vy] :or {vx 0 vy 0}}]
 {id {:x [(move-single vx) 500] :y [(move-single vy) 500]}})
;(defn move
;[{:keys [x y vx vy]}]
; {:x (move-single x vx) :y (move-single y vy)})

;(defn add-diff [num1 num2]
;(+ num1 (- num1 num2)))
;;make a function that is "going out of boundary"
;next four functions are eerily similar. HOWEVER some have different cases of what to do on each bound
;(defn boundary-single 
;"moves x or y by speed and bounces back if out of bounds, staying in box" 
;[next-pos minimum maximum]
;(if (> next-pos maximum) (add-diff maximum next-pos)
;(if (< next-pos minimum) (add-diff minimum next-pos)
;next-pos)))

;(defn boundary
;"putting x and y together"
;[{:keys [x y vx vy]}]
; {:x (boundary-single (move-single vx) 0 c-width) :y (boundary-single (move-single vy) 0 c-height)})

(defn wrap-single 
"will wrap around if out of boundary globe style
should never have things drawn out of boundary" 
[minimum maximum]
#(if (> % maximum)  (+ (rem (- % maximum) (- maximum minimum)) minimum)
(if (< % minimum)  (+ (rem (- % minimum) (- maximum minimum)) maximum)
%)))

(defn wrap
"in general should happen after movement hence the order 1000"
[id {:keys [x y vx vy x-min x-max y-min y-max] :or {x-min 0 x-max c-width y-min 0 y-max c-height}}]
{id {:x [(wrap-single x-min x-max) 1000]  :y [(wrap-single y-min y-max) 1000]}})

(defn abs [n] (max n (- n)))

(defn neg [n] (* (abs n) -1))

(defn go-back
[pos minimum maximum]
(if (> pos maximum) #(neg %)
(if (< pos minimum) #(abs %) identity)))

(defn bounce-in-boundary
"if was outside boundary will be going toward said boundary"
[id {:keys [x y vx vy x-min x-max y-min y-max] :or {x-min 0 x-max c-width y-min 0 y-max c-height}}]
{id {:vx [(go-back x x-min x-max) 500]
     :vy [(go-back y y-min y-max) 500]}})

;(defn accelerate [{:keys [vx vy]}]
;{:vx (+ vx .01) :vy (+ vy .01)})
;CREATION
(defn create
"A lot of tears could be fixed here if numbers could turn into set 500
So the real problem is functions that mark objects that may or may not have been marked
fixed for now with let, may revisit later"
[id {:keys [created]}]
(let [new-id @available-id
      make-truthy (ident-or-val created true 500)]
(if (not created)
(do (swap! available-id inc)
{id {:created make-truthy} new-id {:x 1 :y 1 :vx 10 :vy 10 :funcs {:move #'move} :draw #'draw-rectangle}})
nil)))

   	   
;COLLISION

;CORE
;fill out change as a default system for function returns allows me to change all funcs in one place 
;maybe make this a macro?
;(defn change [id what func value])
;http://stackoverflow.com/questions/17327733/merge-two-complex-data-structures
;Apply the sort when you go to use the functions
(defn ident-or-val 
"If no value, will return just the value if there is a value it will return a change function"
[value to order] (if (nil? value) to [#(identity to) order]))
(defn change-merge 
"how do I handle wanting to set a new value when there may or may not be a conflict
anonymous functions only work when there is a conflict
Basically if there is no conflict the anonymous function will become the value
ANSWER check it at function level not here"
[change-list-1 change-list-2]
  (merge-with (fn [x y]
                (cond (map? x) (change-merge x y) 
                      (vector? x) (list x y)
		      (list? x) (conj x y)
                      :else x)) 
                 change-list-1 change-list-2))
(defn apply-merge 
  "in this function first represents the function and second the priority"
[game all-changes]
  (merge-with (fn [x y]
                (cond (map? y) (apply-merge x y) 
                      (vector? y) ((first y) x)
		      (list? y) (reduce #((first %2) %1) x (sort-by second < y))
                      :else x)) 
                 game all-changes))
(defn get-funcs
[object]
 (->> object
 (:funcs)
 (map #(second %))))

(defn gen-id-funcs
"generates a vector containing id, the functions that id had
and the object to apply those functions to"
[[id object]]
[id (get-funcs object) object]
)

(defn gen-func-results
"Calls the functions related to id for a single object.
 passes them the object they came from, and its id"
[[id funcs object]]
(if (empty? funcs) 
nil
(reduce #(conj %1 (%2 id object)) [] funcs)))

(defn get-object-changes [object]
"is passed a vector containing an id object pair
returns a vector containing the results of passing the id
and object to the functions"
(->> object
 (gen-id-funcs) ;pairs the id with the objects functions and the object to apply them to
 (gen-func-results) ;applies the functions to both the object and the id, returning a list of changes
 ))

(defn gen-change [state] 
(->> state
(map #(get-object-changes %)) ;gets the changes to be made to state from each object
(remove nil?) ;takes out the objects that had no changes
(reduce #(into %1 %2) []) ;;combines the returned change lists into single list
(reduce change-merge);;merges the changes into a single map
))
;UPDATE
(defn update-game 
"the game state tick function"
[] 
(let [game @game-state]
;(.log js/console (str game))
(->> game 
(gen-change)
(apply-merge game)
(reset! game-state))
(reset! tick-count (inc @tick-count))
(reset! tick-total (inc @tick-total))))

;GRAPHICS
(defn graphics [state ctx] 
 (.clearRect ctx 0 0  c-width c-height)
 (doseq [[id object] state] 
   (if (contains? object :draw)
   ((:draw object) object ctx)))
 (reset! fps (inc @fps)))

(defn draw-rectangle
 [{:keys [x y size] :or {size 15}} ctx]
 (.beginPath ctx)
 (set! (.-fillStyle ctx) "red")
 (.fillRect ctx x y size size)
 (.closePath ctx))
;One time events
(.addEventListener
  js/window
  "DOMContentLoaded"
(fn []
(def context (.getContext (.getElementById js/document "canvas") "2d"))
(def c-height (.-height (.getElementById js/document "canvas")))
(def c-width (.-width (.getElementById js/document "canvas")))
;merge only handles exactly two objects with functions?
;STATE VARS
(def game-state (atom {
;collisions is 0
	;0 {:funcs {}}
	   1
	   {:x 4
     	   :y 15
:x-min 1000 
	   :size 150
	   :vx -150
	   :vy 15
	   :funcs {
	:create #'create
	   :move #'move
;	   :jargo #'move
	   :boundary #'wrap
	}
   	   :draw #'draw-rectangle
	}
	   2
	   {:x 4
	   :y 150
:x-min 1000
	   :vx 7
	   :vy 25
	:funcs {
	   :move #'move
	:boundary #'bounce-in-boundary
	}
	   :draw #'draw-rectangle
}
	   3
	   {:x 4
	   :y 150
:x-min 1000
	   :vx 8
	   :vy 25
	:funcs {
	   :move #'move
	:boundary #'bounce-in-boundary
	}
	   :draw #'draw-rectangle
}
}))
(def open-id (atom (+ 1 (count @game-state))))

;;INTERVALS
(defn graphics-interval []
(graphics @game-state context)
(js/requestAnimationFrame graphics-interval))
(js/requestAnimationFrame graphics-interval)
(def update-interval (js/setInterval #(update-game) (/ 1000 50)))
;(def graphics-interval (js/setInterval #(graphics context) (/ 1000 50)))
;(def per-second-interval (js/setInterval reset-count 1000))
))

;(require '[modern-cljs.core :as c] :reload)
;QUESTIONS
;Is it a good idea to give every object references to the functions it will call on itself?
;Would it be better to have flags like "rectangle" "spinning" that mean a certain set collision, drawing and movement functions are applied?
;Allowing each item to have its own specific functions cuts out the middle man of interpretting what "rectangle" means however having "rectangle" means less data in the objects. One string could mean many function calls. However the interpretation would be a pain. I think the best thing is to have the objects have the functions they want called on themselves. But is this OOP? Am i recreating the object model? I would say not really as these objects could have any assortment of functions associated with them and they can be associated in real time. Wont have the hassle of "new function"="new class". Also this function flexability seems rather appropriate for an evolution game.
;
;Should all functions recieve the entire state and decide what keys they want allowing for easy changes? 
;Or should the functions only recieve and output what they need and let higher level functions handle the passing? high level controll means changes at two places for adding a variable to a function. however it allows for the functions to be used more ambiguosly example being the move function that doesnt care if it is getting the x or the y because it is the same process. Based on that I would say that the best practice is to let higher level functions handle the selection and passing of data from state.
