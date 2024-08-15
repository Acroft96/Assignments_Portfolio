import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState ({
        name:"",
        position:"",
        level: "",
    });

    const navigate = useNavigate();

    function updateForm(jsonObj) {
        return setForm((prevJsonObj) => {
            return { ...prevJsonObj, ...jsonObj};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const newPerson = {...form};
        await fetch("http://localhost:4000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ name: "", position: "", level: ""});
        navigate("/");
    }

    return (
        <div>
            <h3>Create Record</h3>
            <form onSubmit={onSubmit}>
               <div>
                <label>Name: </label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })} 
                />
                </div>
                <div>
                <label>Position: </label>
                <input
                    type="text"
                    id="position"
                    value={form.position}
                    onChange={(e) => updateForm({ position: e.target.value })} 
                />
                </div>
                <div>
                <label>Level: </label>
                <input
                    type="text"
                    id="level"
                    value={form.level}
                    onChange={(e) => updateForm({ level: e.target.value })} 
                />
                </div>
                <br/>
                <div>
                    <input
                        type="submit"
                        value="Create Record"
                    />
                </div>
            </form>
        </div>
    );
}
