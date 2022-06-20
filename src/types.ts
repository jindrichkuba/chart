export enum SortOrderEnum {
    desc = 'desc',
    asc = 'asc',
}

export enum SortTypeEnum {
    tvlStaked = 'tvlStaked'
}

export interface TvlStakedHistory {
  date: string;
  value: number;
}

export interface SelectedFarm {
  _locks: string[];
  active: boolean;
  blockchain: string;
  dateAdded: Date;
  dateUpdated: Date;
  farmId: string;
  farmName: string;
  farmType: string;
  lastFullUpdate: Date;
  riskLevel: string;
  scam: boolean;
  scamInfo: string;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlStaked: number;
  tvlStakedHistory: TvlStakedHistory[];
}

export interface TokenAHoldersHistory {
  date: string;
  value: number;
}

export interface TokenAPriceHistory {
  date: string;
  value: number;
}

export interface DataObject {
  active: boolean;
  antiWhale?: any;
  aprDaily: number;
  aprWeekly: number;
  aprYearly: number;
  apyYearly: number;
  asset: string;
  assetAddress?: any;
  assetId: string;
  assetLockup: boolean;
  assetPopupMessage?: any;
  assetPrice: number;
  auditInfo: string;
  blockchain: string;
  category?: any;
  collateralLockPeriod?: any;
  d_active_reason?: any;
  dateAdded: Date;
  dateEnding?: any;
  dateStarted?: any;
  dateUpdated: Date;
  daysRemaining?: any;
  depositFee?: any;
  exchangeName?: any;
  exchangePicture?: any;
  exchangeUrl?: any;
  exchangeVersion?: any;
  farm: string;
  farmId: string;
  farmImage?: any;
  farmName: string;
  farmType?: any;
  feeAprYearly: number;
  harvestLockup?: any;
  harvestLockupInfo?: any;
  impermanentLoss?: any;
  impermanentLoss30d?: any;
  info?: any;
  investmentLink?: any;
  manuallyCalculatedAPR: boolean;
  maxPoolCap?: any;
  multiplier?: any;
  nativeToken?: any;
  nativeTokenAddress?: any;
  nativeTokenInvestLink?: any;
  nativeTokenMarketCap: number;
  nativeTokenPrice: number;
  new_asset: boolean;
  otherFees?: any;
  otherPoolEconomicsInfo?: any;
  pid: number;
  poolAlreadyFilled: boolean;
  priceCorrelation_30d?: any;
  rewardTokenA?: any;
  rewardTokenAAddress?: any;
  rewardTokenAAprYearly: number;
  rewardTokenAAprYearlyMaxBoosted: number;
  rewardTokenAPrice: number;
  rewardTokenAWeeklyAmount: number;
  rewardTokenAWeeklyDollarAmount: number;
  rewardTokenB?: any;
  rewardTokenBAddress?: any;
  rewardTokenBAprYearly: number;
  rewardTokenBAprYearlyMaxBoosted: number;
  rewardTokenBPrice: number;
  rewardTokenBWeeklyAmount: number;
  rewardTokenBWeeklyDollarAmount: number;
  scam: boolean;
  scamInfo?: any;
  selected_farm: SelectedFarm[];
  stakingAddress?: any;
  stakingLink: string;
  status: string;
  tokenA?: any;
  tokenAAddress?: any;
  tokenABacking: number;
  tokenAHolders: number;
  tokenAHoldersHistory: TokenAHoldersHistory[];
  tokenAPicture?: any;
  tokenAPrice: number;
  tokenAPriceHistory: TokenAPriceHistory[];
  tokenB?: any;
  tokenBAddress?: any;
  tokenBBacking: number;
  tokenBHolders: number;
  tokenBPicture?: any;
  tokenBPrice: number;
  tokenC?: any;
  tokenCAddress?: any;
  tokenCBacking: number;
  tokenCHolders: number;
  tokenCPicture?: any;
  tokenCPrice: number;
  tokenD?: any;
  tokenDAddress?: any;
  tokenDBacking: number;
  tokenDHolders: number;
  tokenDPicture?: any;
  tokenDPrice: number;
  tokenE?: any;
  tokenEAddress?: any;
  tokenEBacking: number;
  tokenEHolders: number;
  tokenEPicture?: any;
  tokenEPrice: number;
  transferTax?: any;
  transferTaxInfo?: any;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlExchange: number;
  tvlFarm: number;
  tvlStaked: number;
  underlyingFarm?: any;
  url?: any;
  vaultAddress?: any;
  volume_24h?: any;
  weight?: any;
  withdrawalFee?: any;
  yearlyTokenRewardPool: number;
  yieldType: string;
}

export interface DataTypes {
    data: DataObject[];
    max_pages: number;
}

