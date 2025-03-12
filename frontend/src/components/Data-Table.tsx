import { ITableColumnsConfig } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface ITableProps<T> {
  data: T[];
  columns: ITableColumnsConfig<T>[];
}

function DataTable<T>({ data, columns }: ITableProps<T>) {
  return (
    <div className="rounded-md border">
      <Table className="!rounded">
        <TableHeader>
          <TableRow className="*:px-4 *:py-4">
            {columns?.map((column) => (
              <TableHead key={column.header} className="w-fit max-w-[230px] tracking-wide">
                {column.header.toUpperCase()}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="*:w-auto *:max-w-[280px] *:py-3 *:px-4">
              {columns?.map((column) =>
                column.key === "action" ? (
                  <TableCell key="actions">{column.render ? column.render(null, row) : null}</TableCell>
                ) : (
                  <TableCell key={column.key.toString()}>{column.render ? column.render(row[column.key], row) : String(row[column.key])}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
