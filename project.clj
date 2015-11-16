(defproject mustached-boo "1.0.0-SNAPSHOT"
  :description "it's just mustached boo"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [figwheel-sidecar "0.4.0" :scope "provided"]]
  :aliases {"clj-test" ["with-profile" "clj" "test"]
            "clj-clean-test" ["do" "clean," "clj-test"]

            "cljs-test" ["with-profile" "cljs" "test"]
            "cljs-clean-test" ["do" "clean," "cljs-test"]}
  :profiles {:clj  {:source-paths ["src/clj"]
                    :dependencies [[com.taoensso/carmine "2.12.0"]]
                    :test-paths   ["test/clj"]}
             :cljs {:source-paths  ["src/cljs"]
                    :dependencies  [[org.clojure/clojurescript "1.7.122"]
                                    [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                                    [sablono "0.3.6"]]
                    :test-paths    ["test/cljs"]
                    :plugins       [[lein-cljsbuild "1.1.0"]]
                    :cljsbuild     {:builds [{:id           "dev"
                                              :source-paths ["src/cljs"]
                                              :figwheel     {:on-jsload "mustached-boo.core/render!"}
                                              :compiler     {:main          "mustached-boo.core"
                                                             :asset-path    "cljs/out"
                                                             :output-dir    "resources/public/cljs/out"
                                                             :output-to     "resources/public/cljs/main.js"
                                                             :optimizations :none
                                                             :source-map    "resources/public/cljs/main.js.map"}
                                              }]}
                    :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
                    :figwheel      {:css-dirs ["resources/public/css"]}
                    }}

  )
