;; TODO
;; start using git
;; create collision area functions
;; continue formatting the boundary functions
;; make a case for boudary where they move back in if they happen to be out of bound. Or just make the function work that way. basically if x is outside set vx to be going to the center, if y is outside set vy to be going to the center
;; FUN IDEAS
;; On collision make a new one with the average of the rgb values
;; have all update functions also be randomly inherited
(ns modern-cljs.core)
(enable-console-print!)
;DECLARATIONS
(declare ctx)
(declare state)
(declare c-width)
(declare c-height)

;FRAMES
(def fps (atom 0))
(def tick-count (atom 0))
(def tick-total (atom 0))
(defn reset-count [] (.log js/console @fps @tick-count @tick-total) (reset! fps 0)(reset! tick-count 0))

;DEV
(defn change-atom-where [atomic conditional changes]
(->> @atomic
(map #(if (conditional %) (merge % changes) %) )
(into [] )
(reset! atomic )))

(defn edit-id [id changes]
(change-atom-where state #(= (:id %) id) changes)
)

(defn new-object [object collection]
(conj collection object)
)

;;MOVEMENT
(defn move [pos speed]
(+ pos (/ speed 10)))
(defn add-diff [num1 num2]
(+ num1 (- num1 num2)))
;;make a function that is "going out of boundary"
;next four functions are eerily similar
(defn boundary-single 
"moves x or y by speed and bounces back if out of bounds, staying in box" 
[next-pos minimum maximum]
(if (> next-pos maximum) (add-diff maximum next-pos)
(if (< next-pos minimum) (add-diff minimum next-pos)
next-pos)))
(defn outside
[pos minimum maximum]
(or (> pos maximum) (< pos minimum)))


;(defn wrap-single 
;"will wrap around if out of boundary globe style" 
;[next-pos minimum maximum]
;(if (> next-pos maximum) minimum
;(if (< next-pos minimum) maximum
;next-pos)))
;(defn delete-single 
;"will wrap around if out of boundary globe style" 
;[next-pos minimum maximum]
;(if (> next-pos maximum) minimum
;(if (< next-pos minimum) maximum
;next-pos)))

(defn boundary
"putting x and y together"
[{:keys [x y vx vy]}]
 {:x (boundary-single (move x vx) 0 c-width) :y (boundary-single (move y vy) 0 c-height)})

;(defn wrap
;"putting x and y together"
;[{:keys [x y vx vy]}]
;{:x (wrap-single x vx 0 c-width) :y (wrap-single y vy 0 c-height)})

(defn bounce-in-boundary 
"changes vx or vy if outside boundary"
[{:keys [x y vx vy x-min x-max y-min y-max] :or {x-min 0 x-max c-width y-min 0 y-max c-height}}]
(let [next-x (move x vx)
next-y (move y vy)]
(merge 
(if (outside next-x x-min x-max)
{:vx (* vx -1)})
(if (outside next-y y-min y-max)
{:vy (* vy -1)})
)))

(defn accelerate [{:keys [vx vy]}]
{:vx (+ vx .01) :vy (+ vy .01)}
)
;CORE
(defn update-collection
"updates all members of collection by merging changes. Returns a new collection"
[function old build]
(into [] (map #(merge %2 (function %1)) old build)))

(defn update-game 
"No two functions can update the same thing in a given collection
Otherwise you will overwrite previous updates."
[] 
(->> @state 
(update-collection boundary @state) ;;handles x and y
(update-collection bounce-in-boundary @state) ;;handles vx vy
;;(new-object 
;;	  {:x 300
;;	   :y 150
;;	   :vx 7
;;	   :vy 15
;;	   :draw draw-rectangle})
(reset! state))
(reset! tick-count (inc @tick-count))
(reset! tick-total (inc @tick-total))
)

;GRAPHICS
(defn graphics [ctx] 
 (.clearRect ctx 0 0  c-width c-height)
 (doseq [draw @state] 
   ((:draw draw) (:x draw) (:y draw) ctx))
(reset! fps (inc @fps))
)

(defn draw-rectangle
[x y ctx]
(.beginPath ctx)
(set! (.-fillStyle ctx) "red")
(.fillRect ctx x y 15 12)
(.closePath ctx)
)
;One time events
(.addEventListener
  js/window
  "DOMContentLoaded"
(fn []
(def context (.getContext (.getElementById js/document "canvas") "2d"))
(def c-height (.-height (.getElementById js/document "canvas")))
(def c-width (.-width (.getElementById js/document "canvas")))

;STATE VARS
(def state (atom [
	  {:id 1
	   :x 4
	   :x-max 300
     	   :y 15
	   :y-max 300
	   :vx -60
	   :vy -20
   	   :draw #'draw-rectangle}
	  {:id 2
	   :x 4
	   :y 150
	   :vx 20
	   :vy 20
	   :draw #'draw-rectangle}
	  {:id 3
	   :x 4
	   :y 150
	   :vx 10
	   :vy 17
	   :draw #'draw-rectangle}
	  {:id 4
	   :x 4
	   :y 150
	   :vx 7
	   :vy 25
	   :draw #'draw-rectangle}
]
))
(def open-id (atom (+ 1 (count @state))))

;;INTERVALS
(defn graphics-interval []
(graphics context)
(js/requestAnimationFrame graphics-interval))
(js/requestAnimationFrame graphics-interval)
(def update-interval (js/setInterval #(update-game) (/ 1000 50)))
;(def graphics-interval (js/setInterval #(graphics context) (/ 1000 50)))
(def per-second-interval (js/setInterval reset-count 1000))
))


;(require '[modern-cljs.core :as c] :reload)
;QUESTIONS
;Is it a good idea to give every object references to the functions it will call on itself?
;Would it be better to have flags like "rectangle" "spinning" that mean a certain set collision, drawing and movement functions are applied?
;Allowing each item to have its own specific functions cuts out the middle man of interpretting what "rectangle" means however having "rectangle" means less data in the objects. One string could mean many function calls. However the interpretation would be a pain. I think the best thing is to have the objects have the functions they want called on themselves. But is this OOP? Am i recreating the object model? I would say not really as these objects could have any assortment of functions associated with them and they can be associated in real time. Wont have the hassle of "new function"="new class". Also this function flexability seems rather appropriate for an evolution game.
;
;Should all functions recieve the entire state and decide what keys they want allowing for easy changes? 
;Or should the functions only recieve and output what they need and let higher level functions handle the passing? high level controll means changes at two places for adding a variable to a function. however it allows for the functions to be used more ambiguosly example being the move function that doesnt care if it is getting the x or the y because it is the same process. Based on that I would say that the best practice is to let higher level functions handle the selection and passing of data from state.
