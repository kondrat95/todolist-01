import {Button} from "./Button.tsx";
import {Task} from "./App.tsx";


export type TodoListItemProps = {
    title: string
    tasks: Task[]
}

export const TodoListItem = ({title, tasks}: TodoListItemProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'ADD'}/>
            </div>
            {tasks.length === 0 ? (<p>not tasks</p>):(
                <ul>
                    {tasks.map((task: Task) => (
                        <li key={task.id}>
                            <input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    );
};
