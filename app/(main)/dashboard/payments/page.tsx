"use client";
import { AlertModal } from "@/components/modals/alert-modal";
import { DataTableDemo } from "@/components/tables/data-table-demo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Payments() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onConfirm = async () => {};
  return (
    <div>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        //onConfirm={onConfirm}
        loading={loading}
      />
      <div className="flex items-start justify-between pb-3">
        <PageHeader title="Payments" description="" />
        <Button
          className="text-xs md:text-sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> New Payment
        </Button>
      </div>
      <Separator />
      <DataTableDemo />
    </div>
  );
}
