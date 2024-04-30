'use client'

import styles from './header.module.css';
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={`col d-flex align-items-center ${styles.header}`}>
      <div className={'col d-flex align-items-center justify-content-between ms-3 me-3'}>
        <div className={'col-4'}>
          <p className={`m-0 text-center ${styles.ci}`}>sangwon portfolio</p>
        </div>
        <div className={'col-7'}>
          <ul className={'nav justify-content-end'}>
            <li className={'nav-item'}>
              <a href={'/'} className={`nav-link ${pathname === '/' ? styles.active : styles.disable}`}>
                <i className={'bi-house me-1'}></i>
                home
              </a>
            </li>
            <li className={'nav-item'}>
              <a href={'/project'} className={`nav-link ${pathname === '/project' ? styles.active : styles.disable}`}><i className={'bi-person-workspace me-1'}></i>project</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
