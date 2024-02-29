import * as vscode from "vscode";
import { stringToUint8Array } from "./util";

export namespace Create {
  export function createMiniPage(pageName: string, uri: string, template: Object) {
    let pagePath = `${uri}/${pageName}`;

    createDirectory(vscode.Uri.file(pagePath)).then(() => {
      try {
        for (const [key, value] of Object.entries(template)) {
          let filePath = vscode.Uri.file(`${pagePath}/index${key}`);
          createFile(filePath, value);
          vscode.window.showInformationMessage("创建页面成功");
        }
      } catch (error) {
        vscode.window.showErrorMessage("创建页面失败");
      }
    });
  }

  export function createDirectory(pageUri: vscode.Uri): Thenable<void> {
    return vscode.workspace.fs.createDirectory(pageUri);
  }

  export function createFile(fileUri: vscode.Uri, content: string): Thenable<void> {
    let bytes = stringToUint8Array(content);
    let createFile = vscode.workspace.fs.writeFile(fileUri, bytes);
    return createFile;
  }
}
