function pushdot(ctx) {
	/***************************************************************** */
	/*

	ctx contient:
	- nbIterationJDD qui est un entier donnant le nombre d'itération de remplissage de la liste de caractères (10 caractéres à chaque itération)
	- charlist qui est la liste générée, elle contient l'itération suivante: abcd.....k
	
	TON CODE ICI
	
	*/
	/***************************************************************** */
}

(() => {
	/** Context à changer pour les perfs */
	var context = { nbIterationJDD: 10, charlist: [] };

	for (var a = 0; a < context.nbIterationJDD; a++) {
		context.charlist.push('a');
		context.charlist.push('b');
		context.charlist.push('c');
		context.charlist.push('d');
		context.charlist.push('.');
		context.charlist.push('.');
		context.charlist.push('.');
		context.charlist.push('.');
		context.charlist.push('.');
		context.charlist.push('k');
	}
	let departLength = context.charlist.length;
	console.log('\033[2J');
	console.log('\x1b[36m%s\x1b[0m', `> Nombre de caractères au départ: ${departLength}`);
	console.log('');

	if (context.nbIterationJDD < 1000) {
		console.log('\x1b[36m%s\x1b[0m', `> Liste avant traitement :`);
		for (var i = 0; i < context.charlist.length; i++) {
			process.stdout.write(context.charlist[i]);
		}
	}
	console.log('');
	var start = Date.now();

	pushdot(context);

	var end = Date.now();
	console.log('');
	console.log('\x1b[33m%s\x1b[0m', `> Temps d'execution : ${end - start} ms`);
	console.log('\x1b[32m%s\x1b[0m', `> La liste après traitement contient ${context.charlist.length} éléments.`);
	console.log('');

	if (context.charlist[context.charlist.length - 1] == 'k') {
		console.log('\x1b[41m\x1b[30m%s\x1b[0m', `> La liste n'est pas triée, tous les points ne sont pas à la fin !`);
		console.log('');
	}
	if (context.charlist.length < departLength) {
		console.log('\x1b[41m\x1b[30m%s\x1b[0m', `> La liste n'est pas complète !`);
		console.log('');
	}
	if (context.nbIterationJDD < 1000) {
		console.log('\x1b[42m\x1b[30m\x1b[4m%s\x1b[0m', `> Liste après traitement :`);
		for (var i = 0; i < context.charlist.length; i++) {
			process.stdout.write(context.charlist[i]);
		}
		console.log('');
	}
})();
