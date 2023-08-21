import React from 'react'

import styles from './Contact.module.scss'

// images
import AnimVirtual from '../../../assets/images/icons/virtual.png'

const HeaderAnimation = () => {
  return (
    <>
      <div className={styles.absoluteAnim}>
        <img src={AnimVirtual} alt="anim" />
      </div>
    </>
  )
}

export default HeaderAnimation
