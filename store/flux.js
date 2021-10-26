import ingles from "./ingles"
import español from "./español"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			diccionario:ingles,
			idiomaActual:true,
		},
		actions: {
			lenguaje: item => {
				if (item == true){
					setStore({ diccionario: ingles });
					setStore({ idiomaActual: item });
				}else{
					setStore({ diccionario: español });
					setStore({ idiomaActual: item });
				}
			}
		}
	};
};

export default getState;
