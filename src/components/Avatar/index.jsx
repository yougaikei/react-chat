import React from 'react'
import PropTypes from 'prop-types'
//导入 Avatar 头像图片
import AvatarPortrait from 'assets/images/web@1x.png'
// 导入配置好的样式组件
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImg } from './styles'

/**
 * @Explain：
 * @Variable {src} 头像图片地址
 * @Variable {size} 头像大小; defalut { fontSize: 48, }
 * @Variable {status} 在线状态
 * @Variable {statusIconSize} 在线状态图标大小; defalut { fontSize: 8, }
 * @Variable {rest} 其他属性
 */
function Avatar({ src, size = "48px", status, statusIconSize = "8px", ...rest }) {
  return (
    // 最外层容器
    <StyledAvatar { ...rest}>
        
        {/* 在线状态 */}
        {/* 
          通过 React 短路的特性, 对 status 值进行判断
          如果 status 值不为空, 则渲染 StatusIcon 组件
          如果为空值, 则不渲染 StatusIcon 组件
         */}
        {status && (
          <StatusIcon status={status} size={statusIconSize}></StatusIcon>
        )}

        {/* 头像外层容器 */}
        <AvatarClip size={size}>

            {/* 头像容器 */}
            <AvatarImg src={AvatarPortrait} alt="avatar" />

        </AvatarClip>

    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  statusIconSize: PropTypes.string,
}

export default Avatar
