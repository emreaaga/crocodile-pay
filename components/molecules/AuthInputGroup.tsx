import { cn } from "@/lib/utils";
import React from "react";
import { LucideIcon } from "lucide-react";

interface AuthInputGroupProps {
  label: string;
  Icon: LucideIcon;
  id: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export default function AuthInputGroup({
  label,
  Icon,
  id,
  placeholder,
  type,
  value,
  onChange,
  autoComplete,
}: AuthInputGroupProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          id={id}
          className={cn(
            "mt-1 w-full rounded-md border px-3 py-2 pl-9 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500",
          )}
        />
      </div>
    </div>
  );
}
