function visitLink(path) {
    let num = +localStorage.getItem(path) || 0
    localStorage.setItem(path, String(++num))
}

function viewResults() {

    const values = [
        localStorage.getItem('Page1') || 0,
        localStorage.getItem('Page2') || 0,
        localStorage.getItem('Page3') || 0
    ]
    const items = values.map((item, index) =>
        `<li>You visited Page${index + 1} ${item} Time(s)</li>`).join('')
    document.getElementById('content').insertAdjacentHTML('beforeend', `<ul>${items}</ul>`)
    localStorage.clear()
}
