import React from 'react'
import PropTypes from 'prop-types'
import StyledIcon from './styles'
/**
 * @Explain：
 * @Variable icon: IconComponent, 传入的图标组件
 * @Variable width: 24, 图标宽度默认为 24px
 * @Variable height: 24, 图标高度默认为 24px
 * @Variable color, 用来设置图标颜色
 * @Variable opacity, 用来设置图标透明度
 * @Variable rest, 其他属性
 */
function Icon({icon: IconComponent, width = 24, height = 24, color, opacity, ...rest }) {
  return (
    <StyledIcon color={ color } opacity={ opacity } {...rest}>
      {/* 此处依旧是运用 React 短路的特性, 如果 IconComponent 存在, 则渲染 IconComponent 组件 */}
      { IconComponent && <IconComponent width={width} height={height} /> }
    </StyledIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
}

export default Icon
