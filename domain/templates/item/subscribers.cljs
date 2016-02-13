(ns <%= namespace %>.<%= domain %>.item.subscribers
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

;; <%= domain %> subscribers
;; Tip: use re-frame reaction macro

(def mock-<%= domain %>-item
  {:id 1, :name "<%= domain %> item"})

;; return single item record
(defn get-<%= domain %>-item
  [db, [id]]
  (reaction [db mock-<%= domain %>-item]))

(register-sub
 :get-<%= domain %>-item
 get-<%= domain %>-item)
