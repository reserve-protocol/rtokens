# RToken list

List of supported RTokens for Register

## Fields

### Mandatory

- `symbol`: Short ticker style symbol of token.
- `name`: Longer human version of token.
- `address`: Ethereum address of ERC-20 token, in [ERC-55](https://eips.ethereum.org/EIPS/eip-55) mixed-case format.
- `decimals`: The decimals of the token. As Number and not String.

### Optional (Recommended for optimal Register support)

- `logo`: An optional logo of your token. Must be an `svg` added to the `images` folder, example: `rsv.svg`.
- `governance`: A mapping that contains the `voting` and `discussion` urls related to governance.
- `website`: Official URL of the website.
- `about`: Short description of the rToken, displayed on the Register overview page.
- `social`: Social urls like github, twitter, telegram of the rToken project.

Full list of fields with specific schema [here](https://github.com/lc-labs/rtokens/blob/master/index.d.ts)

## Submission Process

1. Fork this repository.
2. Add your logo image in a `svg` format to the `images` folder.
3. Add an entry to the `rtoken-map.json` file with the specified address as the key, and the mandatory/optional fields as the value.

Criteria:

- The address should be in checksum format or it will not be accepted.
- The RToken should have governance
- PR should include link to official project website referencing the suggested address.
- PR should include token logo.
