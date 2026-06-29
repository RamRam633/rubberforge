import type { ProductMaterialMatrix } from "@/types/platform";

export const productMaterialMatrix: ProductMaterialMatrix = {
  "rows": [
    {
      "materialId": "natural-rubber",
      "note": "NR (natural rubber) is commonly used where abrasion resistance and resilience matter (liners, pads); it offers high mechanical strength but generally requires technical review for oil, ozone, and high-temperature service.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "suitable-with-review"
        },
        {
          "column": "Liner / Lining",
          "level": "common"
        },
        {
          "column": "Pad",
          "level": "common"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    },
    {
      "materialId": "sbr",
      "note": "SBR (styrene-butadiene rubber) is commonly used as a general-purpose sheet and molded compound with medium abrasion resistance; it requires technical review for oil, ozone, and chemical exposure.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "suitable-with-review"
        },
        {
          "column": "Liner / Lining",
          "level": "suitable-with-review"
        },
        {
          "column": "Pad",
          "level": "common"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "common"
        }
      ]
    },
    {
      "materialId": "epdm",
      "note": "EPDM (ethylene-propylene-diene) is commonly used for weather, water, ozone, and steam service in sheets, gaskets, seals, and linings; it generally requires technical review for petroleum oil and fuel contact.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "common"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "common"
        },
        {
          "column": "Pad",
          "level": "suitable-with-review"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "common"
        }
      ]
    },
    {
      "materialId": "nbr",
      "note": "NBR (nitrile / acrylonitrile-butadiene) is commonly used for oil- and fuel-resistant sheets, gaskets, and seals; it typically requires technical review for ozone, weathering, and high-temperature exposure.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "common"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "suitable-with-review"
        },
        {
          "column": "Pad",
          "level": "suitable-with-review"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "common"
        }
      ]
    },
    {
      "materialId": "neoprene",
      "note": "CR / chloroprene (neoprene-type) is commonly used as a balanced general-purpose elastomer with medium oil, weather, and flame resistance across sheets, gaskets, seals, and pads.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "common"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "suitable-with-review"
        },
        {
          "column": "Pad",
          "level": "common"
        },
        {
          "column": "Sleeve",
          "level": "common"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "common"
        }
      ]
    },
    {
      "materialId": "silicone",
      "note": "Silicone (VMQ) is commonly used for high- and low-temperature service in sheets, seals, and molded parts; it generally offers low abrasion and tear strength, so liner and pad use requires technical review.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "not-typical"
        },
        {
          "column": "Pad",
          "level": "suitable-with-review"
        },
        {
          "column": "Sleeve",
          "level": "common"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    },
    {
      "materialId": "fkm",
      "note": "FKM / fluoroelastomer (also known by trade name Viton as one example) is commonly used for aggressive chemical, fuel, and high-temperature seals and sheets; abrasion-driven liner and pad use is not typical and requires technical review.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "common"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "suitable-with-review"
        },
        {
          "column": "Pad",
          "level": "not-typical"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    },
    {
      "materialId": "butyl",
      "note": "Butyl (IIR / isobutylene-isoprene) is commonly used for low gas and moisture permeability in linings and chemical-barrier sheets; it offers good acid and weather resistance but requires technical review for petroleum oil service.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "suitable-with-review"
        },
        {
          "column": "Liner / Lining",
          "level": "common"
        },
        {
          "column": "Pad",
          "level": "suitable-with-review"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "suitable-with-review"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    },
    {
      "materialId": "csm",
      "note": "CSM / chlorosulfonated polyethylene (also known by trade name Hypalon as one example) is commonly used for ozone, acid, and weather-resistant linings and sheets; many other forms may be suitable but require technical review for the specific service.",
      "cells": [
        {
          "column": "Sheet",
          "level": "common"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "suitable-with-review"
        },
        {
          "column": "Liner / Lining",
          "level": "common"
        },
        {
          "column": "Pad",
          "level": "suitable-with-review"
        },
        {
          "column": "Sleeve",
          "level": "suitable-with-review"
        },
        {
          "column": "Molded Part",
          "level": "suitable-with-review"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    },
    {
      "materialId": "polyurethane",
      "note": "PU (polyurethane elastomer) is commonly used where very-high abrasion and tear resistance are needed in pads, liners, and molded parts; chemical and high-temperature exposure typically requires technical review.",
      "cells": [
        {
          "column": "Sheet",
          "level": "suitable-with-review"
        },
        {
          "column": "Gasket",
          "level": "suitable-with-review"
        },
        {
          "column": "Seal",
          "level": "common"
        },
        {
          "column": "Liner / Lining",
          "level": "common"
        },
        {
          "column": "Pad",
          "level": "common"
        },
        {
          "column": "Sleeve",
          "level": "common"
        },
        {
          "column": "Molded Part",
          "level": "common"
        },
        {
          "column": "Strip",
          "level": "suitable-with-review"
        }
      ]
    }
  ],
  "columns": [
    "Sheet",
    "Gasket",
    "Seal",
    "Liner / Lining",
    "Pad",
    "Sleeve",
    "Molded Part",
    "Strip"
  ]
};
