import type { RfqRuleGroup } from "@/types/quality";

export const rfqIntelGroups: RfqRuleGroup[] = [
  {
    "id": "ms-polymer-spec",
    "label": "Material and polymer specification",
    "category": "material-sourcing",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "ms-polymer-required",
        "label": "Is a specific polymer family or compound required (for example NBR, EPDM, silicone, Viton-type FKM)?",
        "type": "select",
        "options": [
          "Yes, specific polymer required",
          "Polymer family preferred but flexible",
          "No preference, recommend based on service",
          "Not sure yet"
        ],
        "help": "Naming a polymer family helps narrow the quote. Material names and any branded references here are illustrative and require verification before sourcing."
      },
      {
        "id": "ms-named-spec",
        "label": "Is there a named material specification or grade to meet (for example an ASTM line callout or a customer compound number)?",
        "type": "text",
        "help": "Provide the spec as written on your drawing or order. Any referenced standard should be confirmed against the official standard and an accredited or qualified lab before sourcing."
      },
      {
        "id": "ms-approval-required",
        "label": "Is a particular approval, listing, or grade designation required for this material?",
        "type": "textarea",
        "help": "Describe what your end customer or application commonly requires. Any approval claim requires verification before sourcing; we do not certify on your behalf."
      },
      {
        "id": "ms-substitute-allowed",
        "label": "Is an equivalent substitute compound acceptable after engineering review?",
        "type": "select",
        "options": [
          "Yes, substitutes acceptable after review",
          "Only with written approval",
          "No, exact compound only",
          "Unsure"
        ],
        "help": "Substitutions are typically offered only after a documented review of fit and properties. Final acceptance commonly rests with your engineering team."
      },
      {
        "id": "ms-lot-traceability",
        "label": "Is raw-material lot traceability required (linking finished parts back to compound batch records)?",
        "type": "boolean",
        "help": "Lot traceability is commonly requested for regulated or critical service. It may affect lead time and documentation scope."
      },
      {
        "id": "ms-origin-preference",
        "label": "Is domestic or imported raw material acceptable, or is one required?",
        "type": "select",
        "options": [
          "Either acceptable",
          "Domestic preferred",
          "Domestic required",
          "Imported acceptable",
          "Specify in notes"
        ],
        "help": "Origin preferences may affect cost and lead time. Any origin claim requires verification before sourcing."
      }
    ]
  },
  {
    "id": "pm-dimensions-tolerances",
    "label": "Product dimensions, drawing, and tolerances",
    "category": "product-manufacturing",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "pm-final-dimensions",
        "label": "What are the required final dimensions of the part (overall size, thickness, diameter, or length as applicable)?",
        "type": "textarea",
        "help": "Provide nominal dimensions with units. Molded and cured rubber typically shrinks from cavity size, so finished dimensions may differ from tooling dimensions."
      },
      {
        "id": "pm-drawing-sample",
        "label": "Can you provide a drawing, sketch, CAD file, or physical sample?",
        "type": "select",
        "options": [
          "Drawing or CAD available",
          "Sketch only",
          "Physical sample available",
          "Verbal description only",
          "Will provide later"
        ],
        "help": "A drawing or sample greatly improves quote accuracy. A controlled drawing typically governs over a verbal description if they conflict."
      },
      {
        "id": "pm-tolerances-critical",
        "label": "Are any dimensions critical, and if so which ones and to what tolerance?",
        "type": "textarea",
        "help": "Call out critical dimensions explicitly. Rubber tolerances are commonly looser than machined metal because the material is elastic and process-sensitive; tight tolerances may raise cost."
      },
      {
        "id": "pm-surface-finish",
        "label": "Is a particular surface finish or appearance required (for example smooth, matte, textured, defined cosmetic zones)?",
        "type": "text",
        "help": "Describe finish expectations. Cosmetic requirements may need a boundary sample agreed between both parties."
      },
      {
        "id": "pm-edges-slitting",
        "label": "Are there edge, trim, or slitting requirements (for example deflashed edges, clean-cut, slit to width)?",
        "type": "textarea",
        "help": "Describe how edges should look and any width tolerance for slit goods. Edge condition often depends on the finishing method available."
      },
      {
        "id": "pm-fabric-reinforcement",
        "label": "Does the part require fabric or fiber reinforcement, or an insert (for example fabric-reinforced sheet, metal insert)?",
        "type": "select",
        "options": [
          "No reinforcement",
          "Fabric or fiber reinforcement",
          "Metal or rigid insert",
          "Wire reinforcement",
          "Not sure, advise"
        ],
        "help": "Reinforcement and inserts change construction and tooling. Describe placement and orientation in the notes if known."
      }
    ]
  },
  {
    "id": "qd-conformity-traceability",
    "label": "Quality documentation and certification",
    "category": "quality-documentation",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "qd-coc-required",
        "label": "Is a certificate of conformity or compliance required with each shipment?",
        "type": "boolean",
        "help": "A certificate of conformity commonly states that goods were made to the agreed specification. Scope and wording should be agreed before order; we do not act as a certification authority."
      },
      {
        "id": "qd-test-reports",
        "label": "Are material test reports or measured property data required, and which properties?",
        "type": "textarea",
        "help": "List the properties you need reported (for example hardness, tensile, specific gravity). Actual testing should use an accredited or qualified lab and the official test method."
      },
      {
        "id": "qd-batch-traceability",
        "label": "Is batch or lot traceability documentation required on the finished goods?",
        "type": "boolean",
        "help": "Traceability documentation links shipped parts to production and material records. It is commonly requested for regulated or safety-critical use."
      },
      {
        "id": "qd-regulatory-docs",
        "label": "Are any regulatory or industry documents needed (for example a declaration related to food contact, potable water, or restricted substances)?",
        "type": "textarea",
        "help": "Describe what your customer or market commonly requires. Any regulatory document requires verification; we do not issue official certifications or compliance approvals."
      },
      {
        "id": "qd-inspection-forms",
        "label": "Do you require customer-specific inspection forms, first-article reports, or a PPAP-style submission?",
        "type": "select",
        "options": [
          "No special forms",
          "First-article inspection report",
          "Customer inspection form provided",
          "PPAP-style submission",
          "Other, see notes"
        ],
        "help": "Provide your template if you have one. The required level of documentation may affect lead time and price."
      },
      {
        "id": "qd-drawing-revision",
        "label": "What is the controlling drawing or specification revision for this RFQ?",
        "type": "text",
        "help": "State the revision number or date so the quote is tied to the correct version. Quoting commonly references the latest revision you supply."
      }
    ]
  },
  {
    "id": "sc-volume-logistics",
    "label": "Supply chain, volume, and logistics",
    "category": "supply-chain",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "sc-order-frequency",
        "label": "Is this a one-time purchase or a recurring requirement?",
        "type": "select",
        "options": [
          "One-time",
          "Recurring, scheduled releases",
          "Recurring, as-needed",
          "Pilot now with production to follow",
          "Not sure"
        ],
        "help": "Recurring demand may unlock different pricing and planning. This helps shape the quote structure."
      },
      {
        "id": "sc-annual-volume",
        "label": "What is the estimated annual or total volume (units, kilograms, linear meters, or square meters as applicable)?",
        "type": "number",
        "help": "Even a rough estimate helps. Tooling-based parts typically price differently across volume tiers due to amortized tooling and setup."
      },
      {
        "id": "sc-target-lead-time",
        "label": "What is your target or required lead time, and is there a firm need-by date?",
        "type": "text",
        "help": "Provide the date and whether it is firm. Lead time commonly depends on tooling, material availability, and current capacity."
      },
      {
        "id": "sc-delivery-location",
        "label": "What is the delivery location and preferred shipping or Incoterms arrangement?",
        "type": "text",
        "help": "Destination and delivery terms affect freight and timing. Specify if you arrange your own carrier."
      },
      {
        "id": "sc-packaging",
        "label": "Are there packaging, labeling, or kitting requirements?",
        "type": "textarea",
        "help": "Describe carton, pallet, bag, or labeling needs. Special packaging may add cost and lead time."
      },
      {
        "id": "sc-current-supplier-issue",
        "label": "Are you switching from a current supplier, and if so what problem are you trying to solve (cost, quality, lead time, capacity)?",
        "type": "textarea",
        "help": "Context on the current situation helps tailor the response. This is optional and kept confidential to the quoting process."
      }
    ]
  },
  {
    "id": "qt-oil-chemical-exposure",
    "label": "Service test: oil and chemical exposure",
    "category": "quality-test",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [
      "oil",
      "chemical",
      "fuel",
      "fluid",
      "solvent"
    ],
    "questions": [
      {
        "id": "qt-oc-fluid",
        "label": "Which specific fluid or chemical will the part contact (for example a mineral oil, fuel, acid, base, or a named solvent)?",
        "type": "text",
        "help": "Naming the exact fluid matters; compatibility varies widely by polymer. Any compatibility guidance is illustrative and requires verification with the official standard and a qualified lab."
      },
      {
        "id": "qt-oc-concentration",
        "label": "What is the concentration or mixture of the fluid, if applicable?",
        "type": "text",
        "help": "Concentration often changes chemical aggressiveness. Provide percent or mixture details where known."
      },
      {
        "id": "qt-oc-temperature",
        "label": "At what temperature will the exposure occur?",
        "type": "number",
        "help": "State the typical and maximum contact temperature with units. Higher temperature commonly accelerates fluid attack and swell."
      },
      {
        "id": "qt-oc-duration",
        "label": "What is the exposure pattern and expected duration (intermittent splash, continuous immersion, expected service life)?",
        "type": "textarea",
        "help": "Continuous immersion is typically more demanding than occasional splash. Describe the realistic exposure profile."
      },
      {
        "id": "qt-oc-immersion-test",
        "label": "Is fluid immersion or compatibility testing required as part of acceptance?",
        "type": "select",
        "options": [
          "Yes, immersion testing required",
          "Property change limits to be agreed",
          "No formal testing, advise material only",
          "Not sure"
        ],
        "help": "Immersion testing commonly measures volume swell and property change after exposure. Actual testing should use the official method and an accredited or qualified lab."
      }
    ]
  },
  {
    "id": "qt-high-temperature",
    "label": "Service test: high-temperature exposure",
    "category": "quality-test",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [
      "high temp",
      "high temperature",
      "heat",
      "thermal"
    ],
    "questions": [
      {
        "id": "qt-ht-service-temp",
        "label": "What is the maximum service temperature the part must withstand?",
        "type": "number",
        "help": "Provide the peak temperature with units. Polymer family selection commonly depends heavily on this value."
      },
      {
        "id": "qt-ht-continuous",
        "label": "Is the heat exposure intermittent or continuous?",
        "type": "select",
        "options": [
          "Continuous",
          "Intermittent or cyclic",
          "Occasional excursions only",
          "Not sure"
        ],
        "help": "Continuous heat typically reduces usable life faster than brief excursions. This influences material recommendations."
      },
      {
        "id": "qt-ht-duration",
        "label": "What is the expected service life or duration at temperature?",
        "type": "text",
        "help": "Estimate hours, cycles, or years at the stated temperature. Heat aging is generally cumulative over time."
      },
      {
        "id": "qt-ht-aging-test",
        "label": "Is heat-aging testing required, and to what property change limits?",
        "type": "textarea",
        "help": "Heat-aging tests commonly check hardness, tensile, and elongation change after oven exposure. Use the official method and an accredited or qualified lab for actual testing."
      }
    ]
  },
  {
    "id": "qt-food-potable",
    "label": "Service test: food contact and potable water",
    "category": "quality-test",
    "appliesToMaterials": [],
    "appliesToProducts": [],
    "appliesToEnvironments": [
      "food",
      "potable",
      "drinking water",
      "beverage",
      "dairy"
    ],
    "questions": [
      {
        "id": "qt-fp-approval",
        "label": "What approval or documentation does your application commonly require for food or potable-water contact?",
        "type": "textarea",
        "help": "Describe what your customer or market expects. Any such approval requires verification; we do not issue food-contact or potable-water certifications."
      },
      {
        "id": "qt-fp-docs-vs-testing",
        "label": "Are supplier-provided compliance documents sufficient, or is independent lab testing required?",
        "type": "select",
        "options": [
          "Supplier documents sufficient",
          "Independent lab testing required",
          "Both required",
          "Not sure, advise"
        ],
        "help": "Some buyers accept documentation while others require independent results. Actual testing should use an accredited or qualified lab."
      },
      {
        "id": "qt-fp-region",
        "label": "Which country or region's requirements apply to this application?",
        "type": "text",
        "help": "Requirements commonly differ by region. Naming the market helps scope what documentation may be relevant; it still requires verification."
      },
      {
        "id": "qt-fp-contact-conditions",
        "label": "What are the contact conditions (temperature, wet or dry, contact duration, food type)?",
        "type": "textarea",
        "help": "Contact conditions often affect which approvals or tests apply. Describe the realistic use."
      }
    ]
  },
  {
    "id": "pm-sheet-rubber",
    "label": "Sheet rubber requirements",
    "category": "product-manufacturing",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "sheet",
      "rubber-sheet",
      "sheeting",
      "matting"
    ],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "pm-sheet-hardness",
        "label": "Is a specific hardness or durometer range required?",
        "type": "text",
        "help": "State the target durometer and any tolerance band. Durometer is commonly verified per the official hardness method on a flat sample."
      },
      {
        "id": "pm-sheet-thickness-tolerance",
        "label": "What thickness and thickness tolerance are required?",
        "type": "text",
        "help": "Provide nominal thickness and the acceptable plus/minus range. Sheet thickness tolerance commonly varies with construction method and thickness."
      },
      {
        "id": "pm-sheet-surface-finish",
        "label": "What surface finish is required (for example smooth or plate finish, cloth or fabric impression, matte)?",
        "type": "select",
        "options": [
          "Smooth or plate finish",
          "Cloth or fabric impression",
          "Matte",
          "Either acceptable",
          "Specify in notes"
        ],
        "help": "Surface finish on sheet often depends on the finishing surface used during processing."
      },
      {
        "id": "pm-sheet-form",
        "label": "Is the sheet required as a roll or as cut pieces, and to what dimensions?",
        "type": "textarea",
        "help": "Specify roll width and length, or cut-piece size and quantity. Cutting may affect edge condition and price."
      },
      {
        "id": "pm-sheet-tensile-elongation",
        "label": "Are tensile strength and elongation requirements specified?",
        "type": "text",
        "help": "Provide minimum values if required. These are commonly verified per the official tensile method using an accredited or qualified lab."
      },
      {
        "id": "pm-sheet-compression-set",
        "label": "Is a compression set requirement specified for the sheet?",
        "type": "boolean",
        "help": "Compression set commonly matters for sealing or gasketing service. State limits and conditions if known; actual testing should follow the official method."
      }
    ]
  },
  {
    "id": "pm-gasket",
    "label": "Gasket and seal requirements",
    "category": "product-manufacturing",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "gasket",
      "seal",
      "ring",
      "flange-gasket"
    ],
    "appliesToEnvironments": [],
    "questions": [
      {
        "id": "pm-gasket-to-drawing",
        "label": "Should the gasket be made to a dimensional drawing, a template, or a sample?",
        "type": "select",
        "options": [
          "Dimensional drawing",
          "Template provided",
          "Physical sample",
          "Standard flange size",
          "Describe in notes"
        ],
        "help": "A controlled drawing or sample improves fit accuracy. If using a flange standard, name it; any standard reference requires verification."
      },
      {
        "id": "pm-gasket-bolt-pattern",
        "label": "What is the bolt-hole pattern or flange dimension (for example bolt circle, hole count and size, or a named flange class)?",
        "type": "textarea",
        "help": "Provide bolt circle diameter, number and size of holes, and inner and outer diameter. Any named flange class is illustrative and requires verification before sourcing."
      },
      {
        "id": "pm-gasket-application",
        "label": "What is the sealing application (for example flange joint, lid seal, static or dynamic, internal pressure)?",
        "type": "textarea",
        "help": "Describe the joint and whether it is static or dynamic, and any pressure or torque it must handle. This informs material and construction."
      },
      {
        "id": "pm-gasket-compression-recovery",
        "label": "Are compressibility, recovery, or compression set requirements specified?",
        "type": "text",
        "help": "State any limits and conditions. These properties commonly govern sealing performance and are verified per the official method with a qualified lab."
      },
      {
        "id": "pm-gasket-media",
        "label": "What media will the gasket contact, and at what temperature and pressure?",
        "type": "textarea",
        "help": "Media, temperature, and pressure drive material choice. Any compatibility guidance is illustrative and requires verification before sourcing."
      }
    ]
  }
];
