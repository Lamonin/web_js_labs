function findTwoMaximalNumbers(str) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let current = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ') {
            current =  current.trim();
            if (current !== '' && !isNaN(+current) && isFinite(current)) {
                let num = +current;
                if (num > max1) {
                    max2 = max1;
                    max1 = num;
                } else if (num > max2) {
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
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
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
    if (maxNumbers[0] !== -Infinity) {
        if (maxNumbers[1] === -Infinity) {
            alert(`������������ ����� � ������: ${maxNumbers[0]}`);
        } else {
            alert(`��� ������������ ����� � ������: ${maxNumbers[0]} � ${maxNumbers[1]}`);
        }
    }
    else {
        alert('������ �� �������� �����!');
    }
}
