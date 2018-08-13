export default [
  {
    title: 'Default Dashboard',
    key: 'dashboardAlpha',
    url: '/dashboard/alpha',
    icon: 'icmn icmn-home',
  },
  {
    divider: true,
  },
  {
    title: 'Dashboard Group 1',
    key: 'antComponents',
    icon: 'anticon anticon-ant-design',
    children: [
      {
        title: 'Dashboard 1',
        key: 'general',
        url: '/dashboard/custom/1',
      },
      {
        title: 'Dashboard 2',
        key: 'navigation',
        children: [
          {
            key: 'affix',
            title: 'Affix',
            url: '/antdesign/affix',
          },
          {
            key: 'breadcrumb',
            title: 'Breadcrumb',
            url: '/antdesign/breadcrumb',
          },
          {
            key: 'dropdown',
            title: 'Dropdown',
            url: '/antdesign/dropdown',
          },
          {
            key: 'menu',
            title: 'Menu',
            url: '/antdesign/menu',
          },
          {
            key: 'pagination',
            title: 'Pagination',
            url: '/antdesign/pagination',
          },
          {
            key: 'steps',
            title: 'Steps',
            url: '/antdesign/steps',
          },
        ],
      },
      {
        title: 'Dashboard 3',
        key: 'dataEntry',
        children: [
          {
            key: 'autoComplete',
            title: 'Auto Complete',
            url: '/antdesign/autocomplete',
          },
          {
            key: 'cascader',
            title: 'Cascader',
            url: '/antdesign/cascader',
          },
          {
            key: 'checkbox',
            title: 'Checkbox',
            url: '/antdesign/checkbox',
          },
          {
            key: 'datePicker',
            title: 'Date Picker',
            url: '/antdesign/datepicker',
          },
          {
            key: 'form',
            title: 'Form',
            url: '/antdesign/form',
          },
          {
            key: 'input',
            title: 'Input',
            url: '/antdesign/input',
          },
          {
            key: 'inputNumber',
            title: 'Input Number',
            url: '/antdesign/inputnumber',
          },
          {
            key: 'mention',
            title: 'Mention',
            url: '/antdesign/mention',
          },
          {
            key: 'rate',
            title: 'Rate',
            url: '/antdesign/rate',
          },
          {
            key: 'radio',
            title: 'Radio',
            url: '/antdesign/radio',
          },
          {
            key: 'select',
            title: 'Select',
            url: '/antdesign/select',
          },
          {
            key: 'slider',
            title: 'Slider',
            url: '/antdesign/slider',
          },
          {
            key: 'switch',
            title: 'Switch',
            url: '/antdesign/switch',
          },
          {
            key: 'treeSelect',
            title: 'Tree Select',
            url: '/antdesign/treeselect',
          },
          {
            key: 'timePicker',
            title: 'Time Picker',
            url: '/antdesign/timepicker',
          },
          {
            key: 'transfer',
            title: 'Transfer',
            url: '/antdesign/transfer',
          },
          {
            key: 'upload',
            title: 'Upload',
            url: '/antdesign/upload',
          },
        ],
      },
    ],
  },

  {
    divider: true,
  },

  {
    title: 'Dashboard Group 2',
    key: 'defaultPages',
    icon: 'icmn icmn-file-text',
    children: [
      {
        key: 'loginAlpha',
        title: 'Login Alpha',
        url: '/pages/login-alpha',
      },
      {
        key: 'loginBeta',
        title: 'Login Beta',
        url: '/pages/login-beta',
      },
      {
        key: 'register',
        title: 'Register',
        url: '/pages/register',
      },
      {
        key: 'lockscreen',
        title: 'Lockscreen',
        url: '/pages/lockscreen',
      },
      {
        key: 'pricingTable',
        title: 'Pricing Table',
        url: '/pages/pricing-table',
      },
      {
        key: 'invoice',
        title: 'Invoice',
        url: '/pages/invoice',
      },
    ],
  },
  // {
  //   title: 'Charts',
  //   key: 'charts',
  //   icon: 'icmn icmn-stats-bars',
  //   children: [
  //     {
  //       title: 'Chartist',
  //       key: 'chartist',
  //       url: '/charts/chartist',
  //     },
  //     {
  //       title: 'Chart',
  //       key: 'chart',
  //       url: '/charts/chart',
  //     },
  //     {
  //       title: 'Peity',
  //       key: 'peity',
  //       url: '/charts/peity',
  //     },
  //     {
  //       title: 'C3',
  //       key: 'c3',
  //       url: '/charts/c3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Mail Templates',
  //   key: 'mailTemplates',
  //   url: '/layout/mail-templates',
  //   icon: 'icmn icmn-envelop',
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: 'Apps',
  //   key: 'apps',
  //   icon: 'icmn icmn-database',
  //   children: [
  //     {
  //       title: 'Messaging',
  //       key: 'messaging',
  //       url: '/apps/messaging',
  //     },
  //     {
  //       title: 'Mail',
  //       key: 'mail',
  //       url: '/apps/mail',
  //     },
  //     {
  //       title: 'Profile',
  //       key: 'profile',
  //       url: '/apps/profile',
  //     },
  //     {
  //       title: 'Gallery',
  //       key: 'gallery',
  //       url: '/apps/gallery',
  //     },
  //   ],
  // },
  // {
  //   title: 'Ecommerce',
  //   key: 'ecommerce',
  //   icon: 'icmn icmn-cart',
  //   children: [
  //     {
  //       title: 'Dashboard',
  //       key: 'dashboard',
  //       url: '/ecommerce/dashboard',
  //     },
  //     {
  //       title: 'Products Catalog',
  //       key: 'productsCatalog',
  //       url: '/ecommerce/products-catalog',
  //     },
  //     {
  //       title: 'Products Details',
  //       key: 'productsDetails',
  //       url: '/ecommerce/product-details',
  //     },
  //     {
  //       title: 'Products Edit',
  //       key: 'productsEdit',
  //       url: '/ecommerce/product-edit',
  //     },
  //     {
  //       title: 'Products List',
  //       key: 'productsList',
  //       url: '/ecommerce/products-list',
  //     },
  //     {
  //       title: 'Orders',
  //       key: 'orders',
  //       url: '/ecommerce/orders',
  //     },
  //     {
  //       title: 'Cart',
  //       key: 'cart',
  //       url: '/ecommerce/cart',
  //     },
  //   ],
  // },
  // {
  //   title: 'Blog',
  //   key: 'blog',
  //   icon: 'icmn icmn-wordpress',
  //   children: [
  //     {
  //       title: 'Feed',
  //       key: 'blogFeed',
  //       url: '/blog/feed',
  //     },
  //     {
  //       title: 'Post',
  //       key: 'blogPost',
  //       url: '/blog/post',
  //     },
  //     {
  //       title: 'Add Post',
  //       key: 'blogAddPost',
  //       url: '/blog/add-blog-post',
  //     },
  //   ],
  // },
  // {
  //   title: 'YouTube',
  //   key: 'youtube',
  //   icon: 'icmn icmn-youtube',
  //   children: [
  //     {
  //       title: 'Feed',
  //       key: 'youtubeFeed',
  //       url: '/youtube/feed',
  //     },
  //     {
  //       title: 'View',
  //       key: 'youtubeView',
  //       url: '/youtube/view',
  //     },
  //   ],
  // },
  // {
  //   title: 'GitHub',
  //   key: 'github',
  //   icon: 'icmn icmn-github',
  //   children: [
  //     {
  //       title: 'Explore',
  //       key: 'githubExplore',
  //       url: '/github/explore',
  //     },
  //     {
  //       title: 'Discuss',
  //       key: 'githubDiscuss',
  //       url: '/github/discuss',
  //     },
  //   ],
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: 'Icons',
  //   key: 'icons',
  //   icon: 'icmn icmn-star-full',
  //   children: [
  //     {
  //       title: 'FontAwesome',
  //       key: 'fontAwesome',
  //       url: '/icons/fontawesome',
  //     },
  //     {
  //       title: 'Linear',
  //       key: 'linear',
  //       url: '/icons/linear',
  //     },
  //     {
  //       title: 'Icomoon',
  //       key: 'icoMoon',
  //       url: '/icons/icomoon',
  //     },
  //   ],
  // },
  // {
  //   title: 'Bootstrap Grid',
  //   key: 'bootstrap',
  //   url: '/layout/bootstrap',
  //   icon: 'icmn icmn-html-five',
  // },
  // {
  //   title: 'Bootstrap Card',
  //   key: 'card',
  //   url: '/layout/card',
  //   icon: 'icmn icmn-stack',
  // },
  // {
  //   title: 'Typography',
  //   key: 'typography',
  //   url: '/layout/typography',
  //   icon: 'icmn icmn-font-size',
  // },
  // {
  //   title: 'Utilities',
  //   key: 'utilities',
  //   url: '/layout/utilities',
  //   icon: 'icmn icmn-magic-wand',
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: 'Nested Items',
  //   key: 'nestedItem1',
  //   disabled: true,
  //   icon: 'icmn icmn-arrow-down2',
  //   children: [
  //     {
  //       title: 'Nested Item 1-1',
  //       key: 'nestedItem1-1',
  //       children: [
  //         {
  //           title: 'Nested Item 1-1-1',
  //           key: 'nestedItem1-1',
  //         },
  //         {
  //           title: 'Nested Items 1-1-2',
  //           key: 'nestedItem1-2',
  //           disabled: true,
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Nested Items 1-2',
  //       key: 'nestedItem1-2',
  //     },
  //   ],
  // },
  // {
  //   title: 'Disabled Item',
  //   key: 'disabledItem',
  //   disabled: true,
  //   icon: 'icmn icmn-cancel-circle',
  // },
]
