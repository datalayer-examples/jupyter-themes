import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @datalayer/jupyter-theme-christmas extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@datalayer/jupyter-theme-christmas',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab plugin @datalayer/jupyter-theme-christmas:plugin is activated.');
    const style = '@datalayer/jupyter-theme-christmas/index.css';
    manager.register({
      name: 'JupyterLab Christmas',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
