import { useAuth } from "./context/auth-context"
import { ProjectListScreens } from "./screens/project-list"
import React from "react"
export const AuthenticatedApp = () => {
    const {logout}=useAuth()
    return <div>
            <button onClick={logout}>退出登录</button>
        <ProjectListScreens/>
    </div>
}