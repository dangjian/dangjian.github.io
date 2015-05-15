/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 5/12/15
 */

var TodoStore = function() {
    var CHANGE_EVENT = 'change';
    var _todos = {};

    function create(text) {
        // Hand waving here -- not showing how this interacts with XHR or persistent
        // server-side storage.
        // Using the current timestamp + random number in place of a real id.
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        _todos[id] = {
            id: id,
            complete: false,
            text: text
        };
    }


    function ToObject(val) {
        if (val == null) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
    }

    function assign (target, source) {
        var from;
        var keys;
        var to = ToObject(target);

        for (var s = 1; s < arguments.length; s++) {
            from = arguments[s];
            keys = Object.keys(Object(from));

            for (var i = 0; i < keys.length; i++) {
                to[keys[i]] = from[keys[i]];
            }
        }

        return to;
    }

    function update(id, updates) {
        _todos[id] = assign({}, _todos[id], updates);
    }

    function updateAll(updates) {
        for (var id in _todos) {
            update(id, updates);
        }
    }

    function destroy(id) {
        delete _todos[id];
    }

    function destroyCompleted() {
        for (var id in _todos) {
            if (_todos[id].complete) {
                destroy(id);
            }
        }
    }

    AppDispatcher.register(function(action) {
        var text;

        switch(action.actionType) {
            case 'TODO_CREATE':
                text = action.text.trim();
                if (text !== '') {
                    create(text);
                    TodoStore.emitChange();
                }
                break;

            case 'TODO_TOGGLE_COMPLETE_ALL':
                if (TodoStore.areAllComplete()) {
                    updateAll({complete: false});
                } else {
                    updateAll({complete: true});
                }
                TodoStore.emitChange();
                break;

            case 'TODO_UNDO_COMPLETE':
                update(action.id, {complete: false});
                TodoStore.emitChange();
                break;

            case 'TODO_COMPLETE':
                update(action.id, {complete: true});
                TodoStore.emitChange();
                break;

            case 'TODO_UPDATE_TEXT':
                text = action.text.trim();
                if (text !== '') {
                    update(action.id, {text: text});
                    TodoStore.emitChange();
                }
                break;

            case 'TODO_DESTROY':
                destroy(action.id);
                TodoStore.emitChange();
                break;

            case 'TODO_DESTROY_COMPLETED':
                destroyCompleted();
                TodoStore.emitChange();
                break;

            default:
            // no op
        }
    });

    return {
        areAllComplete: function() {
            for (var id in _todos) {
                if (!_todos[id].complete) {
                    return false;
                }
            }
            return true;
        },
        getAll: function() {
            return _todos;
        },
        emitChange: function() {
            this.trigger(CHANGE_EVENT);
        },

        /**
         * @param {function} callback
         */
        addChangeListener: function(callback) {
            this.bind(CHANGE_EVENT, callback);
        },

        /**
         * @param {function} callback
         */
        removeChangeListener: function(callback) {
            this.unbind(CHANGE_EVENT, callback);
        }
    };
}();

MicroEvent.mixin(TodoStore);