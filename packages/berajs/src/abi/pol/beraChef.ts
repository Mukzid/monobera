export const BERA_CHEF_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountLessThanMinIncentiveRate",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRecoverIncentiveToken",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRecoverRewardToken",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRecoverStakingToken",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositNotMultipleOfGwei",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositValueTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "DonateAmountLessThanPayoutAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error",
  },
  {
    inputs: [],
    name: "IncentiveRateTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "IndexOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "InsolventReward",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientDelegateStake",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientSelfStake",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientStake",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidActivateBoostDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBaseRate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBoostMultiplier",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCredentialsLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDropBoostDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMaxIncentiveTokensCount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMinBoostedRewardRate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPubKeyLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRewardAllocationWeights",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRewardConvexity",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRewardRate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRewardVaultAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStartBlock",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidateDefaultRewardAllocation",
    type: "error",
  },
  {
    inputs: [],
    name: "InvariantCheckFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxNumWeightsPerRewardAllocationIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "MinIncentiveRateIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotApprovedSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotBGT",
    type: "error",
  },
  {
    inputs: [],
    name: "NotBlockRewardController",
    type: "error",
  },
  {
    inputs: [],
    name: "NotDelegate",
    type: "error",
  },
  {
    inputs: [],
    name: "NotDistributor",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughBoostedBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughTime",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFactoryVault",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFeeCollector",
    type: "error",
  },
  {
    inputs: [],
    name: "NotGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotIncentiveManager",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "NotNewOperator",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOperator",
    type: "error",
  },
  {
    inputs: [],
    name: "NotRootFollower",
    type: "error",
  },
  {
    inputs: [],
    name: "NotWhitelistedVault",
    type: "error",
  },
  {
    inputs: [],
    name: "OperatorAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "PayoutAmountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RewardAllocationAlreadyQueued",
    type: "error",
  },
  {
    inputs: [],
    name: "RewardAllocationBlockDelayTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "RewardCycleNotEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "RewardsDurationIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "StakeAmountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "TimestampAlreadyProcessed",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenAlreadyWhitelistedOrLimitReached",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyWeights",
    type: "error",
  },
  {
    inputs: [],
    name: "TotalSupplyOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    inputs: [],
    name: "VaultAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawAmountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroOperatorOnFirstDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPercentageWeight",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startBlock",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "percentageNumerator",
            type: "uint96",
          },
        ],
        indexed: false,
        internalType: "struct IBeraChef.Weight[]",
        name: "weights",
        type: "tuple[]",
      },
    ],
    name: "ActivateRewardAllocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "maxNumWeightsPerRewardAllocation",
        type: "uint8",
      },
    ],
    name: "MaxNumWeightsPerRewardAllocationSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startBlock",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "percentageNumerator",
            type: "uint96",
          },
        ],
        indexed: false,
        internalType: "struct IBeraChef.Weight[]",
        name: "weights",
        type: "tuple[]",
      },
    ],
    name: "QueueRewardAllocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "rewardAllocationBlockDelay",
        type: "uint64",
      },
    ],
    name: "RewardAllocationBlockDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct IBeraChef.RewardAllocation",
        name: "rewardAllocation",
        type: "tuple",
      },
    ],
    name: "SetDefaultRewardAllocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "VaultWhitelistedStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "WhitelistedVaultMetadataUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_REWARD_ALLOCATION_BLOCK_DELAY",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
    ],
    name: "activateReadyQueuedRewardAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "beaconDepositContract",
    outputs: [
      {
        internalType: "contract IBeaconDeposit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
    ],
    name: "getActiveRewardAllocation",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBeraChef.RewardAllocation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultRewardAllocation",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBeraChef.RewardAllocation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
    ],
    name: "getQueuedRewardAllocation",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBeraChef.RewardAllocation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
    ],
    name: "getSetActiveRewardAllocation",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBeraChef.RewardAllocation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_distributor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beaconDepositContract",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_maxNumWeightsPerRewardAllocation",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "isQueuedRewardAllocationReady",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isReady",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "isWhitelistedVault",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxNumWeightsPerRewardAllocation",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "valPubkey",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "startBlock",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "percentageNumerator",
            type: "uint96",
          },
        ],
        internalType: "struct IBeraChef.Weight[]",
        name: "weights",
        type: "tuple[]",
      },
    ],
    name: "queueNewRewardAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardAllocationBlockDelay",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startBlock",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "percentageNumerator",
                type: "uint96",
              },
            ],
            internalType: "struct IBeraChef.Weight[]",
            name: "weights",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBeraChef.RewardAllocation",
        name: "ra",
        type: "tuple",
      },
    ],
    name: "setDefaultRewardAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxNumWeightsPerRewardAllocation",
        type: "uint8",
      },
    ],
    name: "setMaxNumWeightsPerRewardAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_rewardAllocationBlockDelay",
        type: "uint64",
      },
    ],
    name: "setRewardAllocationBlockDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "setVaultWhitelistedStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "updateWhitelistedVaultMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;
