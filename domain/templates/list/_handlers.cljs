(ns <%= domain %>.list.handlers
    (:require [re-frame.core :refer [register-handler]]))

;; <%= domain %> list handlers

(defn new-<%= domain %>-list []
  (fn [db, [id]]
    ;; ...
    ))

(defn delete-<%= domain %>-list []
  (fn [db, [id]]
    ;; ...
    ))

(register-handler :new-<%= domain-list %> new-<%= domain %>-list)
(register-handler :delete-<%= domain-list %> delete-<%= domain %>-list)
