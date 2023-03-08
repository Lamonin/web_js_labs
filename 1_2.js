let n = prompt("n =");

if (isNaN(+n) || !isFinite(n) || !Number.isInteger(+n) || n < 2 || n >= 15) {
    alert("Ошибочное число.");
} else {
    n = parseInt(n);

    let html = '';

    // Top lines group
    for (let i = 1; i <= n; i++) html += `<hr width=${100 / i}%>`;

    // Table
    html += '<table class="table-2">';

    for (let i = 0; i < n / 2; i++) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j >= i && j < n / 2) {
                html += '<td class="black"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    let startFrom = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;
    for (let i = startFrom; i < n; i++) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j >= Math.floor(n / 2) && j < i + 1) {
                html += '<td class="black"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    html += '</table>'

    // Bottom lines group
    for (let i = n; i >= 1; i--) html += `<hr width=${100 / i}%>`;

    document.write(html);
}