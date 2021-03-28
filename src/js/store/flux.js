const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			loadData: () => {
				const URL = "https://swapi.dev/api/";

				async function fnPeopleList() {
					const result = await fetch(URL + "people/")
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore(err => console.error(err));
						})
						.catch(err => console.error(err));
				}

				async function fnPlanetList() {
					const result = await fetch(URL + "planets/")
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(resp => {
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ planets: newData });
						})
						.catch(err => console.err(err));
				}
				fnPeopleList();
				fnPLanetsList();
			},

			changeFavoritePeople: PersonID => {
			
				const store = getStore();
				
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
			},
			changeFavoritePlanet: PlanetID => {
				const store = getStore();

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
			}
		}
	};
};

export default getState;
