(ns mustached-boo.core
  (:require [mustached-boo.components :refer [likes-counter]]))

(defonce app-state (atom {:likes 0}))

(defn render! []
  (.render js/React
           (likes-counter app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))
(render!)
