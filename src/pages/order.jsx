import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Order } from '../components/Order/order';


const responseOrder = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const data = await responseOrder.json();
const orderData = data.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header
        showMenu={false} />
      <Order
        items={orderData} />
      <Footer />

    </div>
  </div>
);
