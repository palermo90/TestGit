import "./simple_list.css"

const SimpleListItem = function(props) {

    const {name, price, power_supply} = props

    return (
        <ul>
            <li>Nom : {name}</li>
            <li>Price : {price}</li>
            <li className={power_supply === "Electric" ? "green" : ""}>power_supply : {power_supply}</li>
        </ul>
    )
}

export default SimpleListItem