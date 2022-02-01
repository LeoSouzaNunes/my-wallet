export default function handleChange(setState, state, e) {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
}
