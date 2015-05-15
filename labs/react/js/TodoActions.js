/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 5/14/15
 */

var TodoActions = {
    create: function(text) {
        AppDispatcher.dispatch({
            actionType: 'TODO_CREATE',
            text: text
        });
    },
    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: 'TODO_UPDATE_TEXT',
            id: id,
            text: text
        });
    },
    toggleComplete: function(todo) {
        var id = todo.id;
        var actionType = todo.complete ?
            'TODO_UNDO_COMPLETE' :
            'TODO_COMPLETE';

        AppDispatcher.dispatch({
            actionType: actionType,
            id: id
        });
    },
    toggleCompleteAll: function() {
        AppDispatcher.dispatch({
            actionType: 'TODO_TOGGLE_COMPLETE_ALL'
        });
    },
    destroy: function(id) {
        AppDispatcher.dispatch({
            actionType: 'TODO_DESTROY',
            id: id
        });
    },
    destroyCompleted: function() {
        AppDispatcher.dispatch({
            actionType: 'TODO_DESTROY_COMPLETED'
        });
    }
};