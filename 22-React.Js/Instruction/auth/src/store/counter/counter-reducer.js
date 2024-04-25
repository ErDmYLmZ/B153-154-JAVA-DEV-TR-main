import { COUNTER_DOWN, COUNTER_UP } from "../types";
import { counterInitialState } from "./counter-initial-state";


// Reducer state i günceller

// acition -> { type: COUNTER_UP, payload: 33 }

export const counterReducer = (state=counterInitialState, action) => {
    if(action.type === COUNTER_UP){
        return {...state, counter: state.counter + action.payload}
    }
    else if(action.type === COUNTER_DOWN){
        return {...state, counter: state.counter - action.payload}
    }

    // Bu satır hiç bir if case ine girmediğinde mevcut state i geri döndürür. 
    // Eğer bu satır yazılmazsa, hiç bir if case ine girmediğinde state undefined olur.
    // State e bakan tüm component ler hata vermeye başlar.
    return state;
}