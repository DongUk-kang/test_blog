import React, { useState } from 'react';

const Signup = () => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const onChange = text => event => {
        setUserInput({...userInput, [text]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (userInput.password !== userInput.password2) {
            alert("password not Matching")
        }

        const newUser = {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        }

        console.log(newUser)
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1></h1>
                        <p>
                            Create your douguk blog account
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className={"form-group"}>
                                <input
                                    type={"text"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Name"}
                                    name={"name"}
                                    value={userInput.name}
                                    onChange={onChange('name')}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input
                                    type={"text"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Email"}
                                    name={"email"}
                                    value={userInput.password}
                                    onChange={onChange('email')}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input
                                    type={"text"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Password"}
                                    name={"password"}
                                    value={userInput.password}
                                    onChange={onChange('password')}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input
                                    type={"text"}
                                    className={"form-control form-control-lg"}
                                    placeholder={"Confirm Password"}
                                    name={"password2"}
                                    value={userInput.password2}
                                    onChange={}
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

export default MyComponent;
