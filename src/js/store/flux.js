const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [], 
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: (name) => {
				const store = getStore(); 
				setStore({favorites:[...store.favorites, name]}); 
				console.log(store)
				return store; 
			}, 

			deleteFavorites: (index) => {
				const store = getStore(); 
				setStore({favorites: [...store.favorites.filter((elem, id) => id !== index)]}); 
				console.log(store); 
				return store; 
			}
		}
	};
};

export default getState;
