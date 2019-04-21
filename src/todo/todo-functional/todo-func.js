import React, { useReducer, useContext, useEffect } from 'react'
import './todo-func.css'
import axios from '../../service/axios-instance'

function appReducer(state, action) {
    switch (action.type) {
        case 'reset': {
            return [...action.payload]
        }
        case 'add': {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: '',
                    completed: false
                }
            ]
        }
        case 'delete': {
            return state.filter(item => item.id !== action.payload)
        }
        case 'completed': {
            console.log('item: ', state, action)
            return state.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
        }
        default: {
            return state
        }
    }
}

const Context = React.createContext()

const todo = () => {

    const [state, dispatch] = useReducer(appReducer, [])

    useEffect(() => {
        let raw = localStorage.getItem('data');
        dispatch({ type: 'reset', payload: JSON.parse(raw) })
    }, [])

    useEffect(() => {
        console.log('state:: ',state.length)
        if(state.length < 10) localStorage.setItem('data', JSON.stringify(state));
        
    }, [state])


    const vals = {
        dispatch,
        one: 1
    }

    return (

        <Context.Provider value={dispatch}>
            <div className="container">
                <button onClick={() => dispatch({ type: 'add' })}>NEW TODO </button>
                { (state.length >= 10) ?  <p>We are storing 10 items only</p> : '' }
                <TodoList items={state} dispatch={dispatch} />
            </div>
        </Context.Provider>
    )
};

function TodoList({ items }) {
    console.log('items::: ', items)
    return items.map(item => <TodoItem key={item.id} {...item} />)
}

function TodoItem({ id, completed, text }) {
    const dispatch = useContext(Context);
    return (
        <div className="todo--item">
            <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'completed', payload: id })} />
            <input type="text" defaultValue={text} />
            <button onClick={() => dispatch({ type: 'delete', payload: id })}> Delete</button>
        </div>
    );
}


export default todo