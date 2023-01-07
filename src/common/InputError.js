function InputError({ error, touched }) {
    return <>{error && touched && <p className="error-msg">{error}</p>}</>;
}

export default InputError;
