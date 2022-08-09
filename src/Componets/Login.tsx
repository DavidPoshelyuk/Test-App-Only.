import React, {useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import Error from "./Error";
import {useDispatch, useSelector} from "react-redux";
import {authAC} from "../redux/Auth-reducer";
import {AppRootStateType} from "../redux/Store";


const WrapperForm = styled.div`
  margin-top: 5%;
  width: 100%;

  form {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    max-width: 640px;
    width: 100%;
    height: 60px;
    background-color: #F5F5F5;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }

  input:focus {
    outline: none;
  }

  button {
    height: 60px;
    max-width: 640px;
    width: 100%;
    border-radius: 8px;
    border: none;
    color: #FFFF;
    font-size: 18px;
    background-color: #4A67FF;
    transition: all ease-in-out 0.2s;
  }

  button:hover {
    background-color: #627dff;
  }

  button:disabled {
    opacity: 0.5;
  }

  .checkbox {
    border-radius: 4px;
    width: 19px;
    height: 19px;
    border: 1px solid black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    caret-color: transparent;

    &.active::before {
      caret-color: transparent;
      content: '';
      position: absolute;
      background-color: #4A67FF;
      width: 14px;
      height: 14px;
      border-radius: 2px;
    }


  }

  .wrapper-checkbox {
    height: 60px;
    max-width: 640px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
      margin-left: 10px;
    }
  }

  .field {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      max-width: 640px;
      text-align: start;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;
      margin-top: 30px;
      width: 100%;
    }
  }

  .error-field {
    border: 1px solid #E26F6F;
  }

  p {
    margin-top: 5px;
    max-width: 640px;
    width: 100%;
    font-size: 14px;
    color: #E26F6F;
    text-align: start;
  }
`

interface FormValues {
	login: string;
	password: string;
}

const Login = () => {
	const error = useSelector<AppRootStateType, string | null>(state => state.authReducer.error)
	const dispatch = useDispatch()


	const [isFetching, setFetching] = useState<boolean>(false)
	const [isRemember, setRemember] = useState<boolean>(false)

	const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>();

	const onSubmit = handleSubmit((data) => {
		setFetching(true)
		setTimeout(() => {
			dispatch(authAC(data.login, data.password, isRemember))
			reset()
			setFetching(false)
		}, 1000)
	})

	const ErrorElement = useMemo(() => {
		if (error) {
			return <Error message={error}/>
		}
	}, [error])

	return (
		<WrapperForm>
			<form onSubmit={onSubmit}>
				{!!error && ErrorElement}
				<div className='field'>
					<label>Логин</label>
					<input
						className={`${errors?.login?.type === "required" || errors?.login?.type === "pattern" ? 'error-field' : ''}`}
						{...register("login", {
							required: true,
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
						})} />
				</div>
				{errors?.login?.type === "required" && <p>Обязательное поле</p>}
				{errors?.login?.type === "pattern" && <p>Не верный формат</p>}
				<div className='field'>
					<label>Пароль</label>
					<input
						type='password'
						className={`${errors?.password?.type === "required" ? 'error-field' : ''}`}
						{...register("password", {required: true,})}
					/>
				</div>
				{errors?.password?.type === "required" && <p>Обязательное поле</p>}
				<div className='wrapper-checkbox'>
					<div onClick={() => {
						setRemember((state) => !state)
					}} className={`checkbox ${isRemember ? 'active' : ''}`}/>
					<label>Запомнить меня</label>
				</div>
				<button disabled={isFetching} type="submit">Войти</button>
			</form>
		</WrapperForm>
	);
}

export default React.memo(Login)