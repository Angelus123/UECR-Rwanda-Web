import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" active>About UECR</NavigationItem>
    <NavigationItem link ="/">History</NavigationItem>
    <NavigationItem link ="/">Events</NavigationItem>
    <NavigationItem link ="/">Account</NavigationItem>
    <NavigationItem link ="/">Trip</NavigationItem>
    <NavigationItem link ="/">Zone</NavigationItem>

</ul>
)
export default navigationItems