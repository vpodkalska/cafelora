import './drink.css'
import { Layer } from '../Layer/layer'

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
            {layers.map(layer =>
              <Layer
                key={layer.label}
                color={layer.color}
                label={layer.label}
              />
            )}
        </div>
      </div>
      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value="1" />
        <button className= {`order-btn ${ordered ? 'order-btn--ordered' : ''}`}>
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  )
}
