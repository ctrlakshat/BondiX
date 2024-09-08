/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "LinearCurve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinearCurve__factory>;
    getContractFactory(
      name: "PolynomialCurve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PolynomialCurve__factory>;
    getContractFactory(
      name: "FunFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunFactory__factory>;
    getContractFactory(
      name: "FunFun",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunFun__factory>;
    getContractFactory(
      name: "FunToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunToken__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "LinearCurve",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinearCurve>;
    getContractAt(
      name: "PolynomialCurve",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PolynomialCurve>;
    getContractAt(
      name: "FunFactory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FunFactory>;
    getContractAt(
      name: "FunFun",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FunFun>;
    getContractAt(
      name: "FunToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FunToken>;
    getContractAt(
      name: "TestToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "LinearCurve",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinearCurve>;
    deployContract(
      name: "PolynomialCurve",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PolynomialCurve>;
    deployContract(
      name: "FunFactory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunFactory>;
    deployContract(
      name: "FunFun",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunFun>;
    deployContract(
      name: "FunToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunToken>;
    deployContract(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TestToken>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "LinearCurve",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinearCurve>;
    deployContract(
      name: "PolynomialCurve",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PolynomialCurve>;
    deployContract(
      name: "FunFactory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunFactory>;
    deployContract(
      name: "FunFun",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunFun>;
    deployContract(
      name: "FunToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunToken>;
    deployContract(
      name: "TestToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TestToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
