import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import reducer, { initialState } from "../reducers";
import { applyNumber, changeOperation, clearDisplpay, saveToMemory, readFromMemory, clearMemory } from "../actions/index";

function App() {
    // connect reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const addOneHandler = () => {
        dispatch(addOne());
    };

    const processNumberHandler = (number) => {
        dispatch(applyNumber(number));
    };

    const processOperationHandler = (operation) => {
        dispatch(changeOperation(operation));
    };

    const processClearDisplay = () => {
        dispatch(clearDisplpay());
    };

    const save = () => {
        dispatch(saveToMemory());
    };

    const read = () => {
        dispatch(readFromMemory());
    };

    const clear = () => {
        dispatch(clearMemory());
    };

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <a
                    className="navbar-brand"
                    href="#">
                    {" "}
                    Reducer Challenge
                </a>
            </nav>

            <div className="container row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <form name="Cal">
                        <TotalDisplay value={state.total} />
                        <div className="row details">
                            <span id="operation">
                                <b>Operation:</b> {state.operation}
                            </span>
                            <span id="memory">
                                <b>Memory:</b> {state.memory}
                            </span>
                        </div>

                        <div className="row">
                            <CalcButton
                                value={"M+"}
                                onClick={() => save()}
                            />
                            <CalcButton
                                value={"MR"}
                                onClick={() => read()}
                            />
                            <CalcButton
                                value={"MC"}
                                onClick={() => clear()}
                            />
                        </div>

                        <div className="row">
                            {[1, 2, 3].map((number) => (
                                <CalcButton
                                    value={number}
                                    onClick={() => processNumberHandler(number)}
                                    key={number}
                                />
                            ))}
                        </div>

                        <div className="row">
                            {[4, 5, 6].map((number) => (
                                <CalcButton
                                    value={number}
                                    onClick={() => processNumberHandler(number)}
                                    key={number}
                                />
                            ))}
                        </div>

                        <div className="row">
                            {[7, 8, 9].map((number) => (
                                <CalcButton
                                    value={number}
                                    onClick={() => processNumberHandler(number)}
                                    key={number}
                                />
                            ))}
                        </div>

                        <div className="row">
                            {["+", "*", "-"].map((operator) => (
                                <CalcButton
                                    value={operator}
                                    onClick={() => processOperationHandler(operator)}
                                    key={operator}
                                />
                            ))}
                        </div>

                        <div className="row ce_button">
                            <CalcButton
                                value={"CE"}
                                onClick={() => processClearDisplay()}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
