import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {outAC} from "../redux/Auth-reducer";
import {AppRootStateType} from "../redux/Store";


const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  padding: 100px;

  label {
    font-size: 40px;
  }

  button {
    margin-top: 20px;
    font-size: 18px;
    border: none;
    max-width: 200px;
    height: 60px;
    width: 100%;
    border-radius: 8px;
    background-color: #F5F5F5;
    color: black;
    font-weight: 700;
  }

  button:hover {
    background-color: #cbcbcb;
    transition: all ease-in-out 0.2s;
  }
  @media (max-width: 720px){
    label{
	  font-size: 20px;
	}
  }
`

const Profile = () => {
	const login = useSelector<AppRootStateType, string>(state => state.authReducer.login)
	const dispatch = useDispatch()
	return (
		<WrapperProfile>
			<label>Здравствуйте, <b>{login}</b></label>
			<button onClick={() => {
				dispatch(outAC())
			}}>Выйти
			</button>
		</WrapperProfile>
	);
};

export default React.memo(Profile);