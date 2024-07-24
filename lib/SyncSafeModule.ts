export const syncSafeModuleAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_factory",
        type: "address",
        internalType: "contract SafeProxyFactory",
      },
      { name: "_endpoint", type: "address", internalType: "address" },
      { name: "_delegate", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "allowInitializePath",
    inputs: [
      {
        name: "origin",
        type: "tuple",
        internalType: "struct Origin",
        components: [
          { name: "srcEid", type: "uint32", internalType: "uint32" },
          { name: "sender", type: "bytes32", internalType: "bytes32" },
          { name: "nonce", type: "uint64", internalType: "uint64" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balances",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "checkAfterExecution",
    inputs: [
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkAfterModuleExecution",
    inputs: [
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkModuleTransaction",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "bytes", internalType: "bytes" },
      { name: "", type: "uint8", internalType: "enum Enum.Operation" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "moduleTxHash", type: "bytes32", internalType: "bytes32" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkTransaction",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "bytes", internalType: "bytes" },
      { name: "", type: "uint8", internalType: "enum Enum.Operation" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address payable" },
      { name: "", type: "bytes", internalType: "bytes" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "composeMsgSender",
    inputs: [],
    outputs: [{ name: "sender", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "declarePeer",
    inputs: [{ name: "eid", type: "uint32", internalType: "uint32" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegateActivateModule",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "eids",
    inputs: [
      {
        name: "proxy",
        type: "address",
        internalType: "contract SafeProxy",
      },
    ],
    outputs: [{ name: "", type: "uint32[]", internalType: "uint32[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "endpoint",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ILayerZeroEndpointV2",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "factory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract SafeProxyFactory",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAddress",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct SafeCreationParams",
        components: [
          {
            name: "initializerHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "_singleton",
            type: "address",
            internalType: "address",
          },
          { name: "nonce", type: "uint96", internalType: "uint96" },
        ],
      },
    ],
    outputs: [{ name: "addr", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAddressOnEid",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct SafeCreationParams",
        components: [
          {
            name: "initializerHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "_singleton",
            type: "address",
            internalType: "address",
          },
          { name: "nonce", type: "uint96", internalType: "uint96" },
        ],
      },
      { name: "eid", type: "uint32", internalType: "uint32" },
    ],
    outputs: [{ name: "addr", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initDeployProxy",
    inputs: [
      { name: "_singleton", type: "address", internalType: "address" },
      { name: "_owners", type: "address[]", internalType: "address[]" },
      { name: "_threshold", type: "uint256", internalType: "uint256" },
      { name: "nonce", type: "uint96", internalType: "uint96" },
      { name: "eids", type: "uint32[]", internalType: "uint32[]" },
    ],
    outputs: [
      {
        name: "proxy",
        type: "address",
        internalType: "contract SafeProxy",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "lzReceive",
    inputs: [
      {
        name: "_origin",
        type: "tuple",
        internalType: "struct Origin",
        components: [
          { name: "srcEid", type: "uint32", internalType: "uint32" },
          { name: "sender", type: "bytes32", internalType: "bytes32" },
          { name: "nonce", type: "uint64", internalType: "uint64" },
        ],
      },
      { name: "_guid", type: "bytes32", internalType: "bytes32" },
      { name: "_message", type: "bytes", internalType: "bytes" },
      { name: "_executor", type: "address", internalType: "address" },
      { name: "_extraData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "nextNonce",
    inputs: [
      { name: "", type: "uint32", internalType: "uint32" },
      { name: "", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [{ name: "nonce", type: "uint64", internalType: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "oAppVersion",
    inputs: [],
    outputs: [
      { name: "senderVersion", type: "uint64", internalType: "uint64" },
      {
        name: "receiverVersion",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "peers",
    inputs: [{ name: "eid", type: "uint32", internalType: "uint32" }],
    outputs: [{ name: "peer", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxyCreationParams",
    inputs: [
      {
        name: "proxy",
        type: "address",
        internalType: "contract SafeProxy",
      },
    ],
    outputs: [
      {
        name: "initializerHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      { name: "_singleton", type: "address", internalType: "address" },
      { name: "nonce", type: "uint96", internalType: "uint96" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quote",
    inputs: [
      { name: "_singleton", type: "address", internalType: "address" },
      { name: "_owners", type: "address[]", internalType: "address[]" },
      { name: "_threshold", type: "uint256", internalType: "uint256" },
      { name: "nonce", type: "uint96", internalType: "uint96" },
      { name: "eids", type: "uint32[]", internalType: "uint32[]" },
    ],
    outputs: [{ name: "fees", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDelegate",
    inputs: [{ name: "_delegate", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPeer",
    inputs: [
      { name: "_eid", type: "uint32", internalType: "uint32" },
      { name: "_peer", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOwnersBatch",
    inputs: [
      {
        name: "newOwners",
        type: "address[]",
        internalType: "address[]",
      },
      { name: "threshold", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Debit",
    inputs: [
      {
        name: "eoa",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmitNewState",
    inputs: [
      {
        name: "topLevel",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "owners",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "threshold",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Fund",
    inputs: [
      {
        name: "eoa",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PeerSet",
    inputs: [
      {
        name: "eid",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "peer",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SyncSafeCreated",
    inputs: [
      {
        name: "proxyAddress",
        type: "address",
        indexed: false,
        internalType: "contract SafeProxy",
      },
      {
        name: "params",
        type: "tuple",
        indexed: false,
        internalType: "struct ISyncSafeModule.SyncSafeParams",
        components: [
          {
            name: "initBytecodeHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          { name: "eids", type: "uint32[]", internalType: "uint32[]" },
          {
            name: "creationParams",
            type: "tuple",
            internalType: "struct SafeCreationParams",
            components: [
              {
                name: "initializerHash",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "_singleton",
                type: "address",
                internalType: "address",
              },
              { name: "nonce", type: "uint96", internalType: "uint96" },
            ],
          },
        ],
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "InvalidDelegate", inputs: [] },
  { type: "error", name: "InvalidEndpointCall", inputs: [] },
  {
    type: "error",
    name: "InvalidOptionType",
    inputs: [{ name: "optionType", type: "uint16", internalType: "uint16" }],
  },
  { type: "error", name: "LzTokenUnavailable", inputs: [] },
  {
    type: "error",
    name: "NoPeer",
    inputs: [{ name: "eid", type: "uint32", internalType: "uint32" }],
  },
  {
    type: "error",
    name: "NotEnoughNative",
    inputs: [{ name: "msgValue", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "OnlyEndpoint",
    inputs: [{ name: "addr", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OnlyPeer",
    inputs: [
      { name: "eid", type: "uint32", internalType: "uint32" },
      { name: "sender", type: "bytes32", internalType: "bytes32" },
    ],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
] as const;
