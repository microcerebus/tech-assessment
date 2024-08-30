import type { Table } from '@tanstack/react-table'
import {
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs'
import { Button } from './button'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-end gap-2 px-2 py-1">
      <div className="mr-2">
        Page{' '}
        {table.getPageCount() > 0
          ? table.getState().pagination.pageIndex + 1
          : 0}{' '}
        of {table.getPageCount()}
      </div>
      <Button
        size="sm"
        className="rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <BsChevronDoubleLeft />
      </Button>
      <Button
        size="sm"
        className="rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary"
        onClick={() => {
          table.previousPage()
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <BsChevronLeft />
      </Button>
      <Button
        size="sm"
        className="rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary"
        onClick={() => {
          table.nextPage()
        }}
        disabled={!table.getCanNextPage()}
      >
        <BsChevronRight />
      </Button>
      <Button
        size="sm"
        className="rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <BsChevronDoubleRight />
      </Button>
    </div>
  )
}
