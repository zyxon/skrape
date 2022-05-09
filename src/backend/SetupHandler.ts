import fs from 'fs-extra';
import { Setup } from './dtos/Setup';
import { ParseError } from './errors/ParseError';
import { PathDoesNotExistError } from './errors/PathDoesNotExistError';

export class SetupHandler {
	private path: string;
	private setup: Setup | null;

	constructor(path: string) {
		this.path = path;
		this.setup = null;
	}

	get initialized() {
		return this.setup !== null;
	}

	create() {
		this.setup = new Setup();
	}

	async load(): Promise<Setup> {
		if (!await fs.pathExists(this.path)) {
			throw new PathDoesNotExistError('Setup file path does not exist');
		}
		const json = await fs.readJSON(this.path);
		
		const setup = new Setup();
		setup.load(json);
		this.setup = setup;
		
		return json;
	}
}