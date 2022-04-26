import { Route, Routes } from "react-router-dom";
import { UserModel } from "../../../models/User.model";
import Task from "../../Task/Task";

const Body = (props: BodyProps) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={createTasks(props.userData || [])} />
                <Route path="/detail" element={<div>Detail View</div>} />
            </Routes>
      
        </div>
    );
}

const createTasks = (users: UserModel[]) => {
    
    return users.map((user: UserModel) => {
        return <Task key={user.id} userData={user} />;
    })
}

interface BodyProps {
    userData: any;
}

export default Body;