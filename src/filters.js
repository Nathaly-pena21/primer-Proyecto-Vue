import numeral from 'numeral'

//funcion que convirte en valor de moneda
const dollarFilter = function (value) {
    if (!value) {
        return '$ 0'
    }
    return numeral(value).format('($ 0.00a)')
}

//funcion que convierte en valor en %
const percentFilters = function (value) {
    if (!value) {
        return '0%'
    }
    return `${Number(value).toFixed(2)}%`
}
export {dollarFilter, percentFilters}


