import './App.css';
import TodoItem from './components/TodoItem';
import tododata from './data/tododata';


function App() {
    return (
        <div className="App">
            {/* <ul>
                <TodoItem
                    item={"Bug Grocery"}
                />
                <TodoItem
                    item={"Send Email"}
                />
                <TodoItem
                    item={"Finish Assignment"}
                />
                <TodoItem
                    item={"Write Blog"}
                />
                <TodoItem
                    item={"Bake Cake"}
                />
            </ul> */}

            {tododata.map((elt) =>
                <TodoItem
                    item={elt.task}
                />
            )}

        </div>
    );
};

export default App;
