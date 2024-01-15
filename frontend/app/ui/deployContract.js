import React, { useState } from "react";

const DeployContractForm = ({ escrow, onDeployed }) => {
  const [arbiter, setArbiter] = useState("");
  const [beneficiary, setBeneficiary] = useState("");

  const handleDeployContract = async () => {
    await escrow.deployContract(beneficiary, arbiter).then((contract) => {
      onDeployed(contract, arbiter, beneficiary);
    }).catch((error) => console.log(error));
  };

  return (
    <div className="deploy-form-container">
    <label className="deploy-form-label">Arbiter:</label>
    <input
        className="deploy-form-input"
        type="text"
        value={arbiter}
        onChange={(e) => setArbiter(e.target.value)}
    />
    <label className="deploy-form-label">Beneficiary:</label>
    <input
        className="deploy-form-input"
        type="text"
        value={beneficiary}
        onChange={(e) => setBeneficiary(e.target.value)}
    />
    <button className="deploy-form-button" onClick={handleDeployContract}>
        Deploy Contract
    </button>
</div>
  );
};

export default DeployContractForm;
