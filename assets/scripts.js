

// Resize project box

let activeElement = null;

$(".project-container").click(function () {
    if (activeElement) {
        $(activeElement).removeClass("activeProject");
    }
    if (this) {
        activeElement=this;
    }
    $(this).addClass("activeProject");
    console.log(this.classList);
    console.log(activeElement);
}
)
