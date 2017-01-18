export function formatPrice(numberValue) {
    if (numberValue > 0) {
        return '€ ' + numberValue.toFixed(2).replace('.', ',');
    } else {
        return 'Free';
    }
}

export function formatOpeningTimes(times = []) {
    const day = new Date().getDay();
    const hours = new Date().getHours();
    const openingTimes = times[day];

    if (openingTimes) {
        const opensAt = parseInt(openingTimes.open.substring(0, 2), 0);
        const closesAt = parseInt(openingTimes.close.substring(0, 2), 0);

        return (hours > opensAt && hours < closesAt) ? `Open until ${closesAt}:00` : 'Now closed';
    } else return '';
}

