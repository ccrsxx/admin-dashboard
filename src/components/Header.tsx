import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';

export function Header() {
  return (
    <header className='header'>
      <div className='top'>
        <div className='search'>
          <Icon path={mdiMagnify} size={1.75} />
          <input
            type='search'
            name='search-input'
            className='search-input'
            placeholder='Search something...'
          />
        </div>
        <div className='top-profile'>
          <Icon className='bell' path={mdiBellRingOutline} size={1.75} />
          <div className='top-img' />
          <p className='top-name'>Marin Kitagawa</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='profile'>
          <div className='bottom-img' />
          <div className='profile-name'>
            <p className='greeting'>Hi there,</p>
            <h2 className='name'>
              Marin Kitagawa (<span className='username'>@marin</span>)
            </h2>
          </div>
        </div>
        <div className='button-wrapper'>
          <button className='button' type='button'>
            New
          </button>
          <button className='button' type='button'>
            Upload
          </button>
          <button className='button' type='button'>
            Share
          </button>
        </div>
      </div>
    </header>
  );
}
