import './index.css'
import SmallCard from '../../../components/SmallCard'

export default function Dashboard() {
  return (
    <div>
        <div className="dashboardTitle">
          <span>Dashboard</span>
        </div>
        <div className='cardGrid'>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
        </div>
    </div>
  )
}


