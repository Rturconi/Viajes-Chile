// SCRIPT PARA POPPER //
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// SCRIPT PARA POPPER //




$(window).scroll(function () {
    var target = $('#start')[0].getBoundingClientRect();
    if (target.bottom - target.height <= 100)
        $(".navbg").css({ "background-color": "#08a5a5", "border-bottom-left-radius": "20px", "border-bottom-right-radius": "20px", "transition": ".5s"})
    if (target.bottom - target.height >= 100)
        $(".navbg").css({ "background-color": "transparent", "transition": ".5s"});
});