# FlareSwap Coins Test

This project contains test tokens for the FlareSwap platform, designed specifically for testnet environments. It includes mock versions of USDT and USDC, as well as the FlareSwap token.

**Note:** These tokens are for testing purposes only. In production, FlareSwap will integrate with existing real tokens (USDT, USDC, etc.), and the FlareSwap token will be implemented based on specific business requirements.

## Contracts

### 1. testUSDT

A mock implementation of the USDT token for testnet use.

- **Purpose:** Simulate USDT transactions and interactions within the FlareSwap ecosystem.
- **Total Supply:** 100.000.000 - [Total supply for testing]
- **Decimals:** 6 (to match real USDT)

### 2. testUSDC

A mock implementation of the USDC token for testnet use.

- **Purpose:** Simulate USDC transactions and interactions within the FlareSwap ecosystem.
- **Total Supply:** 100.000.000 - [Total supply for testing]
- **Decimals:** 6 (to match real USDC)

### 3. FlareSwap Token

A test implementation of the FlareSwap platform token for testnet use.

- **Purpose:** Represent the native token of the FlareSwap platform in testnet environments.
- **Total Supply:** 100.000.000 - [Total supply for testing]
- **Decimals:** 18

## Usage

These test tokens are intended for developers to:

1. Test token swaps and liquidity provision on the FlareSwap platform.
2. Simulate various trading scenarios and edge cases.
3. Develop and test integrations with the FlareSwap ecosystem.

## Important Notes

- These contracts are NOT meant for production use.
- The testUSDT and testUSDC contracts do not represent real assets and have no monetary value.
- The FlareSwap token in this test environment may differ from the final implementation in production.

## Development

Deploy on coston and coston2 for first version testnet.

## Contributing

FlareSwap IT team.