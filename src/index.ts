import { SetupHandler } from './backend/SetupHandler';
import { MainWindow } from './gui/MainWindow';

const setupHandler = new SetupHandler('asd');

const win = new MainWindow({
	setupHandler
});
win.show();

(global as any).win = win;