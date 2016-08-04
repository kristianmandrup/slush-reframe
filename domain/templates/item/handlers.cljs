(ns <%= namespace %>.<%= domain %>.item.handlers
  (:require [re-frame.core :refer [register-handler]]))

;; <%= domain %> handlers

(defn new-<%= domain %> []
  (fn [db, [item]]
    ;; ...
    ))

(defn edit-<%= domain %> []
  (fn [db, [item]]
    ;; ...
    ))

(defn delete-<%= domain %> []
  (fn [db, [item]]
    ;; ...
    ))

(register-handler :new-<%= domain %> new-<%= domain %>)
(register-handler :edit-<%= domain %> edit-<%= domain %>)
(register-handler :delete-<%= domain %> delete-<%= domain %>)

;; handlers to fetch data from server
