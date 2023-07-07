function getScrollPercent() {
    let scroll_pos = document.documentElement.scrollTop;
    let body_height = document.documentElement.scrollHeight;
    let window_height = document.documentElement.clientHeight;
    let scroll_percent = scroll_pos / (body_height - window_height) * 100;
    return scroll_percent.toFixed(2);
}

console.log(getScrollPercent());