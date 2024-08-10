"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDDMMYYY } from "@/utils/custom-hooks/getDDMMYYY";
import ListAction from "@/components/list.action";

interface Props {
  list: any;
}

export default function ListProjects({ list }: Props) {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Project Title</TableHead>
          <TableHead className="font-semibold text-right">Create At</TableHead>
          <TableHead className="font-semibold text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list &&
          list?.map((item: ListProject, i: number) => (
            <TableRow key={i}>
              <TableCell className="">{item.project_name}</TableCell>
              <TableCell className="text-right">
                {getDDMMYYY(item.created_at)}
              </TableCell>
              <TableCell className="text-right">
                <ListAction item={item} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
