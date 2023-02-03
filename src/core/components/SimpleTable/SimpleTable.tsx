import { useState } from "react";
import { MantineReactTable as Table } from "mantine-react-table";
import { MRT_Localization_ES } from "mantine-react-table/locales/es";
import { PaginationState, SortingState } from "@tanstack/react-table";

const SimpleTable = ({ cols, getQueryFn }: CORE.Components.ISimpleTable) => {
	// SimpleTable States
	const [globalFilter, setGlobalFilter] = useState("");
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 25,
	});

	const { data, isLoading, isError, isFetching } = getQueryFn(
		pagination.pageIndex + 1,
		globalFilter,
		pagination.pageSize,
	);

	return (
		<Table
			columns={cols}
			data={data?.data || []}
			enableRowSelection
			enableColumnFilters={false}
			enableDensityToggle={false}
			enableFullScreenToggle={false}
			initialState={{
				showGlobalFilter: true,
				showColumnFilters: false,
				density: "md",
				isFullScreen: false,
			}}
			localization={MRT_Localization_ES}
			manualFiltering
			manualPagination
			manualSorting
			mantineToolbarAlertBannerProps={
				isError
					? {
							color: "error",
							children: "Error loading data",
					  }
					: undefined
			}
			onGlobalFilterChange={setGlobalFilter}
			onPaginationChange={setPagination}
			onSortingChange={setSorting}
			positionGlobalFilter="left"
			rowCount={data?.total}
			state={{
				globalFilter,
				isLoading,
				pagination,
				showAlertBanner: isError,
				showProgressBars: isFetching,
				sorting,
			}}
			mantineTableProps={{
				fontSize: "md",
				highlightOnHover: false,
				withColumnBorders: false,
				withBorder: false,
			}}
			mantineSearchTextInputProps={{
				sx: { minWidth: "600px" },
				variant: "filled",
				size: "md",
			}}
			mantineFilterTextInputProps={{
				sx: { borderBottom: "unset", marginTop: "8px" },
				variant: "filled",
			}}
			mantineFilterSelectProps={{
				sx: { borderBottom: "unset", marginTop: "8px" },
				variant: "filled",
			}}
			mantineSelectAllCheckboxProps={{
				size: "sm",
			}}
			mantineSelectCheckboxProps={{
				size: "sm",
			}}
			mantineTableHeadCellProps={{
				sx: {
					"& .Mantine-TableHeadCell-Content": {
						justifyContent: "space-between",
					},
				},
			}}
		/>
	);
};

export default SimpleTable;
