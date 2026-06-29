"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollLock } from "@/lib/useScrollLock";
import { X, Boxes, Beaker, Gauge, Plug, Route, Network, Building2, ArrowRight, ShieldCheck } from "lucide-react";

import { equipmentLibrary, equipmentById } from "@/lib/equipmentLibrary";
import { ingredientLibrary, ingredientLibraryById } from "@/lib/ingredientLibrary";
import { supplierCategories, supplierCategoriesById } from "@/lib/supplierCategories";
import { factoryUtilities } from "@/lib/factoryUtilities";
import { manufacturingControls } from "@/lib/manufacturingEngineeringControls";
import { supplyChainStages } from "@/lib/supplyChainMap";
import { capabilityChains } from "@/lib/factoryCapabilityMap";
import { machinesById } from "@/lib/machineData";
import type { FactoryUtility } from "@/types/factoryIntel";

import { EquipmentCard, EQUIPMENT_CATEGORY_LABELS } from "@/components/intel/EquipmentCard";
import { EquipmentDetailPanel } from "@/components/intel/EquipmentDetailPanel";
import {
  IngredientLibraryCard,
  IngredientDetailPanel,
} from "@/components/intel/IngredientLibraryCard";
import { SupplierCategoryCard } from "@/components/intel/SupplierCategoryCard";
import { ManufacturingControlCard } from "@/components/intel/ManufacturingControlCard";
import { SupplyChainMap } from "@/components/intel/SupplyChainMap";
import { FactoryCapabilityMap } from "@/components/intel/FactoryCapabilityMap";

const EQUIPMENT_CATEGORIES = Array.from(
  new Set(equipmentLibrary.map((e) => e.category)),
);

export default function FactoryIntelligencePage() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string | null>(null);
  const [selectedIngredientId, setSelectedIngredientId] = useState<string | null>(null);
  useScrollLock(selectedEquipmentId !== null || selectedIngredientId !== null);

  const filteredEquipment =
    selectedCat === "all"
      ? equipmentLibrary
      : equipmentLibrary.filter((e) => e.category === selectedCat);

  const selectedEquipment = selectedEquipmentId ? equipmentById[selectedEquipmentId] : undefined;
  const selectedIngredient = selectedIngredientId
    ? ingredientLibraryById[selectedIngredientId]
    : undefined;

  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      {/* 1. Header */}
      <header>
        <span className="kicker kicker-violet">Factory intelligence</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Inside the rubber factory
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Every machine, ingredient, supplier, utility, and control on this page carries real
          manufacturing and supply-chain meaning: what it does, why it matters to quality, and what
          a buyer should ask before sourcing. It is preliminary and sourcing-prep only. No operating
          parameters, recipes, or guaranteed vendors are implied, and any name or figure here must be
          verified before sourcing.
        </p>
      </header>

      {/* 2. Equipment library */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Equipment library</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Boxes className="h-5 w-5 text-violet-300" /> Equipment, station by station
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The machines that move rubber from bale to finished roll. Filter by category, then open any
          card for variants, purchasing and engineering considerations, quality risks, and the
          questions to ask an OEM.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCat("all")}
            className={selectedCat === "all" ? "btn-primary" : "btn-ghost"}
          >
            All
          </button>
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={selectedCat === cat ? "btn-primary" : "btn-ghost"}
            >
              {EQUIPMENT_CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              equipment={equipment}
              onOpen={() => setSelectedEquipmentId(equipment.id)}
            />
          ))}
        </div>
      </section>

      {/* 3. Ingredient & raw material library */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Ingredient &amp; raw material library</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Beaker className="h-5 w-5 text-molten-300" /> What goes into the compound
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Base polymers, fillers, oils, cure systems, and additives, each with its function,
          handling, storage, supply-chain profile, and what poor selection puts at risk. Open a card
          for the full ingredient sheet.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredientLibrary.map((ingredient) => (
            <IngredientLibraryCard
              key={ingredient.id}
              ingredient={ingredient}
              onOpen={() => setSelectedIngredientId(ingredient.id)}
            />
          ))}
        </div>
      </section>

      {/* 4. Manufacturing engineering controls */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Manufacturing engineering controls</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Gauge className="h-5 w-5 text-violet-300" /> What each station controls, and what it risks
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Station by station, the characteristics that are critical to quality, the process inputs
          and outputs, and the bottleneck, scrap, and automation realities that govern a real line.
        </p>

        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          {manufacturingControls.map((control) => (
            <ManufacturingControlCard
              key={control.stationId}
              control={control}
              stationName={machinesById[control.stationId].name}
            />
          ))}
        </div>
      </section>

      {/* 5. Factory utilities & support systems */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Factory utilities &amp; support systems</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Plug className="h-5 w-5 text-steel-300" /> The systems behind the machines
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Compressed air, process heat, cooling water, power, ventilation, handling, and the rest of
          the plant backbone. These rarely appear on a drawing yet quietly govern whether the line
          runs and the product holds spec.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {factoryUtilities.map((utility: FactoryUtility) => (
            <div key={utility.id} className="panel flex h-full flex-col p-4">
              <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">
                {utility.name}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">{utility.whatItIs}</p>

              <div className="mt-3">
                <div className="label-mono mb-1 text-steel-300">What it supports</div>
                <p className="text-[12px] leading-relaxed text-ink-muted">{utility.whatItSupports}</p>
              </div>

              <div className="mt-3">
                <div className="label-mono mb-1.5">Risks</div>
                <div className="flex flex-wrap gap-1.5">
                  {utility.risks.map((risk) => (
                    <span
                      key={risk}
                      className="chip border-warn/25 text-[10px] normal-case tracking-normal text-ink-muted"
                    >
                      {risk}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-3 border-t border-line pt-2.5 text-[11px] leading-relaxed text-ink-faint">
                <span className="text-ink-muted">Sourcing note. </span>
                {utility.sourcingNote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Raw material supply chain */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Raw material supply chain</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Route className="h-5 w-5 text-blue-300" /> From producer to dispatch
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          How material enters and moves through the factory, the documents that matter at each stage,
          and the manufacturing impact a buyer should weigh into any quote and schedule.
        </p>

        <div className="mt-5">
          <SupplyChainMap stages={supplyChainStages} />
        </div>
      </section>

      {/* 7. Factory capability map */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Factory capability map</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Network className="h-5 w-5 text-violet-300" /> Material to process to product to test
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          This map traces each material family through its processes, equipment, products, and tests,
          which is exactly why the RFQ asks what it asks: the right questions fall out of the chain.
        </p>

        <div className="mt-5">
          <FactoryCapabilityMap chains={capabilityChains} />
        </div>
      </section>

      {/* 8. Buying & specification (suppliers) */}
      <section className="mt-12">
        <span className="kicker kicker-violet">Buying &amp; specification</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Building2 className="h-5 w-5 text-steel-300" /> Supplier and OEM categories
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The categories of supplier a rubber plant buys from, what they sell, the capabilities to
          ask about, and how to prepare. Any vendor examples are illustrative only and must be
          verified before sourcing. They are not endorsements or guaranteed suppliers.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {supplierCategories.map((supplier) => (
            <SupplierCategoryCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="panel-raised mt-12 flex flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink">
          From factory to finished quote
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
          See how these stations are tested and verified, then turn the capability map into a
          structured request. Everything stays preliminary and sourcing-prep, ready to verify before
          you commit.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/quality-lab" className="btn-ghost inline-flex items-center gap-1.5">
            Explore the quality lab <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/outputs" className="btn-primary inline-flex items-center gap-1.5">
            Generate a factory output <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Equipment detail modal */}
      {selectedEquipment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEquipmentId(null)}
        >
          <div
            className="panel-raised relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEquipmentId(null)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-muted transition hover:border-line-strong hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <EquipmentDetailPanel
              equipment={selectedEquipment}
              supplierName={supplierCategoriesById[selectedEquipment.supplierCategory]?.name}
            />
          </div>
        </div>
      )}

      {/* Ingredient detail modal */}
      {selectedIngredient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIngredientId(null)}
        >
          <div
            className="panel-raised relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIngredientId(null)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-muted transition hover:border-line-strong hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <IngredientDetailPanel ingredient={selectedIngredient} />
          </div>
        </div>
      )}
    </div>
  );
}
