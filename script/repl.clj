(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {}
   :build-ids        ["dev"]
   :all-builds       [{:id           "dev"
                       :figwheel     true
                       :source-paths ["src/cljs"]
                       :compiler     {:main          'mustached-boo.core
                                      :asset-path    "cljs/out"
                                      :output-dir    "resources/public/cljs/out"
                                      :output-to     "resources/public/cljs/main.js"
                                      :optimizations :none
                                      :verbose       true}}]})

(ra/cljs-repl)