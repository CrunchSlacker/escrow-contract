import { useRouter } from "next/router";

export default function DepositorDetails() {
  const router = useRouter();
  const { depositorAddress } = router.query;

  return (
    <div>
      <h1>Depositor Details</h1>
      <p>Address: {depositorAddress}</p>
    </div>
  )
}