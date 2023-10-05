const chainId = {
  mainnet: 1,
  base: 8453,
};

module.exports = {
  [chainId.mainnet]: require("./rtokens/mainnet-rtoken-map.json"),
  [chainId.base]: require("./rtokens/base-rtoken-map.json"),
};
