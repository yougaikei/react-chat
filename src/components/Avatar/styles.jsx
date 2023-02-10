import styled, { css } from "styled-components";

// 定义样式复用的变量, 将通用的样式抽离出来, 以便复用
// ! danger: 注意要导入 styled-components 的 css 方法, 否则无法使用 css`` 语法
const StatusIconFunc = (color, size = "8px") => css`
    content: "";
    position: absolute;
    display: block;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};
`;

// 最外层 Avatar 组件容器
const StyledAvatar = styled.div`
    position: relative;
`;

// Avatar 组件的在线状态容器
const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;

    &::before {
        // last: 此处相对于下方先导入并解构的方式, 再此项并不需要, 之将调用 StatusIconFunc 方法, 并传入参数
        // !important: 注意此处参数类型应为: 
        // !    String<hsla | rgba | /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g | Color> |
        // !    'transparent' |
        // !    'none'
        // todo: 此处的 size 参数是从 Avatar 组件中传入的, 并将其传入 StatusIconFunc 方法中
        // todo: 取自:./Index 的 statusIconSize 参数( 在线状态图标大小 ), 大圆外框 8px
        ${ ({ size }) => StatusIconFunc( "white", size ) }
        
        transform: scale(2);
    }

    &::after {
        // first: 此处导入并解构 theme, 然后将参数传入 StatusIconFunc 方法中
        ${ ({ theme, status, size }) => {
            // 判断 status 值, 并返回对应的颜色
            if( status === "online" ) return StatusIconFunc( theme.colors.success.base, size );
            if( status === "offline" ) return StatusIconFunc( theme.colors.info.base, size );
        } }
    }
`;

// Avatar 组件的头像外层容器 ( 作用: 裁剪头像 )
// todo: 取自:./Index 的 size 参数( 头像大小 ), 头像外框 48px
const AvatarClip = styled.div`
    width: ${ ({ size }) => size };
    height: ${ ({ size }) => size };
    border-radius: 50%;
    overflow: hidden;
`;

// Avatar 组件的头像容器
const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

// 默认导出最外层容器
export default StyledAvatar;

// 导出其余子组件
export { StatusIcon, AvatarClip, AvatarImg };
