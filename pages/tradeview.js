import Layout from "../components/layout";
import dynamic from 'next/dynamic'

export default function Tradeview() {
    const Chart = dynamic(import('../components/chart'), { ssr: false })
    return (
        <Layout>
            <div className="grafico">
                <Chart />
            </div>
        </Layout>
    )
}
