const timelines = [
    {
        year: 1934,
        title: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },

    {
        year: 1934,
        title: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },

    {
        year: 1934,
        title: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    }

]

const timelineElement = document.querySelector('.timeline')

timelineElement.innerHTML = timelines.map(item => {
    return ` <div class="timeline__block">
                <div class="timeline__block__content">
                    <h2>${item.year}</h2>
                    <p>${item.title}</p>
                </div>
            </div>`
}).join('')


const contentElement = document.querySelectorAll('.timeline__block')
contentElement.forEach((value, index) => {
    if (!(index % 2)) {
        value.classList.add('right')
    }
    else {
        value.classList.add('left')
    }
})
