
import Login from '../../components/amity/login';

import { master } from '@/styles/Amity.module.css';

export default function Amity() {
  return (
    <div className={master}>
      {/* <p>from export: Hello world~!!</p> */}

      <Login/>
    </div>
  )
}