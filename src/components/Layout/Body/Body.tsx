import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { UserModel } from "../../../models/User.model";
import Session from "../../Session/Session";
import Task from "../../Task/Task";
import { BodyProps } from "./Body.props";

const Body = (props: BodyProps) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={getMainView(props)} />
                <Route path="/detail" element={<div>Detail View</div>} />
            </Routes>
      
        </div>
    );
}

const getMainView = (props: BodyProps) => {
    return (
        <Fragment>
            <Session userData={(props?.userData) ? props.userData[0] : []} />
            {createTasks(props?.userData || [])}
        </Fragment>
    );
}

const createTasks = (users: UserModel[]) => {
    
    return users.map((user: UserModel) => {
        return <Task key={user.id} userData={user} />;
    })
}

export default Body;