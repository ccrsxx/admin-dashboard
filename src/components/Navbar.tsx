import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiHome,
  mdiAccountCircleOutline,
  mdiForum,
  mdiHistory,
  mdiCalendarCheck,
  mdiAccountGroup,
  mdiCog,
  mdiHelpBox,
  mdiShieldCheck
} from '@mdi/js';

export function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='nav-title'>
        <Icon path={mdiViewDashboard} size={3} /> Dashboard
      </h1>
      <ul className='nav-contents'>
        <li className='nav-content first active'>
          <Icon path={mdiHome} size={2} /> Home
        </li>
        <li className='nav-content'>
          <Icon path={mdiAccountCircleOutline} size={2} /> Profile
        </li>
        <li className='nav-content'>
          <Icon path={mdiForum} size={2} /> Message
        </li>
        <li className='nav-content'>
          <Icon path={mdiHistory} size={2} /> History
        </li>
        <li className='nav-content'>
          <Icon path={mdiCalendarCheck} size={2} /> Tasks
        </li>
        <li className='nav-content'>
          <Icon path={mdiAccountGroup} size={2} /> Communities
        </li>
      </ul>
      <ul className='nav-contents'>
        <li className='nav-content first'>
          <Icon path={mdiCog} size={2} /> Settings
        </li>
        <li className='nav-content'>
          <Icon path={mdiHelpBox} size={2} /> Support
        </li>
        <li className='nav-content'>
          <Icon path={mdiShieldCheck} size={2} /> Privacy
        </li>
      </ul>
    </nav>
  );
}
