import React from 'react'

import styles from './Anim.module.scss'

import HeaderAnim from '../../../assets/images/Header/headerAnim.png'

const AnimationSecion = () => {
  return (
    <>
      <div className={styles.animWrapper}>
        <img src={HeaderAnim} alt="anim" />
      </div>
    </>
  )
}

export default AnimationSecion
