import './SideBar.css'

import React from 'react'

function SideBar() {
    return (
        <div class='sidebar'>
          <img src={`https://getheavy.com/wp-content/uploads/`+
          `2019/12/spotify2019-830x350.jpg`}
           alt="spotify"
          className="sidebar__logo"/>
        </div>
    )
}

export default SideBar
