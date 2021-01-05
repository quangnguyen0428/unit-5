const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'About us',
    subTitle: 'About us',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fa fa-globe',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fa fa-comments-o',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fa fa-globe',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fa fa-group',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'fa fa-picture-o',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'fa fa-envelope-o',
  },
]

const renderDeepMenu = (parent, array) => {

  const ulParent = document.createElement('ul')
  ulParent.setAttribute('class', 'navbar__list')

  array.forEach(item => {
    const li = document.createElement('li')
    li.setAttribute('class', 'navbar__list__item')
    const a = document.createElement('a')
    a.setAttribute('class', 'navbar__list__item__link')
    a.href= item.link
    a.innerText = item.title
    const icon = document.createElement('i')
    icon.setAttribute('class', item.icon)
    a.appendChild(icon)

    li.appendChild(a)

    const span = document.createElement('span')
    span.classList.add('arrow')
    span.addEventListener('click', () => {
      toggleMenu(span)
    })

    li.appendChild(span)

    if (Array.isArray(item.children)) {
      renderDeepMenu(li, item.children)
    }

    ulParent.appendChild(li)
  });

  parent.appendChild(ulParent)
}

const render = () => {
  const menu = document.querySelector('.navbar')
  renderDeepMenu(menu, deepMenu)
}

render()

// const toggleMenu = span => {
//   const li = span.parentNode
//   const ul = li.querySelector('ul')

//     if(ul) {
//       const isDisplayed = ul.style.display === 'block'
//       if(isDisplayed) {
//         ul.style.display = 'none'
//       }else{
//         ul.style.display = 'block'
//       }
//     }
// }

