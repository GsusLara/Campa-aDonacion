import BtcPay from "../components/btcPay";
import Layout from "../components/layout"

export default function Donar() {
  return (
    <Layout>
      <div className="container donarBox d-flex align-items-center">
        <BtcPay />
      </div>
    </Layout>
  );
}
