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
        <Icon path={mdiViewDashboard} size={3} />
        <p className='nav-item'>Dashboard</p>
      </h1>
      <ul className='nav-contents'>
        <li className='nav-content first active'>
          <Icon path={mdiHome} size={2} />
          <p className='nav-item'>Home</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiAccountCircleOutline} size={2} />
          <p className='nav-item'>Profile</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiForum} size={2} />
          <p className='nav-item'>Message</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiHistory} size={2} />
          <p className='nav-item'>History</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiCalendarCheck} size={2} />
          <p className='nav-item'>Tasks</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiAccountGroup} size={2} />
          <p className='nav-item'>Communities</p>
        </li>
      </ul>
      <ul className='nav-contents'>
        <li className='nav-content first'>
          <Icon path={mdiCog} size={2} />
          <p className='nav-item'>Settings</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiHelpBox} size={2} />
          <p className='nav-item'>Support</p>
        </li>
        <li className='nav-content'>
          <Icon path={mdiShieldCheck} size={2} />
          <p className='nav-item'>Privacy</p>
        </li>
      </ul>
    </nav>
  );
}
