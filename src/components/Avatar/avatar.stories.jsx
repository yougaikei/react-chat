// 导入 React 组件
import React from 'react'
// 导入 Avatar 头像组件
import Avatar from '.'
// 导入样式文件
import 'story.scss'

// 导入头像图片
import AvatarPortraitMin from 'assets/images/web@1x.png'
import AvatarPortraitMid from 'assets/images/web@2x.png'
import AvatarPortraitMax from 'assets/images/web@3x.png'
import AvatarPortraitMax2 from 'assets/images/web@4x.png'

// 导出默认的组件
export default {
    // 组件的标题
    title: 'UI 组件/Avatar',
    // 组件的描述
    component: Avatar,
}

// 导出 Avatar 组件的默认样式: Default, 在内部使用 <Avatar /> 组件进行渲染
export const Default = () => <Avatar src={AvatarPortraitMin} />


// 配置头像链接地址, 及其尺寸大小
export const Sizes = () => (
    <div className={"row-elements"}>
        <Avatar src={AvatarPortraitMin} size="48px" />
        <Avatar src={AvatarPortraitMid} size="56px" />
        <Avatar src={AvatarPortraitMax} size="64px" />
        <Avatar src={AvatarPortraitMax2} size="72px" />
    </div>
)

// 配置头像在线状态
export const WithStatus = () => (
    <div className={"row-elements"}>
        <Avatar src={AvatarPortraitMin} status="online" />
        <Avatar src={AvatarPortraitMid} status="offline" />
        <Avatar src={AvatarPortraitMax2} size="72px" status="online" statusIconSize='12px' />
        <Avatar src={AvatarPortraitMax2} size="72px" status="offline" statusIconSize='12px' />
    </div>
)