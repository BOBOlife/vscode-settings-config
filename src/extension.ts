import type { ExtensionContext } from "vscode";
import { commands, workspace, ConfigurationTarget, window } from "vscode";
import { vimConfig } from "./vimSettings";

export function activate(context: ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-vim-config" is now active!'
  );

  let disposable = commands.registerCommand(
    "vscode-settings-config.configActivate",
    () => {
      const config = workspace.getConfiguration();
      const vimSettings = {
        ...vimConfig,
      };

      for (const [key, value] of Object.entries(vimSettings)) {
        config.update(key, value, ConfigurationTarget.Global).then(() => {
          window.showInformationMessage(`Vim setting ${key} has been updated.`);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
