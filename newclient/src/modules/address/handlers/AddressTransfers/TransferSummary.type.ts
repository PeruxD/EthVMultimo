/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TransferSummary
// ====================================================

export interface TransferSummary {
  __typename: "Transfer";
  transactionHash: string;
  block: number;
  timestamp: number;
  from: string;
  to: string;
  txFee: string;
  status: boolean | null;
}
