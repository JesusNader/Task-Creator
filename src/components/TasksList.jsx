function TasksList(props) {
    return(
        <ul className="tasks-list">
            {props.children}
        </ul>
    );
}

export { TasksList };