import { useContext } from "react"
import { Context } from "../../store/appContext";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function Chart() {
    const { store } = useContext(Context);
    return (
        <TradingViewWidget
            symbol="COINBASE:BTCUSD"
            theme={Themes.light}
            locale={store.idiomaActual ? "en" : "es"}
            autosize
            withdateranges
            timezone="US/Mountain"
            details
        />
    )
}
