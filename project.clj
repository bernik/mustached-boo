(defproject mustached-boo "1.0.0-SNAPSHOT"
  :description "it's just mustached boo"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [sablono "0.3.6"]]
  :plugins [[lein-figwheel "0.4.1"]]
  :clean-targets [:target-path "out" "resources/public/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "mustached-boo.core/render!"}
                        :compiler {:main "mustached-boo.core"
                                   :asset-path "cljs/out"
                                   :output-dir "resources/public/cljs/out"
                                   :output-to "resources/public/cljs/main.js"
                                   :optimizations :none
                                   :source-map "resources/public/cljs/main.js.map"}
                        }]}
  :figwheel {:css-dirs ["resources/public/css"]})
