import ingles from "./ingles"
import español from "./español"
import frances from "./frances"
import hindi from "./hindi"
import chino from "./chino"
import arabe from "./arabe"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			diccionario: español,
			idiomaActual: true,
		},
		actions: {
			lenguaje: idioma => {
				switch (idioma) {
				  case "en":
					setStore({ diccionario: ingles });
					break;
				  case "es":
					setStore({ diccionario: español });
					break;
				  case "fr":
					setStore({ diccionario: frances });
					break;
				  case "ar":
					setStore({ diccionario: arabe });
					break;
					case "zh":
					setStore({ diccionario: chino });
					break;
					case "hi":
					setStore({ diccionario: hindi });
					break;
				  default:
					setStore({ diccionario: ingles });
					break;
				}
			  }
		}
	};
};

export default getState;
