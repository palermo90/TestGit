// const Bienvenue = {
//     name: "Oscar"
//     age: 18
// }

// const {name, age} = Bienvenue

const Welcome = function(props) {

    const { name, age, ageVisible } = props



    // Equivalent
    // const name = props.name
    // const age = props.age


    return (
        <div>
            <h1>Bonjour {name}</h1>
        {
            ageVisible ? (
                <p>Vous avez {age} ans!</p>
            ) : (
                <p>Age caché</p>
            )
        }
            <p>Vous avez {age} ans!</p>
        </div>
    )
}

Welcome.defaultProps = {
    name : "Oscar",
    age : 18,
    ageVisible: true
}

export default Welcome
