export const validateByRegex = (regex: RegExp, value: string) => {
    return regex.test(value);
}

export const validateStringSize = (min: number, max: number, value: string) => {
    return value.length >= min && value.length <= max;
}