(defproject mustached-boo "1.0.0-SNAPSHOT"
  :description "it's just mustached boo"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [om "0.8.0-alpha2"]  ;; react
                 [sablono "0.2.22"]   ;; html hiccup style renderer
                 [secretary "1.2.1"]] ;; routing

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/mustached_boo"]

  :cljsbuild {
    :builds {
             :dev {
               :source-paths ["src"]
               :compiler {
                 :output-to "webroot/js/dev/main.js"
                 :output-dir "webroot/js/dev/out"
                 :optimizations :none
                 :pretty-print true
                 :source-map true}}
             :release {
               :source-paths ["src"]
               :compiler {
                 :output-to "webroot/js/app/main.js"
                 :output-dir "webroot/js/app"
                 :optimizations :advanced
                 :pretty-print false
                 ;:preamble ["webroot/js/lib/react.min.js"]
                 ;:externs ["webroot/js/lib/react/externs/react.js"]
                          }}}})
