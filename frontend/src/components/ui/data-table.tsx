'use client'
import type { Dispatch, SetStateAction } from 'react'

import {
  type ColumnDef,
  type PaginationState,
  type Table as TableType,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DataTablePagination } from './data-table-pagination'
import { Skeleton } from './skeleton'

interface LoadingTableRowProps {
  numRows?: number
}

function LoadingTableRow({ numRows = 5 }: LoadingTableRowProps) {
  return Array(numRows)
    .fill(0)
    .map((_, i) => (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-16" />
        </TableCell>
      </TableRow>
    ))
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading: boolean
  isRefetching: boolean
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  totalPages: number | undefined
}

interface RenderTableContentProps<TData, TValue> {
  isLoading: boolean
  isRefetching: boolean
  pageIndex: number
  table: TableType<TData>
  columns: ColumnDef<TData, TValue>[]
}

function renderTableContent<TData, TValue>({
  isLoading,
  isRefetching,
  pageIndex,
  table,
  columns,
}: RenderTableContentProps<TData, TValue>) {
  if (isLoading) {
    return <LoadingTableRow />
  }

  return table.getRowModel().rows?.length ? (
    <>
      {isRefetching && pageIndex === 0 ? <LoadingTableRow numRows={1} /> : null}
      {table.getRowModel().rows.map(row => (
        <TableRow
          className="odd:bg-elevation-1 even:bg-elevation-2"
          key={row.id}
          data-state={row.getIsSelected() && 'selected'}
        >
          {row.getVisibleCells().map(cell => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  isRefetching,
  pagination,
  setPagination,
  totalPages,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    pageCount: totalPages,
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {renderTableContent({
            isLoading,
            isRefetching,
            pageIndex: pagination.pageIndex,
            table,
            columns,
          })}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  )
}
