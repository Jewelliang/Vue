module.exports = {
    //vue-cli3修改ant的主题色官网配置   vue.config.js for less-loader@6.0.0 ||||||||注意less-loader依赖包的版本一定要是6.0.0或以上|||||||
      css: {
        loaderOptions: {
          less: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#ff1f', // 全局主色  #1890ff   #8c0776 梅红
                'link-color': '#1890ff', // 链接色
                'success-color': '#52c41a', // 成功色
                'warning-color': '#faad14', // 警告色
                'error-color': '#f5222d', // 错误色
                'font-size-base': '14px', // 主字号
                'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
                'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
                'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
                'border-radius-base': '4px', // 组件/浮层圆角
                'border-color-base': '#d9d9d9', // 边框色
                'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
              },
              javascriptEnabled: true,
            },
          },
        },
      }
    }