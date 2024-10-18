import { useState } from "react"

const initState: TipCalculatorI = {
    bill: 0,
    tip: 0,
    people: 0
}

const initTipState: TipI = {
    billPerPerson: 0,
    tipPerPerson: 0,
    total: 0
}

const initError: ErrorI = {
    message: '',
    isError: false
}

export function useTipCalculator() {
    const [formData, setFormData] = useState(initState)
    const [bill, setBill] = useState(initTipState)
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(initError)
    const [resetBool, setResetBool] = useState(false)

    const resetBill = (bool: boolean) => setResetBool(bool)


    const validateTip = (data: TipCalculatorType) => {
        let updatedFormData = { ...formData }
        let updatedTip = { ...bill }
        const dataKey = Object.keys(data)

        switch (dataKey[0] as keyof TipCalculatorType) {
            case 'bill':
                updatedFormData = {
                    ...updatedFormData,
                    bill: formatBill(data) ?? updatedFormData.bill
                }
                break
            case 'tip':
                updatedFormData = {
                    ...updatedFormData,
                    tip: formatTipAmount(data) ?? updatedFormData.tip
                }
                break
            case 'people':
                updatedFormData = {
                    ...updatedFormData,
                    people: formatPeople(data) ?? updatedFormData.people
                }
                break
            default:
        }

        const billPerPerson = updatedFormData.bill / updatedFormData.people
        const tipPerPerson = parseFloat(((billPerPerson) * (updatedFormData.tip / 100)).toFixed(3))
        const totalPaid = parseFloat((billPerPerson + tipPerPerson).toFixed(2))

        updatedTip = {
            billPerPerson,
            tipPerPerson,
            total: totalPaid
        }

        setFormData(updatedFormData)
        setBill(updatedTip)

        if (!isNaN(updatedTip.total) && isFinite(updatedTip.total)) {
            setError(initError)
            setIsValid(true)
        } else {
            updatedFormData.people === 0 && setError({
                message: 'Can’t be zero',
                isError: true
            })
            setIsValid(false)
        }
    }


    return { validateTip, resetBill, resetBool, isValid, bill, error }
}

function formatBill(data: TipCalculatorType) {
    return parseFloat(data.bill?.toString() as string)
}

function formatTipAmount(data: TipCalculatorType) {
    return parseFloat(data.tip?.toString().replace('%', '') as string)
}

function formatPeople(data: TipCalculatorType) {
    return parseInt(data.people?.toString() as string)
}