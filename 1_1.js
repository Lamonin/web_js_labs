
let n = prompt("������� ���������� �����:");

while (n === "" || isNaN(n) || n <= 0) {
    n = prompt("������������ ����. ������� ���������� �����:");
}

let q1 = 0, q2 = 0, q3 = 0, q4 = 0;

for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 21) - 10;
    const y = Math.floor(Math.random() * 21) - 10;

    if (x > 0 && y > 0) {
        q1++;
    } else if (x < 0 && y > 0) {
        q2++;
    } else if (x < 0 && y < 0) {
        q3++;
    } else if (x > 0 && y < 0) {
        q4++;
    }
}

const result = `���������� ����� � ������ ��������: ${q1}\n` +
    `���������� ����� �� ������ ��������: ${q2}\n` +
    `���������� ����� � ������� ��������: ${q3}\n` +
    `���������� ����� � �������� ��������: ${q4}`;

alert(result);
