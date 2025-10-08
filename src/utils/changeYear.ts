


export function changeYear(year: number, newYear: number): number {
    // вычисляем половину разницы между годами
    const value = Math.floor(Math.max(Math.abs(year - newYear) / 2, 1))

    if (year > newYear) {
        return year - value
    } else if (year < newYear) {
        return year + value
    }

    return year
}   
