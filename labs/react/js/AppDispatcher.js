/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 5/12/15
 */

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};