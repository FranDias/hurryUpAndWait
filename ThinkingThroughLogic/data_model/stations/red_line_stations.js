// Stations only has information related to the station itself. 
// With the exception of orientation to relevant terminal stations


const redline_trunk = [
  {
    name: ["Alewife"],
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: ["Mattapan", "Ashmont"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Davis",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Porter",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Harvard",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Central",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Kendall",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Charles/MGH",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Park Street",
    isAccessible: undefined,
    transfersTo: ["green"],
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Downtown Crossing",
    isAccessible: undefined,
    transfersTo: ["orange"],
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "South Station",
    isAccessible: undefined,
    transfersTo: ["silver"],
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Broadway",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Andrew",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "JFK/UMass",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  
];

const redline_branch_mattapan = [
  ...redline_branch_ashmont,
  {
    name: "Cedar Grove",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Butler",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Milton",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Central Avenue",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Valley Road",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Capen Street",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Mattapan",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Ashmont North"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
];

const redline_branch_braintree = [
  ...redline_trunk,
  {
    name: "North Quincy",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Wollaston",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Quincy Center",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Quincy Adams",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Braintree",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
]

const redline_branch_ashmont = [
  ...redline_trunk,
  {
    name: "Savin Hill",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: ["Ashmont"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Fields Corner",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: "Ashmont",
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Shawmut",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: ["Ashmont"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
  {
    name: "Ashmont",
    isAccessible: undefined,
    transfersTo: undefined,
    exits: [
      {
        towards: ["Alewife"],
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
      {
        towards: undefined,
        car: undefined,
        door: { side: undefined, number: undefined },
        isForTransfer: undefined,
      },
    ],
  },
];
