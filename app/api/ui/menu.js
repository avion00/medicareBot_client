module.exports = [
  {
    key: 'account_page',
    name: 'Edit Profile',
    icon: 'account_box',
    child: [
      {
        key: 'account_page',
        name: 'Edit Profile',
        title: true,
      },
      {
        key: 'login',
        name: 'Log out',
        icon: 'account_box',
        link: '/logout'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        icon: 'undo',
        link: '/reset-password'
      },
    ]
  },
  {
    key: 'medicare_client',
    name: 'Medicare Client',
    icon: 'admin_panel_settings',
    child: [
      {
        key: 'clienet_management',
        name: 'Client Management',
        title: true,
      },
      {
        key: 'client_dashboard',
        name: 'Dashboard',
        icon: 'admin_panel_settings',
        link: '/app/dashboard'
      },
      {
        key: 'bot_management',
        name: 'Bot',
        icon: 'admin_panel_settings',
        link: '/app/bot',
      },
      {
        key: 'settings_management',
        name: 'Settings',
        icon: 'admin_panel_settings',
        link: '/app/settings',
      },
      {
        key: 'interactions_management',
        name: 'Interactions',
        icon: 'admin_panel_settings',
        link: '/app/interactions',
      },
      {
        key: 'billing_management',
        name: 'Billing',
        icon: 'admin_panel_settings',
        link: '/app/billing',
      },
      {
        key: 'reports_management',
        name: 'Reports',
        icon: 'admin_panel_settings',
        link: '/app/reports',
      }
    ]
  },
];
