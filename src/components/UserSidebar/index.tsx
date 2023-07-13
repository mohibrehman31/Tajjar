import './index.css'
import {useState} from 'react'
import dashboard from '../../assets/dashboard.png'
import bid from '../../assets/bid.png'
import postings from '../../assets/postings.png'
import addBid from '../../assets/addBid.png'
import payment from '../../assets/payment.png'
import logout from '../../assets/logout.png'
import { useNavigate } from 'react-router-dom'

interface propType{
  breadcrumb: () => void
}


export default function UserSidebar({breadcrumb}: propType) {

  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate();

  const changeTab = (tabId: number, page: string) => {
    setActiveTab(tabId)
    breadcrumb(page)
    navigate("/User/" + page) 
  }

  return (
    <div className='sideBar'>

      <div className='sideBarButtonGrid robotoFont'>

        <div className='sideBarButton' onClick={() => changeTab(0, "Dashboard")}>
          { activeTab === 0 && <div style={{height: '100%', backgroundColor: 'white', width:'4px'}}/> }
          <img src={dashboard} className='sideIcons'/>
          <h5>Dashboard</h5>
        </div>

        <div className='sideBarButton' onClick={() => changeTab(1, "Bids")}>
        { activeTab === 1 && <div style={{height: '100%', backgroundColor: 'white', width:'4px'}}/> }
          <img src={bid} className='sideIcons'/>
          <h5>Bids</h5>
        </div>

        <div className='sideBarButton' onClick={() => changeTab(2, "Postings")}>
        { activeTab === 2 && <div style={{height: '100%', backgroundColor: 'white', width:'4px'}}/> }
          <img src={postings} className='sideIcons'/>
          <h5>Postings</h5>
        </div>

        <div className='sideBarButton' onClick={() => changeTab(3, "AddBids")}>
        { activeTab === 3 && <div style={{height: '100%', backgroundColor: 'white', width:'4px'}}/> }
          <img src={addBid} className='sideIcons'/>
          <h5>Add Bids</h5>
        </div>

        <div className='sideBarButton' onClick={() => changeTab(4, "Payments")}>
        { activeTab === 4 && <div style={{height: '100%', backgroundColor: 'white', width:'4px'}}/> }
          <img src={payment} className='sideIcons'/>
          <h5>Payments</h5>
        </div>

        <div>
          <hr/>
        </div>

        <div className='sideBarButton' onClick={() => changeTab(4, "Logout")}>
          <img src={logout} className='sideIcons'/>
          <h5>Logout</h5>
        </div>

      </div>
      
    </div>
  )
}


