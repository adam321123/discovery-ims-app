"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon } from "@/icons";
import { Blocks, PackageSearch, ShoppingCart } from "lucide-react";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white/[0.90]">
          <ShoppingCart />
        </div>
        <p className="text-gray-500 text-theme-sm dark:text-gray-400">
          Stok Keluar
        </p>

        <div className="flex items-end justify-between mt-3">
          <div>
            <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,270 Pcs
            </h4>
          </div>

          <div className="flex items-center gap-1">
            <Badge color="error">
              <ArrowDownIcon className="text-error-500" />
              100
            </Badge>
            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
              Dibandingkan Kemarin
            </span>
          </div>
        </div>
        <ShoppingCart className="absolute top-0 bottom-0 right-0 h-[190px] w-[190px] text-gray-700 dark:text-white/[0.90] opacity-5 dark:opacity-2"/>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white/[0.90]">
          <PackageSearch />
        </div>

        <p className="text-gray-500 text-theme-sm dark:text-gray-400">
          Total Produk
        </p>

        <div className="flex items-end justify-between mt-3">
          <div>
            <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
              357 Produk
            </h4>
          </div>

          <div className="flex items-center gap-1">
            <Badge color="success">
              +2
            </Badge>

            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
              Masuk Hari Ini
            </span>
          </div>
        </div>
        <PackageSearch className="absolute top-0 bottom-0 right-0 h-[190px] w-[190px] text-gray-700 dark:text-white/[0.90] opacity-5 dark:opacity-2"/>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white/[0.90]">
          <Blocks />
        </div>

        <p className="text-gray-500 text-theme-sm dark:text-gray-400">
          Total Stok
        </p>

        <div className="flex items-end justify-between mt-3">
          <div>
            <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
              10,278 Pcs
            </h4>
          </div>

          <div className="flex items-center gap-1">
            <Badge color="success">
              +600
            </Badge>

            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
              Masuk Hari Ini
            </span>
          </div>
        </div>
        <Blocks className="absolute top-0 bottom-0 right-0 h-[190px] w-[190px] text-gray-700 dark:text-white/[0.90] opacity-5 dark:opacity-2"/>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
