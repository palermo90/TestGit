import SimpleListItem from "./SimpleListItem"

const SimpleList = function(props) {
    const { cars } = props

    const carsJSX = cars.map(
        p => <SimpleListItem key={p.id}
                name={p.name}
                price={p.price}
                power_supply={p.power_supply}></SimpleListItem>
    )
    // [<li key=1>Salameche : Feu</li>,
    //  <li key=1>Carapuce : Eau</li>,
    //  <li key=1>Bulbizarre : Plante</li>]

    return (
        <div>
            {carsJSX}
        </div>
    )
}

export default SimpleList