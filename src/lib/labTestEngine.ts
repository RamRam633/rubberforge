import type { LabTestEngineData } from "@/types/qaLab";
export const labTestEngineData: LabTestEngineData = {
  "applicationRules": [
    {
      "application": "outdoor/weather",
      "recommendedTests": [
        "ozone/weathering",
        "heat aging",
        "hardness",
        "visual",
        "tensile strength"
      ],
      "questionsToAsk": [
        "Will the part be exposed to direct sunlight, UV, or ozone sources such as motors or high-voltage equipment?",
        "Is the part held under tension, stretch, or repeated flexing while in service outdoors?",
        "What temperature range and weather exposure (rain, cold, heat cycling) does the part see?"
      ],
      "warnings": [
        "Demo: without confirmed UV, ozone, or weather exposure details, the ozone/weathering recommendation stays a preliminary suggestion and may not match real service.",
        "Demo: a saturated family such as EPDM is commonly the typical fit for exposed strained service, but compound and antiozonant suitability requires qualified lab procedures to confirm."
      ]
    },
    {
      "application": "oil exposure",
      "recommendedTests": [
        "fluid immersion",
        "hardness",
        "tensile strength",
        "specific gravity",
        "visual"
      ],
      "questionsToAsk": [
        "What specific oil, fuel, or media contacts the part, and is it a mineral oil, synthetic, biodiesel blend, or additive-rich fluid?",
        "What is the maximum fluid temperature and the expected contact duration?",
        "Are there limits on allowable volume swell or property change after exposure?"
      ],
      "warnings": [
        "Demo: missing oil, fuel, or media identity means the fluid immersion result is review needed only, since swell behavior is highly media- and temperature-dependent.",
        "Demo: standard reference fluids approximate but do not equal the real service fluid, so suitability cannot be assumed without qualified lab procedures."
      ]
    },
    {
      "application": "sealing/compression",
      "recommendedTests": [
        "compression set",
        "hardness",
        "tensile strength",
        "dimensional",
        "visual"
      ],
      "questionsToAsk": [
        "What compression load or deflection and sealing surface (flange, groove, mating face) does the seal work against?",
        "What service temperature and duration does the seal hold, and is the load static or cycled?",
        "What media or fluid does the seal contact, and are there leak or recovery limits?"
      ],
      "warnings": [
        "Demo: without compression load, sealing surface, and media details, compression set and recovery results stay a preliminary review and may not predict field sealing.",
        "Demo: compression set is meaningful only with the service temperature and duration stated, which require confirmation through qualified lab procedures."
      ]
    },
    {
      "application": "abrasion",
      "recommendedTests": [
        "abrasion",
        "hardness",
        "tear resistance",
        "tensile strength"
      ],
      "questionsToAsk": [
        "What is the abrasive media, and is the wear mechanism sliding, impacting, gouging, or a combination?",
        "Is an abrasion loss limit or relative index specified for acceptance?",
        "What contact pressure, speed, and any wet or slurry condition does the part see?"
      ],
      "warnings": [
        "Demo: lab abrasion ranks compounds but does not directly predict field life, which depends on the actual media and dynamics not yet provided.",
        "Demo: without the wear mechanism defined, the abrasion method may not represent service, so results are conceptual until confirmed by qualified lab procedures."
      ]
    },
    {
      "application": "high temperature",
      "recommendedTests": [
        "heat aging",
        "compression set",
        "hardness",
        "tensile strength",
        "elongation"
      ],
      "questionsToAsk": [
        "What is the maximum continuous service temperature and any peak or intermittent spikes?",
        "How much property change after aging is acceptable for the application?",
        "Is the heat exposure dry, steam, or combined with fluid or chemical contact?"
      ],
      "warnings": [
        "Demo: accelerated heat aging approximates but does not equal real-time service, and over-acceleration can change the degradation mechanism.",
        "Demo: without the maximum service temperature confirmed, family and grade fit (for example silicone or FKM) is a preliminary suggestion needing qualified lab procedures."
      ]
    },
    {
      "application": "potable/food documentation",
      "recommendedTests": [
        "visual",
        "dimensional",
        "specific gravity",
        "hardness"
      ],
      "questionsToAsk": [
        "What regulatory framework or documentation does the application require (food-contact, potable-water, or restricted-substance context)?",
        "Is full lot and compound traceability back to the batch required on shipped product?",
        "Is a color or grade indicator (for example a specific shade) expected to signal the rating?"
      ],
      "warnings": [
        "Demo: color, hardness, and visual checks never confirm a food or potable rating; that status depends on documentation and qualified lab procedures, not appearance.",
        "Demo: without the required regulatory framework identified, the documentation package is incomplete and the recommendation stays conceptual."
      ]
    },
    {
      "application": "chemical exposure",
      "recommendedTests": [
        "fluid immersion",
        "hardness",
        "tensile strength",
        "visual",
        "specific gravity"
      ],
      "questionsToAsk": [
        "What specific chemical or chemical mixture contacts the part, and at what concentration?",
        "What is the chemical temperature and the expected exposure duration?",
        "Are there limits on allowable swell, mass change, or property loss after exposure?"
      ],
      "warnings": [
        "Demo: missing chemical identity, concentration, and temperature means the fluid immersion result is review needed only, since compatibility is highly media-specific.",
        "Demo: a polymer family screen is preliminary; actual chemical suitability cannot be assumed and requires qualified lab procedures against the real media."
      ]
    }
  ],
  "materialRules": [
    {
      "material": "nbr",
      "note": "NBR is commonly selected for oil and fuel resistance but generally has limited ozone and weathering resistance, so oil-service screening and exposure questions matter most.",
      "recommendedTests": [
        "fluid immersion",
        "hardness",
        "tensile strength",
        "compression set"
      ]
    },
    {
      "material": "epdm",
      "note": "EPDM is a saturated polymer that typically resists ozone, weather, and many polar fluids well but is generally unsuitable for petroleum oils, making it a common outdoor and sealing choice.",
      "recommendedTests": [
        "ozone/weathering",
        "heat aging",
        "compression set",
        "hardness"
      ]
    },
    {
      "material": "fkm",
      "note": "FKM is commonly chosen for high-temperature and aggressive-chemical service where its heat and fluid resistance are typically strong, though low-temperature flexibility is usually limited.",
      "recommendedTests": [
        "heat aging",
        "fluid immersion",
        "compression set",
        "hardness"
      ]
    },
    {
      "material": "silicone",
      "note": "Silicone typically offers a wide temperature range with good heat and cold flexibility, but generally has lower mechanical strength and tear resistance, so durability checks matter.",
      "recommendedTests": [
        "heat aging",
        "low-temperature flexibility",
        "hardness",
        "tear resistance"
      ]
    },
    {
      "material": "neoprene",
      "note": "Neoprene is a balanced general-purpose family with commonly moderate ozone, weather, and oil resistance, so a broad screen across exposure and mechanical properties is typical.",
      "recommendedTests": [
        "ozone/weathering",
        "fluid immersion",
        "hardness",
        "tensile strength"
      ]
    },
    {
      "material": "natural-rubber",
      "note": "Natural rubber typically delivers high strength, elongation, and abrasion resistance but generally has poor ozone, weather, and oil resistance, so it favors mechanical and wear duty.",
      "recommendedTests": [
        "tensile strength",
        "abrasion",
        "tear resistance",
        "hardness"
      ]
    }
  ],
  "defectRules": [
    {
      "defect": "under-cure",
      "diagnosticTests": [
        "hardness",
        "compression set",
        "tensile strength",
        "modulus"
      ],
      "howItHelps": "An under-developed network commonly reads low on hardness and modulus with high compression set, so a cure-state review paired with these physical trends typically flags incomplete crosslinking before parts ship."
    },
    {
      "defect": "over-cure",
      "diagnosticTests": [
        "elongation",
        "tensile strength",
        "hardness",
        "tear resistance"
      ],
      "howItHelps": "Over-cure typically shows up as falling elongation and tear resistance with rising or drifting hardness, so tracking these together helps separate excess cure from a healthy state of cure."
    },
    {
      "defect": "scorch",
      "diagnosticTests": [
        "visual",
        "hardness",
        "tensile strength"
      ],
      "howItHelps": "Premature crosslinking before shaping commonly leaves surface marks, flow defects, and uneven properties, so visual review backed by hardness and tensile spot checks helps flag scorched stock."
    },
    {
      "defect": "poor-dispersion",
      "diagnosticTests": [
        "tensile strength",
        "tear resistance",
        "specific gravity",
        "visual"
      ],
      "howItHelps": "Poorly dispersed filler creates weak spots that typically lower tensile and tear values and can shift density, so these tests with visual review help reveal mixing problems that hardness alone may miss."
    },
    {
      "defect": "trapped-air",
      "diagnosticTests": [
        "visual",
        "specific gravity",
        "thickness",
        "dimensional"
      ],
      "howItHelps": "Voids and porosity commonly lower measured density and appear as blisters or pits, so visual inspection combined with a specific gravity and gauge check helps detect trapped air before it ruins sealing."
    },
    {
      "defect": "contamination",
      "diagnosticTests": [
        "visual",
        "tensile strength",
        "specific gravity",
        "tear resistance"
      ],
      "howItHelps": "Foreign inclusions typically create visible defects and localized weak points, so visual review supported by tensile, tear, and density checks helps surface contamination that compromises strength or appearance."
    },
    {
      "defect": "cracking",
      "diagnosticTests": [
        "ozone/weathering",
        "visual",
        "elongation",
        "heat aging"
      ],
      "howItHelps": "Surface cracking commonly traces to ozone, weathering, aging, or embrittlement, so a weathering and aging review with visual and elongation checks helps separate environmental cracking from a mechanical cause."
    },
    {
      "defect": "hardness-drift",
      "diagnosticTests": [
        "hardness",
        "specific gravity",
        "tensile strength",
        "modulus"
      ],
      "howItHelps": "A hardness shift between lots commonly signals a cure, filler, or compound change, so trending hardness alongside density and modulus helps confirm whether the drift is a real consistency problem."
    }
  ]
};
