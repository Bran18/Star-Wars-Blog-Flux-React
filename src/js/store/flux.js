const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			
			loadData: () => {
				let URL = "https://www.swapi.tech/api/";

				async function fnPeopleList() {
					const result = await fetch(URL + "people/")
					
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							//console.log(response);
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ people: newData });
						})
						.catch(err => console.error(err));
				}

				async function fnPLanetsList() {
					const result = await fetch(URL + "people/")
					
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							//console.log(response);
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ planets: newData });
						})
						.catch(err => console.error(err));
					// const newData = result.map(item => ({ ...item, favorite: false }));
					// setStore({ planets: newData });
				}

				fnPeopleList();
				fnPLanetsList();
			},
			changeFavoritePlanet: PlanetID => {
				// 	//get the store
				const store = getStore();
				//console.log(PlanetID);
				const newData = store.planets.map(item => {
					if (item.uid === PlanetID) {
						if (item.favorite) {
							item.favorite = false;
						} else {
							item.favorite = true;
						}
						return item;
					} else {
						return item;
					}
				});

				setStore({ planets: newData });
			},
			changeFavoritePeople: PersonID => {
				// 	//get the store
				const store = getStore();
				//console.log(PersonID);
				const newData = store.people.map(item => {
					if (item.uid === PersonID) {
						if (item.favorite) {
							item.favorite = false;
						} else {
							item.favorite = true;
						}
						return item;
					} else {
						return item;
					}
				});

				setStore({ people: newData });
			}

			
		}
	};
};

export default getState;