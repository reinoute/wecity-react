export function formatPrice(numberValue) {
    if (numberValue > 0) {
        return '€ ' + numberValue.toFixed(2).replace('.', ',');
    } else {
        return 'Free';
    }
}