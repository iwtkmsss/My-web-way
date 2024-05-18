const progress_bar = document.getElementById("progress");
let state = 1;

function UpdateProgress() {
    if (progress_bar.value == progress_bar.max) {
        state = 2;
    } else if (progress_bar.value == 0) {
        state = 1;
    }

    if (state == 1) {
        progress_bar.value += 1;
    } else if (state == 2) {
        progress_bar.value -= 1;
    } else {
        state = 1;
    }
}

setInterval(UpdateProgress, 100)
