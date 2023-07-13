import './index.css'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);


export default function SmallCard() {
  return (
    <div className='card'>
      <div className='card-header'>
        <strong className='card-title'>Payments</strong>
        <lord-icon
            src="https://cdn.lordicon.com/jsoeastu.json"
            trigger="hover"
            delay="2000"
            colors="primary:#0000">
        </lord-icon>
      </div>
      <div>
        <strong className='card-value'>11</strong>
      </div>
    </div>
  )
}
