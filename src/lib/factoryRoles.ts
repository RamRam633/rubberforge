import type { FactoryRole } from "@/types/factoryLife";
export const factoryRoles: FactoryRole[] = [
  {
    "id": "material-handler",
    "displayName": "Material Handler",
    "area": "warehouse",
    "purpose": "Receives, identifies, and stages incoming raw rubber bales, fillers, oils, and curing chemicals so the right materials reach downstream stations in the right sequence. Conceptually the first link between what an order requires and what physically arrives on the floor.",
    "whatTheyMonitor": "Inventory levels, lot and batch identifiers, container labels, storage-zone segregation, and first-in-first-out rotation. They watch for material that is approaching its useful shelf window or that is mislabeled, keeping a clear picture of what is on hand versus what an upcoming run will consume.",
    "infoNeeded": "Bill-of-materials call-offs from the production plan, supplier certificates of analysis, lot traceability records, and storage-condition guidance for temperature- or moisture-sensitive ingredients. They need to know which order each material is reserved for.",
    "qualitySafetyConcern": "Conceptual awareness that incompatible chemicals should be stored apart, that some ingredients are sensitive to heat or humidity, and that traceability is lost if a lot number is not recorded. Handling is depicted at a conceptual level: scanning labels, confirming counts on a tablet, never improvising with damaged or unidentified containers.",
    "rfqConnection": "When a request for quote is being scoped, the material handler's view of stock on hand, supplier lead times, and minimum order quantities informs whether the needed compounds can be sourced in time and at what staging cost.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station"
    ],
    "vestColor": "steel"
  },
  {
    "id": "batch-technician",
    "displayName": "Batch Technician",
    "area": "weighing-room",
    "purpose": "Translates an approved compound formulation into a correctly composed batch by assembling and confirming the set of ingredients a run calls for. Conceptually the gatekeeper of formulation accuracy before anything reaches a mixer.",
    "whatTheyMonitor": "Ingredient identity against the batch card, the completeness of a kit, and the match between what was pulled and what the formulation specifies. They monitor weighing-system readouts and reconciliation totals at a conceptual level rather than adjusting any recipe themselves.",
    "infoNeeded": "The released formulation sheet, ingredient substitution rules, allowable tolerance philosophy, and the lot numbers being consumed so each finished batch can be traced back to its inputs. Exact quantities and proportions stay within the controlled batch card and are not improvised.",
    "qualitySafetyConcern": "Conceptual understanding that a single misidentified or out-of-tolerance ingredient can compromise an entire run, and that dust-generating powders and reactive chemicals call for careful, contained handling. They verify against panels and records from a safe position and flag anything that does not reconcile.",
    "rfqConnection": "Batch composition drives material cost and feasibility, so the technician's reconciliation feeds the costing and capability picture used when reviewing whether a quoted compound can be produced as specified.",
    "relatedStations": [
      "weighing-station",
      "raw-material-room",
      "internal-mixer"
    ],
    "vestColor": "amber"
  },
  {
    "id": "mixer-operator",
    "displayName": "Internal Mixer Operator",
    "area": "mixing-area",
    "purpose": "Oversees the dispersion of polymers, fillers, and additives into a homogeneous compound. Conceptually responsible for confirming that a batch has been brought together consistently before it moves on, without personally intervening in the enclosed mixing process.",
    "whatTheyMonitor": "Control-panel indicators for the mixing cycle, energy and temperature trend displays, and discharge timing signals shown on the operator interface. They observe whether the cycle is following its expected profile and watch for deviations flagged by the system.",
    "infoNeeded": "The batch card identity, the expected mixing-cycle profile for that compound family, in-process check requirements, and any hold instructions from quality. They rely on displayed targets rather than setting machine parameters from memory.",
    "qualitySafetyConcern": "Conceptual awareness that mixing generates significant heat and that an enclosed mixer has rotating internals and hot surfaces, so the role is framed as monitoring panels and reading trend data from a safe distance rather than reaching into or near the machine. Under- or over-dispersion is understood as a quality risk to flag, not to fix by improvisation.",
    "rfqConnection": "Mixer throughput and cycle behavior set a real constraint on lead time and capacity, so the operator's view of how a compound mixes feeds the feasibility and scheduling input behind a quote.",
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill"
    ],
    "vestColor": "orange"
  },
  {
    "id": "mill-calender-operator",
    "displayName": "Mill and Calender Operator",
    "area": "calendering-line",
    "purpose": "Oversees the conversion of mixed compound into uniform sheet or web form, conceptually bridging the warmed, worked stock and the continuous gauge needed for downstream forming. Responsible for confirming the sheet looks consistent and is being tracked correctly.",
    "whatTheyMonitor": "Sheet gauge and width readouts, surface-uniformity displays, line-speed indicators, and tension or thickness trend graphs on the line's control screens. They monitor for visible defects, gauge drift, and edge irregularity as reported by sensors and tablets.",
    "infoNeeded": "The target sheet specification for the running job, the compound identity and its handling notes, and any downstream forming requirements. Exact roll spacing, nip settings, and temperatures stay within the controlled line program and are not adjusted by recall.",
    "qualitySafetyConcern": "Strong conceptual awareness that rotating rolls and nip points are among the most hazardous features in the plant, so the role is explicitly framed as observing from guarded panels and reading line data, never reaching toward moving rolls or the nip. Gauge and uniformity problems are escalated, not corrected by hand near the machine.",
    "rfqConnection": "Sheet gauge consistency and line speed determine yield and scrap, which feed directly into the cost and throughput assumptions reviewed when a sheet- or web-based part is quoted.",
    "relatedStations": [
      "two-roll-mill",
      "calender",
      "vulcanization"
    ],
    "vestColor": "orange"
  },
  {
    "id": "cure-operator",
    "displayName": "Cure Operator",
    "area": "curing-area",
    "purpose": "Oversees the vulcanization stage where shaped compound is transformed into finished elastomer through controlled heat and time. Conceptually the steward of the chemical crosslinking step that gives the product its final properties, monitoring rather than entering the curing equipment.",
    "whatTheyMonitor": "Cure-cycle status on the equipment panel, temperature and pressure trend displays, cycle-complete signals, and the queue of parts entering and leaving the curing area. They watch for cycles that deviate from their expected profile and for parts held pending a cure decision.",
    "infoNeeded": "Which cure program applies to the running product, the in-process and post-cure check requirements, and any quality holds. Exact cure temperatures, pressures, and dwell times remain within the controlled, equipment-resident program and are never set or recalled manually.",
    "qualitySafetyConcern": "Conceptual awareness that curing chambers and presses involve high heat, pressure, and steam, making them a zone to monitor strictly from the control station rather than approach during a cycle. Under-cure and over-cure are understood as property-altering quality risks to be flagged through the proper hold process.",
    "rfqConnection": "Cure time is often the throughput bottleneck for elastomer parts, so the cure operator's view of cycle duration and oven or press capacity is central to lead-time and capacity estimates behind a quote.",
    "relatedStations": [
      "vulcanization",
      "cooling"
    ],
    "vestColor": "violet"
  },
  {
    "id": "qa-inspector",
    "displayName": "QA Inspector",
    "area": "quality-lab",
    "purpose": "Independently confirms that in-process and finished material meets the agreed specification. Conceptually the impartial check on every prior stage, working from samples and records rather than running production equipment.",
    "whatTheyMonitor": "Dimensional, visual, and property check results against the specification, trend charts across batches, nonconformance rates, and the status of held lots. They track whether the process is producing consistently within its declared tolerances.",
    "infoNeeded": "The released specification and acceptance criteria, sampling philosophy, the traceability link from sample back to batch and lot, and the history of prior nonconformances for the same product. They need clear definitions of pass, hold, and reject.",
    "qualitySafetyConcern": "Conceptual awareness that samples may be hot or recently cured and should be collected only when safe to handle, and that independence of judgment must be protected from schedule pressure. Inspection is depicted as collecting samples and reading instruments in the lab, away from running machinery.",
    "rfqConnection": "Inspection data is the evidence that a quoted specification can actually be met, so historical capability and yield records feed directly into whether a tolerance promised in an RFQ is realistic.",
    "relatedStations": [
      "inspection",
      "finished-roll",
      "trimming-slitting"
    ],
    "vestColor": "green"
  },
  {
    "id": "maintenance-technician",
    "displayName": "Maintenance Technician",
    "area": "maintenance-corner",
    "purpose": "Keeps the plant's equipment available and reliable through planned upkeep and condition awareness. Conceptually responsible for the health of the machines that every production role depends on, working on equipment only when it is properly isolated and at rest.",
    "whatTheyMonitor": "Equipment condition indicators, vibration and temperature trends, lubrication and wear status, and the backlog of preventive and corrective work orders. They watch for early signs of degradation before they become unplanned downtime.",
    "infoNeeded": "Maintenance schedules and histories, equipment manuals and spare-parts availability, the energy-isolation and lockout philosophy for each machine, and production's schedule so work can be planned into safe windows. They never work on live or energized equipment.",
    "qualitySafetyConcern": "Strong conceptual emphasis that no maintenance is performed near nip points, rotating rolls, hot surfaces, or curing equipment until the machine is fully stopped, isolated, and verified safe. Worn or failing equipment is also understood as a quality risk because it drifts the process.",
    "rfqConnection": "Equipment reliability and maintenance windows determine realistic available capacity, which informs the lead-time commitments and risk assessment made when reviewing a quote.",
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill",
      "calender"
    ],
    "vestColor": "steel"
  },
  {
    "id": "production-supervisor",
    "displayName": "Production Supervisor",
    "area": "cooling-wip",
    "purpose": "Coordinates the flow of work across stations so that batches move from mixing through cure and finishing in the right order and on schedule. Conceptually the integrator who balances throughput, quality holds, and people across the floor.",
    "whatTheyMonitor": "Work-in-progress queues, station status and bottlenecks, schedule adherence, open quality holds, and staffing across shifts. They watch the cooling and WIP area as a buffer that reveals whether upstream and downstream rates are in balance.",
    "infoNeeded": "The production schedule and its priorities, current order status, quality hold decisions, equipment availability from maintenance, and material readiness. They need a live picture of commitments versus actual progress.",
    "qualitySafetyConcern": "Conceptual responsibility for protecting safe pacing, ensuring that schedule pressure never pushes anyone toward unsafe shortcuts near hazardous equipment, and that quality holds are respected rather than overridden. They lead from the floor through status boards and tablets, not by operating machines.",
    "rfqConnection": "The supervisor's read on real throughput, current load, and bottlenecks is the practical basis for committing a delivery date during quote review and for flagging when a promised lead time is at risk.",
    "relatedStations": [
      "cooling",
      "vulcanization",
      "finished-roll"
    ],
    "vestColor": "blue"
  },
  {
    "id": "sales-engineering-reviewer",
    "displayName": "Sales Engineering Reviewer",
    "area": "office-review",
    "purpose": "Bridges customer requirements and plant capability, conceptually translating an incoming request for quote into a producible, costed, and committable plan. Works from the review office rather than the production floor.",
    "whatTheyMonitor": "Incoming RFQ specifications, feasibility against existing compounds and processes, cost build-up, lead-time risk, and the consistency between what is promised and what the plant can repeatably deliver. They track quote status and assumptions made during review.",
    "infoNeeded": "Customer specifications and volumes, formulation and process capability data, material cost and lead-time inputs from the material handler, throughput and capacity inputs from the supervisor, and quality capability records from inspection. They consolidate inputs rather than set process parameters.",
    "qualitySafetyConcern": "Conceptual awareness that a quote must not promise tolerances, properties, or timelines the process cannot safely and repeatably achieve, since over-commitment pushes risk back onto the floor. Their concern is integrity of the promise, grounded in real capability evidence.",
    "rfqConnection": "This role is the direct owner of the RFQ-to-production link, assembling material, capacity, and quality inputs into a quote and feeding accepted orders back into the production plan that every other role executes.",
    "relatedStations": [
      "inspection",
      "finished-roll",
      "raw-material-room"
    ],
    "vestColor": "blue"
  }
];
export const factoryRolesById: Record<string, FactoryRole> = Object.fromEntries(factoryRoles.map((x) => [x.id, x]));
