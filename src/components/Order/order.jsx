import './order.css'
import { OrderItems } from '../OrderItems/orderItems'

export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objednávka</h1>
        {items.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {items.map(item => (
              <OrderItems
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
