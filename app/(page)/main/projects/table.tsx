import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ListProjects() {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Project Title</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>ERP FRONT END</TableCell>
          <TableCell className="text-right">Delete</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
