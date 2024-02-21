import React, { useEffect, useState } from "react";

export const fetchTodos = (setTodos) => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/yjlmotley")
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("Failed to fetch todo list. Status: " + resp.status);
            }
            return resp.json();
        })
        .then((data) => {
            console.log("Todo List from API", data);
            setTodos(data);
        })
        .catch((error) => {
            console.error("There has been a problem with your fetch operation:", error);
        });
};

const FetchAll = ({ setTodos }) => {
    const [remoteTodos, setRemoteTodos] = useState([]);
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    useEffect(() => {
        if (!initialFetchDone) {
            fetchTodos(setTodos);
            setInitialFetchDone(true);
        }
    }, [setTodos, initialFetchDone]);

    useEffect(() => {
        if (remoteTodos.length > 0) {
            addRemoteTodos();
        }
    }, [remoteTodos, setTodos]);

    const addRemoteTodos = () => {
        setTodos((prevTodos) => [
            ...prevTodos,
            ...remoteTodos.map((todo) => ({
                id: todo.id,
                label: todo.label,
                done: false,
            })),
        ]);
    };

    return null;
};

export default FetchAll;