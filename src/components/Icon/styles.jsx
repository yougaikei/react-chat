import styled from 'styled-components';

// 配置 Icon 组件的样式
const StyledIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    // 配置 Icon 的 svg 及 svg 的子元素的样式
    svg, svg * {
        // 这里配置 Icon 组件中 svg 的颜色, 如果设置了 color 属性, 则使用 color 属性, 否则不设置颜色
        ${({ color }) => ( color ? `fill: ${ color }` : "")}
        // 这里配置 Icon 组件中 svg 的透明度, 如果设置了 opacity 属性, 则使用 opacity 属性, 否则不设置透明度
        ${({ opacity }) => ( opacity ? `opacity: ${ opacity }` : "")}
    }
`;

export default StyledIcon;
