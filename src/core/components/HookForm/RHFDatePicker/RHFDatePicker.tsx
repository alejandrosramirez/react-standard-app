import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "@mantine/dates";
import { useFocusWithin } from "@mantine/hooks";
import { IconCalendar as Calendar } from "@tabler/icons-react";

const RHFDatePicker = ({
	label,
	name,
	placeholder = "Seleccionar...",
	locale = "es",
	format = "DD-MM-YYYY",
	...rest
}: CORE.Components.IRHFDatePicker) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<DatePicker
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					placeholder={placeholder}
					locale={locale}
					inputFormat={format}
					icon={<Calendar size={16} />}
				/>
			)}
		/>
	);
};

export default RHFDatePicker;
