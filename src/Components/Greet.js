// function Greet() {
//     return <h1>Hello</h1>
// }

// export default Greet

// ====== ES6 version arrow function ====== //

// const Greet = () => <h1>Hello</h1>

// export default Greet

// ===== Name Export ======== //

export const Greet = (props) => {
    return(
        <h1>Hello {props.name}</h1>
    )

}