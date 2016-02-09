(ns <%= namespace %>.<%= domain %>.list.subscribers
    (:require-macros [reagent.ratom :refer [reaction]])

;; return list of item ids
(defn get-<%= domain %>-list
  [db, []]
  [1])