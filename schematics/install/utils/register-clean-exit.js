"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerOnExit = void 0;
process.stdin.resume();
function registerOnExit() {
    function exitHandler(options, exitCode) {
        if (options.cleanup) {
        }
        if (exitCode || exitCode === 0) {
        }
        if (options.exit) {
            process.exit();
        }
    }
    process.on('exit', exitHandler.bind(null, { cleanup: true }));
    process.on('SIGINT', exitHandler.bind(null, { exit: true }));
    process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
    process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
    process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
}
exports.registerOnExit = registerOnExit;
