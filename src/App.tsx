import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/Store";
import styled from 'styled-components';
import Profile from "./Componets/Profile";
import Logo from "./Componets/Logo";
import Login from './Componets/Login';
import {authAC} from "./redux/Auth-reducer";

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FFFF;
  text-align: center;
`;

function App() {


	const isAuth = useSelector<AppRootStateType, boolean>(state => state.authReducer.isAuth)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		const login = localStorage.getItem('login')
		const password = localStorage.getItem('password');
		if (!!login && !!password) {
			dispatch(authAC(login, password, true))
		}
		if (isAuth) {
			navigate("/profile");
		} else {
			navigate("/login");
		}
	}, [isAuth, dispatch, navigate]);

	return (
		<Content>
			<Logo/>
			<Routes>
				<Route path='login' element={<Login/>}/>
				<Route path='profile' element={<Profile/>}/>
			</Routes>
		</Content>
	);
}

export default React.memo(App);
