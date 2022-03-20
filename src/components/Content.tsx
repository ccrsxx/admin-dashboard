import Icon from '@mdi/react';
import {
  mdiBookmarkPlusOutline,
  mdiEyePlusOutline,
  mdiShareVariantOutline
} from '@mdi/js';

export function Content() {
  return (
    <main className='content'>
      <div className='project-wrapper'>
        <h3>Your Projects</h3>
        <div className='projects'>
          <div className='project'>
            <h4>Super Cool Project</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiEyePlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiShareVariantOutline} size={1.75} />
              </button>
            </div>
          </div>
          <div className='project'>
            <h4>Less Cool Project</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiEyePlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiShareVariantOutline} size={1.75} />
              </button>
            </div>
          </div>
          <div className='project'>
            <h4>Impossible App</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiEyePlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiShareVariantOutline} size={1.75} />
              </button>
            </div>
          </div>
          <div className='project'>
            <h4>Easy Peasy App</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiEyePlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiShareVariantOutline} size={1.75} />
              </button>
            </div>
          </div>
          <div className='project'>
            <h4>Ad Blocker</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
            </div>
          </div>
          <div className='project'>
            <h4>Money Maker</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              corporis eos autem minima modi accusamus accusantium qui explicabo
              in quae.
            </p>
            <div className='controls'>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
              <button type='button'>
                <Icon path={mdiBookmarkPlusOutline} size={1.75} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='announcements'>
        <h3>Announcement</h3>
        <ul className='card-content'>
          <li className='announcement'>
            <h4>Site Maintenance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              voluptate velit pariatur culpa sapiente. Tempora doloribus ratione
              perspiciatis laudantium architecto?
            </p>
            <hr />
          </li>
          <li className='announcement'>
            <h4>Community Share Day</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              voluptate velit pariatur culpa sapiente. Tempora doloribus ratione
              perspiciatis laudantium architecto?
            </p>
            <hr />
          </li>
          <li className='announcement'>
            <h4>Updated Privacy Policy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              voluptate velit pariatur culpa sapiente. Tempora doloribus ratione
              perspiciatis laudantium architecto?
            </p>
          </li>
        </ul>
      </div>
      <div className='trending'>
        <h3>Trending</h3>
        <ul className='card-content'>
          <li className='trending-item'>
            <div className='profile-picture' />
            <div className='profile-name'>
              <p className='username'>@emilia</p>
              <p className='desc'>Lugunica queen</p>
            </div>
          </li>
          <li className='trending-item'>
            <div className='profile-picture' />
            <div className='profile-name'>
              <p className='username'>@violet</p>
              <p className='desc'>Living happily</p>
            </div>
          </li>
          <li className='trending-item'>
            <div className='profile-picture' />
            <div className='profile-name'>
              <p className='username'>@kurisu</p>
              <p className='desc'>Smart girl</p>
            </div>
          </li>
          <li className='trending-item'>
            <div className='profile-picture' />
            <div className='profile-name'>
              <p className='username'>@haruhi</p>
              <p className='desc'>Cute god</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
