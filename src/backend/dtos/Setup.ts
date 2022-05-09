import { randomUUID } from 'crypto';
import { BackendError } from '../errors/BackendError';
import { Source } from './Source';

export class Setup {
	private sources: Map<string, Source>;

	constructor () {
		this.sources = new Map();
	}

	addSource(source: Source, id?: string) {
		if (!id) {
			id = randomUUID();
		}
		if (this.sources.has(id)) {
			throw new BackendError();
		}

		this.sources.set(id, source);
	}

	load(object: any) {
		if ('sources' in object && Array.isArray(object.sources)) {
			for (const source of object.sources) {
				if (Source.isSource(source)) {
					this.addSource(new Source({
						name: source.name,
						selector: source.selector
					}));
				}
			}
		}
	}
}