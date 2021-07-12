$(function () {
    const width = window.innerWidth
    const identifiers = ['#sidebar-collapse', '#sidebar', '#content']

    if(width <= 768) {
        identifiers.forEach(i => {
            $(i).addClass('activated')
        })
    }

    $(document).on('click', '#sidebar-collapse', () => {
        identifiers.forEach(i => {
            $(i).toggleClass('activated')
        })
    })
})
