(ns <%= domain %>.item.handlers
    (:require [re-frame.core :refer [register-handler]]))

;; <%= domain %> handlers

(defn new-<%= domain %> []
  (fn [db, [id]]
    ;; ...
    ))

(defn edit-<%= domain %> []
  (fn [db, [id]]
    ;; ...
    ))

(defn delete-<%= domain %> []
  (fn [db, [id]]
    ;; ...
    ))

(register-handler :new-<%= domain %> new-<%= domain %>)
(register-handler :edit-<%= domain %> edit-<%= domain %>)
(register-handler :delete-<%= domain %> delete-<%= domain %>)

