export function Todos() {
    const sampleTodos = [
        { id: "blah", title: "Sample Title", text: "Lorem ipsum blah blah" },
    ];
    const allTodos = sampleTodos.map((todo, todoIndex) => (
        <div key={todoIndex.toString() + "-" + todo.title}>
            <h1>{todo.title}</h1>
            <p>{todo.text}</p>
        </div>
    ));
    return <>{allTodos}</>;
}
