;; TODO
;; create collision area functions
;; continue formatting the boundary functions
;; make a case for boudary where they move back in if they happen to be out of bound. Or just make the function work that way. basically if x is outside set vx to be going to the center, if y is outside set vy to be going to the center
;; Create a merge method that will not overwrite previous changes.
;;
;; FUNCTION TYPES
;; :move :boundary :draw :collision
;; this could be a problem with multiple of these affecting the same aspect (Ex. Move and boundary both affecting x and y, NOT because i decide the order and proof it. Could still become a long term problem
;;
;; FUN IDEAS
;; On collision make a new one with the average of the rgb values
;; have all type functions (ex. :move :boundary :on-enemy) also be randomly inherited on mating

(ns modern-cljs.core)
(enable-console-print!)

;DECLARATIONS
(declare context)
(declare game-state)
(declare c-width)
(declare c-height)

;FRAMES
(def fps (atom 0))
(def tick-count (atom 0))
(def tick-total (atom 0))
(defn reset-count [] (.log js/console @fps @tick-count @tick-total) (reset! fps 0)(reset! tick-count 0))

;DEV
(defn return-one [object] #(+ 1 1))

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
(defn move-single [pos speed]
(+ pos (/ speed 10)))

(defn move
[{:keys [x y vx vy]}]
 {:x (move-single x vx) :y (move-single y vy)})

(defn add-diff [num1 num2]
(+ num1 (- num1 num2)))
;;make a function that is "going out of boundary"
;next four functions are eerily similar. HOWEVER some have different cases of what to do on each bound
(defn boundary-single 
"moves x or y by speed and bounces back if out of bounds, staying in box" 
[next-pos minimum maximum]
(if (> next-pos maximum) (add-diff maximum next-pos)
(if (< next-pos minimum) (add-diff minimum next-pos)
next-pos)))

(defn boundary
"putting x and y together"
[{:keys [x y vx vy]}]
 {:x (boundary-single (move-single x vx) 0 c-width) :y (boundary-single (move-single y vy) 0 c-height)})

(defn wrap-single 
"will wrap around if out of boundary globe style" 
[keyname next-pos minimum maximum]
(if (> next-pos maximum) {keyname minimum}
(if (< next-pos minimum) {keyname maximum})))

(defn wrap
"putting x and y together"
[{:keys [x y vx vy x-min x-max y-min y-max] :or {x-min 0 x-max c-width y-min 0 y-max c-height}}]
(let [next-x (move-single x vx)
next-y (move-single y vy)]
(merge (wrap-single :x next-x x-min x-max)  (wrap-single :y next-y y-min y-max))))

(defn outside
[pos minimum maximum]
(or (> pos maximum) (< pos minimum)))

(defn bounce-in-boundary 
"changes vx or vy if outside boundary"
[{:keys [x y vx vy x-min x-max y-min y-max] :or {x-min 0 x-max c-width y-min 0 y-max c-height}}]
(let [next-x (move-single x vx)
next-y (move-single y vy)]
(merge
(if (outside next-x x-min x-max)
{:vx (* vx -1)})
(if (outside next-y y-min y-max)
{:vy (* vy -1)}))))

(defn accelerate [{:keys [vx vy]}]
{:vx (+ vx .01) :vy (+ vy .01)})
;COLLISION

;CORE
(defn case-merge [a b]
  (merge-with (fn [x y]
                (cond (map? y) (case-merge x y) 
                      (vector? y) (concat x y) 
                      :else y)) 
                 a b))
(defn apply-func-keys
"apply each function to this object if the object has that function
mergeing the result of each function with the previous,
to create the new object"
 [func-keys object] 
(reduce #(if (%2 object) (merge %1 ((%2 object) object)) %1) object func-keys))

;change this to be a doseq, there is no good reason for having a lazy seq here that I can think of. UPDATE might as well just leave lazy, because everything is used on draw. HOWEVER be careful of side effect functions

(defn get-funcs
[object]
(->> object
(second)
(:funcs)
(map #(second %))
(into [] )))

(defn get-func-results
[funcs object]
(map #(% object) funcs))

(defn call-funcs
"Calls all functions from all objects 
passing them the object that the function resides in as a default.
 however they can look at the entire state should they so choose.
Returns new change collection to be applied later."
[state]
(map #(get-func-results (get-funcs %) %) state))

(defn update-game 
"the game state tick function"
[] 
(->> @game-state 
(call-funcs)
;(call-collision-funcs [:bounce])
(reset! game-state))
(reset! tick-count (inc @tick-count))
(reset! tick-total (inc @tick-total)))

;GRAPHICS
(defn graphics [state ctx] 
 (.clearRect ctx 0 0  c-width c-height)
 (doseq [object @state] 
   ((:draw object) object ctx))
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

;STATE VARS
(def game-state (atom {
;collisions is 0
		0 {}

	   1
	   {:x 4
     	   :y 15
	   :size 150
	   :vx 15
	   :vy 15
	   :funcs {
	   :move #'move
	   :boundary #'wrap
	}
   	   :draw #'draw-rectangle
	}
	   2
	   {:x 4
	   :y 150
	   :vx 7
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
;(defn graphics-interval []
;(graphics game-state context)
;(js/requestAnimationFrame graphics-interval))
;(js/requestAnimationFrame graphics-interval)
;(def update-interval (js/setInterval #(update-game) (/ 1000 50)))
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
