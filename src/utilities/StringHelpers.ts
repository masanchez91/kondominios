const ValidateLength = (
    inputString: string,
    maxLength: number,
    minLegth: number,
): boolean => {
    return inputString.length <= maxLength && inputString.length >= minLegth;
};

export default ValidateLength;
