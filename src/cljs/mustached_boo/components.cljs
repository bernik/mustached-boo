(ns mustached-boo.components
  (:require [sablono.core :as sab]))

(defn likes-counter [data]
  (sab/html [:div
             [:h1 "Лайков поставлено: " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Like!!!"]]]))
