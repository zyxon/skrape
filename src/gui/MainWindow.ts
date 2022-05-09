import { QMainWindow, QWidget } from '@nodegui/nodegui';
import { SetupHandler } from '../backend/SetupHandler';
import { MainMenuBar } from './menu/MainMenuBar';

type MainWindowOptions = {
	setupHandler: SetupHandler;
}

export class MainWindow extends QMainWindow {
	private setupHandler: SetupHandler;

	private mainMenuBar: MainMenuBar;
	private __centralWidget: QWidget;

	constructor(options: MainWindowOptions) {
		super();

		this.setupHandler = options.setupHandler;

		this.mainMenuBar = new MainMenuBar({
			callbacks: {
				newSetupCallback: () => console.log('new setup'),
				exitCallback: () => console.log('exit')
			}
		});

		this.setMenuBar(this.mainMenuBar);

		this.__centralWidget = new QWidget();
		this.setCentralWidget(this.__centralWidget); 
	}
}