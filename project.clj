(defproject mustached-boo "1.0.0-SNAPSHOT"
  :description "it's just mustached boo"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.6"]
                 [figwheel-sidecar "0.4.0" :scope "provided"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
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
