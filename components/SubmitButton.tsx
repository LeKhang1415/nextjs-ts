import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className={btnStyle} disabled={pending}>
            {pending ? "submitting..." : "submit"}
        </button>
    );
};

export default SubmitButton;

const btnStyle =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
