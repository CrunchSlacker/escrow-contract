"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ContractDetails({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const depositor = searchParams.get("depositor");

  const [data, setData] = useState({});
  const [contract, setContract] = useState();

  useEffect(() => {
    getContractInformation();
  }, [params]);

  async function getContractInformation() {
    await fetch(`/api/find-contract?depositor=${depositor}`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      setData(responseJson);
    });
  }

  async function deleteContract() {
    await fetch("/api/delete-contract", {
      method: "POST",
      body: JSON.stringify({
        depositor,
        contractAddress: params.contractAddress,
      }),
    }).then(async (response) => {
      const responseJson = await response.json();
    });
  }

  return (
    <div className="contract-details-container">
      <h1 className="contract-details-title">Contract Details</h1>
      <p className="contract-details-text">Address: {params.contractAddress}</p>
      <p className="contract-details-text">Depositor: {depositor}</p>
      <button className="contract-details-button" onClick={() => router.back()}>
        Back
      </button>
      <button onClick={async () => await getContractInformation()}>
        Update
      </button>
      <button
        className="contract-details-button"
        onClick={async () => {
          await deleteContract();
          router.back();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ContractDetails;
