function generateJson() {
	const name = document.getElementById('name').value;
	const description = document.getElementById('description').value;
	const version = document.getElementById('version').value;

	const manifestJson = {
		name: name,
		description: description,
		minecraft: {
			version: version,
			modLoaders: [{
				id: `forge-${version}-`,
				primary: true
			}]
		}
	};

	document.getElementById('jsonOutput').value = JSON.stringify(manifestJson, null, 2);
}