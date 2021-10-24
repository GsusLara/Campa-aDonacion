import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function Chart() {
    return (
        <TradingViewWidget
                    symbol="COINBASE:BTCUSD"
                    theme={Themes.light}
                    locale="es"
                    autosize
                    withdateranges
                    timezone="US/Mountain"
                    details
                />
    )
}
