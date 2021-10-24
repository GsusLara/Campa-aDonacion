import '../styles/globals.scss'
import injectContext from "../store/appContext";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab, far)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(MyApp)
