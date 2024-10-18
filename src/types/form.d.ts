declare type TipType = 5 | 10 | 15 | 25 | 50 | number


declare interface TipCalculatorI {
    bill: number;
    tip: TipType;
    people: number;
}

declare type TipCalculatorType = {
    [key in keyof TipCalculatorI]?: TipCalculatorI[key]
}

declare interface TipI {
    billPerPerson: number
    tipPerPerson: number,
    total: number
}

declare interface ErrorI {
    message: string
    isError: boolean
}