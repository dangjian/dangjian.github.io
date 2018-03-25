/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 5/15/15
 */

var ENTER_KEY_CODE = 13;
var ReactPropTypes = React.PropTypes;
var cx = React.addons.classSet;
var TodoTextInput = React.createClass({

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },

    getInitialState: function() {
        return {
            value: this.props.value || ''
        };
    },

    /**
     * @return {object}
     */
    render: function() /*object*/ {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this._save}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
                autoFocus={true}
            />
        );
    },

    /**
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways.
     */
    _save: function() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    },

    /**
     * @param {object} event
     */
    _onChange: function(/*object*/ event) {
        this.setState({
            value: event.target.value
        });
    },

    /**
     * @param  {object} event
     */
    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }

});

var Header = React.createClass({

    /**
     * @return {object}
     */
    render: function() {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoTextInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onSave={this._onSave}
                />
            </header>
        );
    },

    /**
     * Event handler called within TodoTextInput.
     * Defining this here allows TodoTextInput to be used in multiple places
     * in different ways.
     * @param {string} text
     */
    _onSave: function(text) {
        if (text.trim()){
            TodoActions.create(text);
        }

    }

});

var TodoItem = React.createClass({

    propTypes: {
        todo: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isEditing: false
        };
    },

    /**
     * @return {object}
     */
    render: function() {
        var todo = this.props.todo;

        var input;
        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={this._onSave}
                    value={todo.text}
                />;
        }

        // List items should get the class 'editing' when editing
        // and 'completed' when marked as completed.
        // Note that 'completed' is a classification while 'complete' is a state.
        // This differentiation between classification and state becomes important
        // in the naming of view actions toggleComplete() vs. destroyCompleted().
        return (
            <li
                className={cx({
                    'completed': todo.complete,
                    'editing': this.state.isEditing
                })}
                key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this._onToggleComplete}
                    />
                    <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroyClick} />
                </div>
        {input}
            </li>
        );
    },

    _onToggleComplete: function() {
        TodoActions.toggleComplete(this.props.todo);
    },

    _onDoubleClick: function() {
        this.setState({isEditing: true});
    },

    /**
     * Event handler called within TodoTextInput.
     * Defining this here allows TodoTextInput to be used in multiple places
     * in different ways.
     * @param  {string} text
     */
    _onSave: function(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    },

    _onDestroyClick: function() {
        TodoActions.destroy(this.props.todo.id);
    }

});

var MainSection = React.createClass({

    propTypes: {
        allTodos: ReactPropTypes.object.isRequired,
        areAllComplete: ReactPropTypes.bool.isRequired
    },

    /**
     * @return {object}
     */
    render: function() {
        // This section should be hidden by default
        // and shown when there are todos.
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        var allTodos = this.props.allTodos;
        var todos = [];

        for (var key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{todos}</ul>
            </section>
        );
    },

    /**
     * Event handler to mark all TODOs as complete
     */
    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }

});

var Footer = React.createClass({

    propTypes: {
        allTodos: ReactPropTypes.object.isRequired
    },

    /**
     * @return {object}
     */
    render: function() {
        var allTodos = this.props.allTodos;
        var total = Object.keys(allTodos).length;

        if (total === 0) {
            return null;
        }

        var completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        // Undefined and thus not rendered if no completed items are left.
        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick}>
                Clear completed ({completed})
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
            {itemsLeft}
                    </strong>
          {itemsLeftPhrase}
                </span>
        {clearCompletedButton}
            </footer>
        );
    },

    /**
     * Event handler to delete all completed TODOs
     */
    _onClearCompletedClick: function() {
        TodoActions.destroyCompleted();
    }

});

function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

var TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getTodoState());
    }

});
