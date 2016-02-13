(ns <%= namespace %>.<%= domain %>.list.subscribers
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :refer [register-sub]])))

;; return list of item ids
(defn get-<%= domain %>-list
  [db, []]
  (reaction [db [1]]))

(register-sub
 :get-<%= domain %>-list
 get-<%= domain %>-list) 