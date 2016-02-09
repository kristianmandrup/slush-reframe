(ns <%= domain %>.item.subscribers
    (:require-macros [reagent.ratom :refer [reaction]])

;; <%= domain %> subscribers
;; TODO: use reaction macro

(def mock-<%= domain %>-item
  {id: 1 name: "<%= domain %> item"})

;; return single item record
(defn get-<%= domain %>-item
  [db, [id]]
  (reaction [db mock-<%= domain %>-item])

;; return list of item ids
(defn get-<%= domain %>-list
  [db, []]
  (reaction [db [mock-<%= domain %>-item])