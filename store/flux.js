import ingles from "./ingles"
import español from "./español"
import frances from "./frances"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			diccionario: español,
			idiomaActual: true,
		},
		actions: {
			lenguaje: idioma => {
				if (idioma == "en") {
					setStore({ diccionario: ingles });
				} else if(idioma =="es"){
					setStore({ diccionario: español });
				}else{
					setStore({ diccionario: frances });
				}
			}
		}
	};
};

export default getState;
