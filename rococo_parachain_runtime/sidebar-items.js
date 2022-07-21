initSidebarItems({"constant":[["DAYS",""],["EPOCH_DURATION_IN_BLOCKS",""],["HOURS",""],["MICROROC",""],["MILLIROC",""],["MILLISECS_PER_BLOCK",""],["MINUTES",""],["PRIMARY_PROBABILITY",""],["ROC",""],["SLOT_DURATION",""],["VERSION","This runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_SECOND",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Call",""],["DispatchClass","A generalized group of dispatch types."],["Event",""],["Everything","A [`Contains`] implementation that contains every value."],["OriginCaller",""],["TimestampCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"macro":[["construct_runtime","Construct a runtime, with the given name and the given pallets."],["match_types","Create a type which implements the `Contains` trait for a particular type with syntax similar to `matches!`."],["parameter_types","Create new implementations of the `Get` trait."]],"mod":[["api",""]],"struct":[["Ancestry",""],["ApprovalDeposit",""],["AssetAccountDeposit",""],["AssetDeposit",""],["AssetsStringLimit",""],["BlockExecutionWeight","Time to execute an empty block. Calculated by multiplying the Average with `1` and adding `0`."],["BlockHashCount",""],["CheckingAccount",""],["ConstantMultiplier","Implementor of [`WeightToFee`] that uses a constant multiplier."],["CreationFee",""],["EitherOfDiverse","“OR gate” implementation of `EnsureOrigin` allowing for different `Success` types for `L` and `R`, with them combined using an `Either` type."],["ExistentialDeposit",""],["ExtrinsicBaseWeight","Time to execute a NO-OP extrinsic, for example `System::remark`. Calculated by multiplying the Average with `1` and adding `0`."],["GenesisConfig",""],["IdentityFee","Implementor of `WeightToFee` that maps one unit of weight to one unit of fee."],["IsInVec","Trivial utility for implementing `Contains`/`OrderedMembership` with a `Vec`."],["MaxAuthorities",""],["MaxInstructions",""],["MaxLocks",""],["MaxReserves",""],["MetadataDepositBase",""],["MetadataDepositPerByte",""],["MinimumPeriod",""],["OperationalFeeMultiplier",""],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParentOrParentsUnitPlurality",""],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Permill","A fixed point representation of a number in the range [0, 1]."],["RelayChainOrigin",""],["RemoveCollectiveFlip",""],["ReservedDmpWeight",""],["ReservedXcmpWeight",""],["RocLocation",""],["RocksDbWeight","By default, Substrate uses RocksDB, so this will be the weight used throughout the runtime."],["RococoNetwork",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SS58Prefix",""],["SessionKeys",""],["Statemint",""],["StatemintAssetsPalletLocation",""],["StatemintLocation",""],["TransactionByteFee",""],["TransferFee",""],["UnitBody",""],["UnitWeightCost",""],["Version",""],["WeightPrice",""],["XcmConfig",""]],"trait":[["BuildStorage","Complex storage builder stuff."],["Randomness","A trait that is able to provide randomness."],["StorageValue","A trait for working with macro-generated storage values under the substrate storage API."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AdminOrigin","A majority of the Unit body from Rococo over XCM is our required administration origin."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["AssetTransactors","Means for transacting assets on this chain."],["Assets",""],["Aura",""],["AuraConfig",""],["AuraExt",""],["AuraExtConfig",""],["AuraId","An Aura authority identifier using S/R 25519 as its crypto."],["Balance","Balance of an account."],["Balances",""],["BalancesConfig",""],["Barrier",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["CumulusXcm",""],["CurrencyTransactor","Means for transacting assets on this chain."],["DmpQueue",""],["Executive","Executive: handles dispatch to the various modules."],["FungiblesTransactor","Means for transacting assets besides the native currency on this chain."],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Index","Index of a transaction in the chain."],["LocalOriginToLocation","Local origins on this chain are allowed to dispatch XCM sends/executions."],["LocationToAccountId","Type for specifying how a `MultiLocation` can be converted into an `AccountId`. This is used when determining ownership of accounts for asset transacting and when attempting to use XCM `Transact` in order to determine the dispatch Origin."],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["ParachainSystemConfig",""],["PolkadotXcm",""],["PolkadotXcmConfig",""],["Reserves",""],["SessionHandlers",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["Spambot",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Weight","Numeric range of a transaction weight."],["XcmOriginToTransactDispatchOrigin","This is the type we use to convert an (incoming) XCM origin into a local `Origin` instance, ready for dispatching a transaction with Xcm’s `Transact`. There is an `OriginKind` which can biases the kind of local `Origin` it will become."],["XcmRouter","The means for routing XCM messages which are not for local execution into the right message queues."],["XcmpQueue",""]]});