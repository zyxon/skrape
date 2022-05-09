import { QAction, QMenu, QMenuBar, TouchPointState } from '@nodegui/nodegui';

type MainMenuOptions = {
	callbacks: {
		newSetupCallback: () => void,
		exitCallback: () => void	
	}
}

export class MainMenuBar extends QMenuBar {
	private options: MainMenuOptions;
	private fileMenu: QMenu;

	constructor(options: MainMenuOptions) {
		super();

		this.options = options;
		this.fileMenu = this.makeFileMenu();
	
		this.addMenu(this.fileMenu);
	}

	makeFileMenu() {
		const fileMenu = new QMenu();
		fileMenu.setTitle('File');

		const newSetupAction = new QAction();
		newSetupAction.setText('New Setup...');
		newSetupAction.addEventListener('triggered', () => this.options.callbacks.newSetupCallback());

		fileMenu.addAction(newSetupAction);
		fileMenu.addSeparator();

		const exitAction = new QAction();
		exitAction.setText('Exit');
		exitAction.addEventListener('triggered', () => this.options.callbacks.exitCallback());

		fileMenu.addAction(exitAction);

		return fileMenu;
	}
}