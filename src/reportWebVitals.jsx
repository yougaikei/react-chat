const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
// !danger: 
// ! 勿删! 此组件可在 src\index.jsx 中使用: 
// !   1. import reportWebVitals from './reportWebVitals';
// !   2. reportWebVitals(); 
// !      调用 "reportWebVitals(console.log);"
// !      可传 console.log 或者其他函数
export default reportWebVitals;
