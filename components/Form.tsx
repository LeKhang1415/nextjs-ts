"use client";

import { createUser } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

function Form() {
    const [message, formAction] = useFormState(createUser, null);
    return (
        <form action={formAction} className={formStyle}>
            {message && <p>{message}</p>}
            <h2 className="text-2xl capitalize mb-4">create user</h2>
            <input
                type="text"
                name="firstName"
                required
                className={inputStyle}
                defaultValue="peter"
            />
            <input
                type="text"
                name="lastName"
                required
                className={inputStyle}
                defaultValue="smith"
            />
            <SubmitButton />
        </form>
    );
}
export default Form;

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
