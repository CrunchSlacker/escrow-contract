import React from "react";
import { useRouter } from "next/navigation";

const ContractList = ({ contracts, depositor }) => {
  const router = useRouter();

  return (
    <div className="contract-list-container">
      <h2 className="contract-list-title">Existing Contracts</h2>
      <ul>
        {contracts &&
          contracts.map((contractInformation, index) => (
            <li
              className="contract-list-item"
              onClick={() =>
                router.push(
                  `/dapp/contract/${contractInformation.contract.target}?depositor=${depositor}`
                )
              }
              key={index}
            >
              {contractInformation.contract.target}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContractList;
