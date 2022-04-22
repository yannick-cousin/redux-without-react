// ACTIONS
const incrementAction = {
	type: 'INCREMENT',
};

const decrementAction = {
	type: 'DECREMENT',
};

const incrementByTenAction = {
	type: 'INCREMENT BY 10',
};

const decrementByTenAction = {
	type: 'DECREMENT BY 10',
};

const resetAction = {
	type: 'RESET',
};

let initialState = 0;
// REDUCER
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'INCREMENT BY 10':
			return state + 10;
		case 'DECREMENT BY 10':
			return state - 10;
		case 'RESET':
			return (state = 0);
		default:
			return state;
	}
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById('counter-render');
const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');
const incrementByTenButton = document.getElementById('button-increment-ten');
const decrementByTenButton = document.getElementById('button-decrement-ten');
const resetButton = document.getElementById('button-reset');

const render = () => {
	counterRender.innerText = store.getState();
};

render();
store.subscribe(render);

incrementButton.addEventListener('click', () =>
	store.dispatch(incrementAction)
);
decrementButton.addEventListener('click', () =>
	store.dispatch(decrementAction)
);
incrementByTenButton.addEventListener('click', () =>
	store.dispatch(incrementByTenAction)
);
decrementByTenButton.addEventListener('click', () =>
	store.dispatch(decrementByTenAction)
);
resetButton.addEventListener('click', () => store.dispatch(resetAction));
