import React from "react"
import {SearchPanel} from "./search-panel"
import {List} from "./list"
import { useEffect,useState } from "react"
import { cleanObject, useMount,useDebounce} from "../../utils"
// import {useDebounce} from "../../utils/index"
import * as qs from "qs";
import { useHttp } from "../../utils/http"

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreens = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedParam = useDebounce(param,2000)
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    const client = useHttp()
    useEffect(() => {
        client('projects',{data:cleanObject(debouncedParam)}).then(setList)
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response =>{
        //     if(response.ok){
        //         setList(await response.json())
        //     }
        // })
    },[debouncedParam])
    useMount(()=>{
        client('users').then(setUsers)

        // fetch(`${apiUrl}/users`).then(async response =>{
        //     if(response.ok){
        //         setUsers(await response.json())
        //     }
        // })
    },)
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} List={list}/>
    </div>
}