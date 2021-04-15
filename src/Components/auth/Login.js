import React, { useState } from 'react';

const Login = () => {

    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    })

    const onChange = text => event => {
        setUserInput({...userInput, [text]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const loginUser => {
        email: userInput.email,
        password: userInput.password
    }

    }
    return (
        <div className={"register"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-8 m-auto"}>
                        <h1 className={"display-4 text-center"}>Login</h1>
                        <p className={"lead text-center"}>
                            You Can Login Here
                        </p>

                        <form onSubmit={onsubmit}>
                            <div className={"form-group"}>
                                <input
                                    type={"email"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Email"}
                                    name={"email"}
                                    value={userInput.email}
                                    onChange={onchange('email')}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input
                                    type={"password"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Password"}
                                    name={"password"}
                                    value={userInput.password}
                                    onChange={onchange('password')}
                                />
                            </div>
                            <input
                                type={"submit"}
                                className={"btn btn-info btn-block mt-4"}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
