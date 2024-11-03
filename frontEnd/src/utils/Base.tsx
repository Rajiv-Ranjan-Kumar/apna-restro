export const formatValidity = (validity:string) => {
    const date = new Date(validity);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};



export const numberValidation = (value: number | string): number | string => {
    if (value === '') return '';

    const numericValue = Number(value);

    if (numericValue < 0 || isNaN(numericValue) || numericValue === undefined) return '';
    
    return numericValue;
};



export const characterValidation = (value: string): string => {
    if (value === '') return '';

    const regex = /^[a-zA-Z -_]*$/;

    if (!regex.test(value)) {
        return '';
    }

    return value;
};


export const emailValidation = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!regex.test(value)) return false;

    return true;
};


export const passwordValidation = (value: string, formatValidation: boolean = false): string => {
    const password = characterValidation(value);
    if (formatValidation) {
        if(value === '') return '';
        if (!/[A-Z]/.test(value)) return 'Need uppercase';
        if (!/[a-z]/.test(value)) return 'Need lowercase';
        if (!/\d/.test(value)) return 'Need digit';
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return 'Need special char';
        if (value.length < 8) return 'Min 8 chars';
        return 'valid';
    }
    return password;
};


export const datetimeValidation = (value: string): string => {
    if (value === '') return '';

    const date = new Date(value);

    if (isNaN(date.getTime())) {
        return '';
    }

    return value;
};



export const validateFields = (fieldData: Partial<{ [key: string]: string | number | boolean | null | undefined }>): { fieldName: string, isValid: boolean } => {
    let validationResult = { fieldName: '', isValid: true };

    Object.keys(fieldData).some((key: string) => {
        if (fieldData[key] === '' || fieldData[key] === null || fieldData[key] === undefined) {
            validationResult = { fieldName: key, isValid: false };
            return validationResult;
        }
    });

    return validationResult;
};


export const getCurrentTime = (): string => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}