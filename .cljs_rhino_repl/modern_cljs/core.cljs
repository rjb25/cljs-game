;; create the main project namespace
(ns modern-cljs.core)
;; enable cljs to print to the JS console of the browser
(enable-console-print!)
;FRAMES
(def fps (atom 0))
(def tick-count (atom 0))
(def tick-total (atom 0))
(defn reset-count [] (.log js/console @fps @tick-count @tick-total) (reset! fps 0)(reset! tick-count 0))
(defn new-object [object collection]
(conj collection object)
)

;;MOVEMENT
(defn move [{:keys [x y vx vy]}]
{:x (+ x (/ vx 10)) :y (+ y (/ vy 10))}
)

(defn loop-in-boundary [{:keys [x y vx vy] :as object}]
(if (or (< x 0)(> x 700))
{:x 0}
(if (or (< y 0) (> y 600))
{:y 0}
(move object))))

(defn bounce-in-boundary [{:keys [x y vx vy] :as object}]
(if (or (< x 0)(> x 700))
{:x (* vx -1)}
(if (or (< y 0) (> y 600))
{:y (* vy -1)}

(move object))))

(defn accelerate [{:keys [vx vy]}]
{:vx (+ vx .01) :vy (+ vy .01)}
)
;CORE
(defn update-collection
"updates all members of collection by merging changes. Returns a new collection"
[function old build]
(into [] (map #(merge %2 (function %1)) old build)))


(.addEventListener
  js/window
  "DOMContentLoaded"
(fn []
(def ctx (.getContext (.getElementById js/document "canvas") "2d"))

(defn draw-rectangle
[x y]
(.beginPath ctx)
(set! (.-fillStyle ctx) "red")
(.fillRect ctx x y 10 10)
(.closePath ctx)
)

(def state (atom [
	  {:x 4
     	   :y 15
	   :vx -2
	   :vy -20
   	   :draw draw-rectangle}
	  {:x 4
	   :y 150
	   :vx 5
	   :vy 15
	   :draw draw-rectangle}
	  {:x 4
	   :y 150
	   :vx 10
	   :vy 15
	   :draw draw-rectangle}
	  {:x 4
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
	  {:x 17
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
	  {:x 114
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
	  {:x 411
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
	  {:x 44
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
	  {:x 300
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle}
]
))


(defn update [] 
(->> @state 
(update-collection loop-in-boundary @state)
(update-collection accelerate @state)
(new-object 
	  {:x 300
	   :y 150
	   :vx 7
	   :vy 15
	   :draw draw-rectangle})
(reset! state))
(reset! tick-count (inc @tick-count))
(reset! tick-total (inc @tick-total))
)

(defn graphics [] 
 (.clearRect ctx 0 0 700 600)
 (doseq [draw @state] 
   ((:draw draw) (:x draw) (:y draw)))
(reset! fps (inc @fps))
)

(def update-interval (js/setInterval update (/ 1000 25)))
(def graphics-interval (js/setInterval graphics 0))
(def per-second-interval (js/setInterval reset-count 1000))
))


;(require '[modern-cljs.core :as c] :reload)
