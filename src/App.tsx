import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from './component/News/News';
import {Music} from './component/Music/Music';
import {Settings} from "./component/Settings/Settings";
import {DialogContainer} from "./component/Dialogs/DialogContainer";
import {UsersContainer} from "./component/Users/UsersContainer";
import {ProfileContainer} from "./component/Profile/ProfileInfo/ProfileContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs'} element={<DialogContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
