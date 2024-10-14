import { assets } from "@app-assets";
import TextInput from "./text-input";
import TipOptions from "./tip-options";

export function TipForm() {
    return (
        <form className="flex flex-col gap-8">
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
            />
        </form>
    );
}
