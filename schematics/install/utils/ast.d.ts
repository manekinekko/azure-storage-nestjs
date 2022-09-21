import { Tree } from '@angular-devkit/schematics';
import { Schema as AzureOptions } from '../schema';
export declare function addModuleImportToRootModule(options: AzureOptions): (host: Tree, moduleName: string, src: string) => void;
export declare function addModuleImportToModule(host: Tree, modulePath: string, moduleName: string, src: string): void;
