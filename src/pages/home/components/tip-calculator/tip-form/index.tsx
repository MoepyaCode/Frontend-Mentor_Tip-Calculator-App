import { assets } from "@app-assets";
import TextInput from "./text-input";
import TipOptions from "./tip-options";
import { FormEvent, useEffect, useRef } from "react";

type Props = {
    validateTip: (data: TipCalculatorType) => void,
    error: ErrorI,
    resetBool: boolean
    resetBill: (bool: boolean) => void
}

export function TipForm(props: Props) {
    const { validateTip, error, resetBool, resetBill } = props
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;
        const data = { [name]: value } as TipCalculatorType;

        validateTip(data)
    }

    useEffect(() => {
        if (resetBool) {
            formRef.current?.reset()
            resetBill(false)
        }
    }, [resetBill, resetBool])

    return (
        <form ref={formRef} onChange={handleChange} className="flex flex-col gap-8">
            {/* Bill */}
            <TextInput
                title="Bill"
                name="bill"
                icon={assets.iconDollar}
            />

            {/* Select Tip */}
            <TipOptions />

            {/* Number of People % */}
            <TextInput
                title="Number of People"
                name="people"
                icon={assets.iconPerson}
                error={error}
            />
        </form>
    );
}
