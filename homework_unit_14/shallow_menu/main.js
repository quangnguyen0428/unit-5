const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

function renderCodeHtml () {
  const menuList = document.querySelector('.menu__list')
  menuList.innerHTML = shallowMenu.map(value => {
  const [a,b,c,d] = value.children

    return `<li class="menu__list__item">
              <a href="#" class="menu__list__item__link">
                  <div class="menu__list__item__link__title">
                      <span><i class="far fa-tachometer-alt-slowest"></i> ${value.title}</span>
                      <i class="far fa-chevron-right"></i>
                  </div>
                  <ul class="collapse">
                  <li class="collapse__item"><a href="#" class="collapse__item__link">${a.title}</a></li>
                  <li class="collapse__item"><a href="#" class="collapse__item__link">${b.title}</a></li>
                  <li class="collapse__item"><a href="#" class="collapse__item__link">${c.title}</a></li>
                  <li class="collapse__item"><a href="#" class="collapse__item__link">${d.title}</a></li>
                  </ul>
              </a>
            </li>`
  }).join('')

  runEffectCollapse();
}

renderCodeHtml()

function runEffectCollapse () {
  const menuItem = document.querySelectorAll('.menu__list__item')
  menuItem.forEach(item => {
    const collapse = item.querySelector('.collapse')
    const icons = item.querySelector('.fa-chevron-right')
    console.log(icons);
    item.addEventListener('click', function(event) {
      icons.classList.toggle('rotate-icon')

      if (collapse.style.maxHeight){
        collapse.style.maxHeight = null
      } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px"
      }
  })
})
}
