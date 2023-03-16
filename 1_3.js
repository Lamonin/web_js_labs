function findTwoMaximalNumbers(str) {
    let max1 = null;
    let max2 = null;
    let current = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ') {
            current = current.trim();
            let num = +current;
            if (current !== '' && !isNaN(num) && isFinite(num)) {
                if (max1 === null || num > max1) {
                    max2 = max1;
                    max1 = num;
                } else if (max2 === null || num > max2) {
                    max2 = num;
                }
            }
            current = '';
        } else {
            current += char;
        }
    }

    const num = Number(current);
    if (!isNaN(num)) {
        if (max1 === null || num > max1) {
            max2 = max1;
            max1 = num;
        } else if (max2 === null || num > max2) {
            max2 = num;
        }
    }

    return [max1, max2];
}

const str = prompt('������� ������ ���� � ����� ����� �������:').trim();

if (str === '') {
    alert('������ �� �������� �����!');
} else {
    let maxNumbers = findTwoMaximalNumbers(str);
    if (maxNumbers[0] !== null) {
        if (maxNumbers[1] === null) {
            alert(`������������ ����� � ������: ${maxNumbers[0]}`);
        } else {
            alert(`��� ������������ ����� � ������: ${maxNumbers[0]} � ${maxNumbers[1]}`);
        }
    } else {
        alert('������ �� �������� �����!');
    }
}