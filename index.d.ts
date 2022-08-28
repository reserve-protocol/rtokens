declare const rtokens: {
  [chainId: number]: {
    [tokenAddress: string]: {
      address: string;
      name: string;
      symbol: string;
      decimals: number;
      logo: string;
      website?: string;
      repository?: string;
      about?: string;
    };
  };
};
export = rtokens;
