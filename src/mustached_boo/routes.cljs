(ns mustached-boo.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:import goog.History))

(secretary/set-config! :prefix "#")

(defroute "/" []
  (js/console.log "home"))

(defroute "/foo/:name" [name query-params]
  (js/console.log (str "name: " name))
  (if (not (empty? query-params))
    (js/console.log (pr-str query-params))))

(defroute "/bar" []
  (js/console.log "bar"))

(defroute "*" []
  (js/console.log "all"))

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))
