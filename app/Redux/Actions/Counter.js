const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    const {count} = state;
    switch (action.type) {
        case INCREMENT:
            return {
                count: count + 1
            };
        case DECREMENT:
            return {
                count: count - 1
            };

        default:
            return state;
    }
}

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}
