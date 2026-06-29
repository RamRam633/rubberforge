import type { WalkthroughChapter } from "@/types/factoryLife";
export const factoryWalkthroughChapters: WalkthroughChapter[] = [
  {
    "index": 1,
    "id": "welcome",
    "title": "Welcome to the Floor",
    "focusStation": "raw-material-room",
    "explanation": "Your tour begins where every rubber product does: at the front of the plant, looking down the line. A rubber factory is best understood as a controlled transformation, raw polymers and additives entering at one end and a finished, cured product leaving at the other. Each station you will visit adds a specific, measurable change, and the sequence rarely varies because the chemistry and material flow largely dictate the layout. Here at the raw-material room you can see the whole journey laid out, from intake bays through mixing, forming, curing, and finishing. Think of this opening stop as orientation, a chance to map how material, people, and quality checks move together before we step closer to any single machine.",
    "roleId": "production-supervisor",
    "whyRfq": "Understanding the full process flow lets a buyer judge whether a supplier can realistically meet the scope, volume, and tolerances an RFQ requires."
  },
  {
    "index": 2,
    "id": "raw-materials",
    "title": "Raw Materials and Intake",
    "focusStation": "raw-material-room",
    "explanation": "Rubber compounds are built from a base elastomer, whether natural rubber or a synthetic such as SBR, EPDM, or nitrile, blended with fillers like carbon black, plasticizers, antidegradants, and a curing system. In the intake room these arrive as bales, bags, and drums, each lot ideally tied to a certificate of analysis. Material here is received, identified, and staged rather than processed, so the emphasis is on traceability and storage conditions, since temperature and age can subtly shift how a compound later behaves. A handler conceptually verifies labels against incoming documentation and updates lot status on a tablet, keeping each material segregated until it is released. Nothing is mixed at this stage; the room simply guarantees that what enters the process is known and accounted for.",
    "roleId": "material-handler",
    "whyRfq": "Material provenance and lot traceability are often RFQ requirements in regulated sectors, so intake discipline signals whether a supplier can document what went into every part."
  },
  {
    "index": 3,
    "id": "mixing",
    "title": "Compounding in the Internal Mixer",
    "focusStation": "internal-mixer",
    "explanation": "Mixing is where a recipe becomes a homogeneous compound. In an internal mixer, the base elastomer and its additives are combined under controlled shear so that fillers disperse evenly and the material reaches a consistent state, a step that strongly influences final strength, hardness, and consistency. Because dispersion quality cannot easily be corrected later, this is one of the most decisive points in the whole process. The operator's role here is conceptual and supervisory: monitoring the mixer's control panel and trend readouts from a safe distance, watching energy and temperature indicators on screen, and confirming that each batch tracks against its expected profile before release. A small sample may be drawn once the batch is staged for the next step, supporting the lab checks that follow.",
    "roleId": "mixer-operator",
    "whyRfq": "Consistent compounding underpins repeatable mechanical properties, so an RFQ for parts with tight hardness or durability targets depends on disciplined mixing."
  },
  {
    "index": 4,
    "id": "milling",
    "title": "Milling and Sheet Preparation",
    "focusStation": "two-roll-mill",
    "explanation": "After mixing, compound often passes to a two-roll mill, which further blends and warms the material and works it into a continuous, workable sheet ready for downstream forming. Milling also offers a natural inspection point, because a uniform, blemish-free sheet is an early sign that the upstream batch is sound. In this virtual factory the operator observes the process from a safe position, reading the mill's status display and confirming sheet uniformity by sight rather than reaching toward any moving rolls or nip points. Samples for testing are collected only from material that has been safely set aside. The goal of this station is steady, even feedstock, since irregular sheet thickness or temperature would propagate into every part formed afterward.",
    "roleId": "mill-calender-operator",
    "whyRfq": "Uniform feedstock determines dimensional stability in the finished product, which matters when an RFQ specifies tight thickness or surface-quality tolerances."
  },
  {
    "index": 5,
    "id": "calendering",
    "title": "Calendering into Sheet and Coating",
    "focusStation": "calender",
    "explanation": "Calendering passes the compound between large precision rolls to produce sheet or to coat fabric and reinforcement at a controlled thickness and surface finish. It is the station most associated with consistent gauge across a wide web, which is why products such as conveyor belting, sheeting, and coated textiles rely on it. Thickness and surface quality here translate directly into how a part performs and whether it meets dimensional callouts. The operator monitors gauge and tension readouts on the control panel and reviews inline measurement data on a tablet, observing the running web from a safe distance rather than touching the rolls. Any drift is flagged for the maintenance and quality teams. Calendered output is checked for evenness before it advances toward curing.",
    "roleId": "mill-calender-operator",
    "whyRfq": "Calendering sets achievable thickness tolerance and surface finish, so it defines whether a supplier can hold the dimensional spec an RFQ calls out."
  },
  {
    "index": 6,
    "id": "vulcanization",
    "title": "Vulcanization and Curing",
    "focusStation": "vulcanization",
    "explanation": "Vulcanization is the chemical heart of rubber manufacturing, where heat and the curing system cross-link the polymer chains and convert a soft, plastic compound into a durable, elastic, dimensionally stable product. This irreversible step is what gives rubber its strength, resilience, and resistance to heat and aging. Cure is highly sensitive to time and temperature, so the relationship between them is engineered in advance and validated by lab data rather than improvised. In this virtual factory operators do not enter or reach into hot curing chambers; they monitor cure indicators on control panels, track each load's status on a tablet, and rely on instrumentation to confirm the cycle completed as planned. Properly cured material is the foundation of everything the quality team will later verify.",
    "roleId": "cure-operator",
    "whyRfq": "Cure quality governs the final mechanical and aging properties, so an RFQ demanding specific durability or temperature performance hinges on a controlled, validated curing process."
  },
  {
    "index": 7,
    "id": "cooling-finishing",
    "title": "Cooling and Stabilizing",
    "focusStation": "cooling",
    "explanation": "Freshly cured rubber is hot and still settling into its final properties, so it passes through a controlled cooling stage before any precise handling or measurement. Cooling allows dimensions to stabilize and relieves residual stresses, which is important because measuring or trimming a part before it has equilibrated can give misleading results. In this station the work is conceptual and observational: a technician monitors cooling conditions on a panel, lets material come to a safe and stable state, and updates status once a load is ready to advance. Nothing is forced or rushed, since uneven cooling can introduce warping or internal stress. Only after material has properly stabilized does it move on to trimming and the quality checks that depend on accurate, repeatable dimensions.",
    "roleId": "maintenance-technician",
    "whyRfq": "Stable, stress-relieved parts hold their dimensions over time, which is what lets a supplier credibly promise the long-term tolerances an RFQ specifies."
  },
  {
    "index": 8,
    "id": "quality-inspection",
    "title": "Quality and Inspection",
    "focusStation": "inspection",
    "explanation": "Quality inspection is where the product is measured against specification rather than assumed to be correct. Inspectors evaluate dimensions, hardness, surface condition, and, on sampled material, mechanical properties such as tensile strength and elongation, comparing results to the agreed acceptance criteria. This station is conceptual and instrument-based: the inspector collects samples that have been safely set aside, records measurements on a tablet, and reviews lab data, building the documented evidence that a lot conforms. Nonconforming material is flagged and held rather than shipped. Because inspection draws on every upstream decision, from raw-material lot to cure cycle, it is also where traceability pays off, letting the team connect any deviation back to its source.",
    "roleId": "qa-inspector",
    "whyRfq": "Documented inspection results are the proof of conformance an RFQ ultimately asks for, turning a supplier's claims into verifiable, auditable evidence."
  },
  {
    "index": 9,
    "id": "packaging-rfq",
    "title": "Trimming, Packaging, and the Paper Trail",
    "focusStation": "trimming-slitting",
    "explanation": "Before shipment, material is trimmed and slit to final size and then packaged to protect it in transit and storage. This finishing work converts a qualified lot into discrete, labeled units, each ideally carrying its identification back to the originating batch. The operator's role here is conceptual and supervisory: confirming dimensions against the order, observing automated trimming and slitting from a safe distance, and recording lot and quantity details on a tablet. Packaging also captures the documentation that travels with the goods, the certificates and inspection records that close the loop on traceability. A clean, well-labeled package with complete records is the visible end of a disciplined process, and it is what a customer first sees on receipt.",
    "roleId": "qa-inspector",
    "whyRfq": "Accurate finishing, labeling, and accompanying documentation are exactly what an RFQ expects at delivery, since they let the buyer confirm they received what was specified."
  },
  {
    "index": 10,
    "id": "virtual-factory-to-rfq",
    "title": "From Virtual Factory to RFQ",
    "focusStation": "finished-roll",
    "explanation": "The tour ends at the finished roll, the tangible result of every decision made upstream, and a useful place to connect what you have seen to how sourcing actually works. Each station maps to a question a buyer asks: can the supplier source and trace materials, mix and form consistently, cure to the required properties, and prove conformance with documentation. Reading a factory this way turns a quote into an informed judgment rather than a guess. The finished roll in front of you embodies the full chain, raw material through cure, inspection, and packaging, and its quality is only as good as the weakest station along the way. With this map in mind, an RFQ becomes a structured conversation about whether a given plant can reliably deliver to spec.",
    "roleId": "sales-engineering-reviewer",
    "whyRfq": "Seeing the whole chain lets a reviewer match a supplier's real capabilities to RFQ requirements, so commitments on quality, volume, and tolerance rest on process evidence rather than promises."
  }
];
