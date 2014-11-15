(ns mustached_boo.app)

(defrecord Foo [bar baz name])

(defn main []
  (let [
        f1 (Foo. "bar1" "baz1" "f1")
        f2 (Foo. "bar2" "baz2" "f2")
        m {:foo "i am map"}]
    (.log js/console f1)
    (.log js/console f2)
    (.log js/console m)))



(main)
