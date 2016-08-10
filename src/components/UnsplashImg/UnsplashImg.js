import React from 'react'
import styles from './UnsplashImg.less'

const UnsplashImg = ({ datas, onClick }) => (
  <div className={ styles.imagesContainer }>
    { datas && datas.map((item, index) =>
      <img
        src={ item.urls.small }
        key={ item.id }
        onClick={ onClick }
        data-item-id={ item.id } />
      )
    }
  </div>
)

export default UnsplashImg