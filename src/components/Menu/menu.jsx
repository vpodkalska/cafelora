import './menu.css'
import { Drink } from '../Drink/drink'

export const Menu = ({}) => {
  return (
    <section id='menu' className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">

          <Drink
            id = ""
            name="Doppio"
            ordered=""
            image="/cups/doppio.png"
          />



          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </div>
    </section>

  )
}

/*
<Drink
  id={0}
  name="Romano"
  ordered={false}
  image="http://localhost:4000/assets/cups/romano.png"
  layers={[
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]}
/>

*/