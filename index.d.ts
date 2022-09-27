declare const rtokens: {
  [tokenAddress: string]: {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logo?: string;
    about?: string;
    website?: string;
    governance?: {
      voting?: string;
      discussion?: string;
    };
    support?: {
      email?: string;
      url?: string;
    };
    social?: {
      blog?: string;
      chat?: string;
      facebook?: string;
      forum?: string;
      github?: string;
      gitter?: string;
      instagram?: string;
      linkedin?: string;
      reddit?: string;
      slack?: string;
      telegram?: string;
      twitter?: string;
      youtube?: string;
    };
  };
};
export = rtokens;
