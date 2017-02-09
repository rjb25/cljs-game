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
(declare create)
(declare game-state)
(declare c-width)
(declare c-height)
(declare draw-rectangle)
(declare ident-or-val)
;DEFAULTS
(def default-size 15)

;FRAMES
(def fps (atom 0))
(def tick-count (atom 0))
(def available-id (atom 100))
(def available-pos (atom 1))
(def tick-total (atom 0))
(defn reset-count [] (.log js/console @fps @tick-count @tick-total) (reset! fps 0)(reset! tick-count 0))
;MATH
(defn abs [n] (max n (- n)))
(defn average-int [n1 n2] (quot (+ n1 n2) 2))
(defn neg [n] (* (abs n) -1))

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
;TIME
(defn get-timers-change [M] (into {} (map (fn [[ky vl]] 
					      (if (<= vl 0) [ky [(fn [current] (identity false))  500]] 
							    [ky [#(- % 1) 500]])) 
					  M)))
(defn timer
"Reduces the number on all timers. Then sets value to false if out of time."
[id {:keys [timers]}]
(if timers 
(let [changes (get-timers-change timers)]
{id {:timers changes}}
)
nil))
   	   
;COLLISION
;Do get nearest point for both based on center of other then check which nearest point is closer to one of the centers

(defn clamp [pos pos-start pos-end] (cond (> pos pos-end) pos-end 
					  (< pos pos-start) pos-start
					  :else pos))
(defn box-closest [{:keys [x y size] :or {size default-size}} {other-x :x other-y :y}] (let [half (/ size 2)]
					    		[(clamp other-x (- x half) (+ x half))
							(clamp other-y (- y half) (+ y half))]))
(defn distance 
  "Euclidean distance between 2 points"
  [[x1 y1] [x2 y2]]                     
  (Math/sqrt
   (+ (Math/pow (- x1 x2) 2)
      (Math/pow (- y1 y2) 2))))

(defn collide? [[id {get-closest-point-1 :point-func x :x y :y :as object-1}] [id-2 {get-closest-point-2 :point-func :as object-2}]] (if (and get-closest-point-2 get-closest-point-1) (let [close-1 (get-closest-point-1 object-1 object-2) close-2 (get-closest-point-2 object-2 object-1)] (> (distance close-1 [x y]) (distance close-2 [x y]))) false))
;;collision funcs will take myid myobject theirid theirobject

(defn gen-collision
[[id-1 {func-pairs :on-collision :as obj-1}][id-2 obj-2]]
(if func-pairs
(let [funcs (map second func-pairs)]
(if (empty? funcs) nil
(reduce #(conj %1 (%2 id-1 obj-1 id-2 obj-2)) [] funcs))
) nil))

(defn gen-both-collisions [object-1 object-2]
(if (collide? object-1 object-2)
(concat (gen-collision object-1 object-2) (gen-collision object-2 object-1)) nil))
(defn get-collision-changes 
"if there is a collision, call the change functions passing them themselves and what they collided with. Take those return changes and collect them into a vector"
[state]
(if (empty? (rest state)) [] 
(let [next-step (get-collision-changes (rest state))]
;;reduce because more changes than list
(concat (reduce #(into %1 (gen-both-collisions (first state) %2)) [] (rest state)) next-step)
)))
;CREATION
(defn create
"A lot of tears could be fixed here if numbers could turn into set 500
So the real problem is functions that mark objects that may or may not have been marked
fixed for now with let, may revisit later"
[id {:keys [point-func on-collision created R G B] :or {R 0 G 0 B 0}} id-2 {R-2 :R G-2 :G B-2 :B :or {R-2 0 G-2 0 B-2 0}}]
(let [new-id @available-id
      make-truthy (ident-or-val created true 500)]
(if (not created)
(do (swap! available-id inc)

{id {:created make-truthy} id-2 {:created make-truthy} new-id {:x (rand-int 1500) :R (average-int R R-2) :G (average-int G G-2) :B (average-int B B-2) :y (rand-int 600) :vx (rand-int 50) :vy (rand-int 50) :funcs {:move #'move :boundary #'bounce-in-boundary} 
:on-collision on-collision
:point-func point-func
:size 10
:draw #'draw-rectangle}})
nil)))

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
"

how do I handle wanting to set a new value when there may or may not be a conflict
anonymous functions only work when there is a conflict
Basically if there is no conflict the anonymous function will become the value
ANSWER check it at function level not here
This function merges and at conflict groups"
[change-list-1 change-list-2]
  (merge-with (fn [x y]
;typically under the assumption that both y and x are vectors to start
; assumed       (no-x?) y
; really making the work here is being lazy, and loses specificity
; Makes things not break when really they should be breaking
                (cond (map? x) (change-merge x y) 
		      ;single change mergeing with another single change
                      (vector? x) (list x y)
		      ;multiple changes and multiple changes mergeing
		      ;only if you had a single function that had to return two changes to the same key at different orders.
		      (and (list? x) (list? y)) (into x y)
		      ;multiple changes and single change mergeing
		      (list? x) (conj x y)
; at this point
; x must be a value so (value? x) else x
                      :else x)) 
                 change-list-1 change-list-2))
(defn apply-merge 
  "in this function first represents the function and second the priority"
[game all-changes]
  (merge-with (fn [x y]
                (cond (map? y) (apply-merge x y) 
                      (vector? y) ((first y) x)
		      (list? y) (reduce #((first %2) %1) x (sort-by second < y))
                      :else y)) 
                 game all-changes))


(defn get-object-changes
"gets a vector  [func-1-change func-2-change func-3-change]"
[[id {func-pairs :funcs :as object}]]
(let [funcs (map second func-pairs)]
(if (empty? funcs) 
nil
(reduce #(conj %1 (%2 id object)) [] funcs))))

(defn gen-change 
"for making object modification map"
[state] 
(let [self-changes (reduce #(into %1 (get-object-changes %2)) [] state) ;;gives a list of all changes of all objects
      collision-changes (get-collision-changes state)
      changes (concat self-changes collision-changes)]
(->> changes
(remove nil?) ;takes out function changes that ended up being nothing. May not be necessary.
(reduce change-merge);;merges the changes into a single map
)))
;UPDATE
(defn update-game 
"the game state tick function"
[] 
(let [game @game-state]
;(.log js/console (str game))
(->> game 
(gen-change)
(apply-merge game)
;could make collision map be generated from gen-change, but it seems a little annoying
;being in gen-change would allow for things to have a bigger area of affect than an area of affected, or vice versa using the nearest point vs area
;each object would have a function that does: "whatever my previous collisions were set them to (new map based on previous state)"
;This would of course be more timely as each function would need to check for what it is colliding with
;resulting in double the checks for collision necesary
;divide functions into what they need
;however putting this in gen-change adds the un-neaded overhead for order/priority
;I want everything to be object specific with no globals
(reset! game-state))
(reset! tick-count (inc @tick-count))
(reset! tick-total (inc @tick-total))))

;GRAPHICS
(defn graphics [state ctx] 
 (.clearRect ctx 0 0 c-width c-height)
 (doseq [[id object] state] 
   (if (contains? object :draw)
   ((:draw object) object ctx)))
 (reset! fps (inc @fps)))

(defn draw-rectangle
 [{:keys [x y size R G B] :or {size default-size R 0 G 0 B 0}} ctx]
 (.beginPath ctx)
 (set! (.-fillStyle ctx) (str "rgb("R","G","B")"))
 (.fillRect ctx (- x (/ size 2)) (- y (/ size 2)) size size)
 (.closePath ctx))
;One time events that occur upon page refresh
(.addEventListener
  js/window
  "DOMContentLoaded"
(fn []
(def context (.getContext (.getElementById js/document "canvas") "2d"))
(def c-height (.-height (.getElementById js/document "canvas")))
(def c-width (.-width (.getElementById js/document "canvas")))
;merge only handles exactly two objects with functions?
;STATE VARS
;may eventually seperate functions based on what they need, so some functions might need whole game-state, others might need collisions and self,
;why not just pass every object whole game state and have it take what it needs? because it is not efficient.
;I need a better sorting system
;For collisions just add :data
;have collision be married with collision funcs. which are functions that are called on collision
;gen-change then gen-collision-change
;How on-collision case different then something like on boundary?
;the difference being that on-collision calls the funcs with self and other, rather than with only self and id
;call while generating makes the most sense for collisions
;are they in me? if so call my collision functions with me and them
;put all shape funcionality under :shape maybe? so that when mating you do not get mixed shape issues
;however this runs into issues with the difficulty of the merge
;I think it is ok to shift this complexity to the side of the mating function
(def game-state (atom {
	   1
	   {:x 1001
     	   :y 15
	:x-min 1000 
	
	:point-func #'box-closest
        :R 255
        :timers {
         :mating 30000
         } 
	   :vx -150
	   :vy 15
;I first asked myself why have a seperate section for these? How is this different than a section for boundary funcs or any other conditional?
;The answer is that this is multiple conditionals with multilpe things being affected depending on the conditionals. Not quite as simple as boundary.
;and definitely worthy of seperate section.
	   :on-collision{
	:create #'create
		}
;Why is this a map and not a vector? So that merges can happen in mating, and so that functions could add, remove, or replace functions by type.
;eg two collide one has the alcholic affect, which changes, or wraps the move function to drunken.
	   :funcs {
           :timer #'timer
	   :move #'move
;this will grab the entire game state and return a change object to collisions for self to set it to
;	   :jargo #'move
	   :boundary #'wrap
	}
   	   :draw #'draw-rectangle
	}
	   2
	   {:x 40
	   :y 150
        :timers {
         :mating 100
         } 
	:point-func #'box-closest
:G 255
:x-min 1000
	   :on-collision{
	:create #'create
		}
	   :vx 7
	   :vy 25
	:funcs {
           :timer #'timer
	   :move #'move
	:boundary #'bounce-in-boundary
	}
	   :draw #'draw-rectangle
}
	   3
	   {:x 40
	   :y 150
:B 255
        :timers {
         :mating 100
         } 
	:point-func #'box-closest
	   :on-collision{
	:create #'create
		}
:x-min 1000
	   :vx 8
	   :vy 25
	:funcs {
           :timer #'timer
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
