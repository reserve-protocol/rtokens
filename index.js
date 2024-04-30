const chainId = {
  mainnet: 1,
  base: 8453,
  arbitrum: 42161,
};

module.exports = {
  [chainId.mainnet]: require("./rtokens/mainnet-rtoken-map.json"),
  [chainId.base]: require("./rtokens/base-rtoken-map.json"),
  [chainId.arbitrum]: require("./rtokens/arbitrum-rtoken-map.json"),
};
