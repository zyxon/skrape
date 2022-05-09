type SourceOptions = {
	name: string,
	selector: string;
}

export class Source {
	private _name: string;
	private _selector: string;

	constructor(options: SourceOptions) {
		this._name = options.name;
		this._selector = options.selector;
	}

	get name() {
		return this._name;
	}

	get selector() {
		return this._selector;
	}

	static isSource(json: any): json is Source {
		return 'name' in json && typeof json.name === 'string' &&
			'selector' in json && typeof json.selector === 'string';
	}
}