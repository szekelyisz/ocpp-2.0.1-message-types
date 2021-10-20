"use strict";
exports.__esModule = true;
exports.parseMessage = void 0;
function parseMessage(message) {
    // NOTE direct pubsub messages don't get this for some reason
    // if (
    //   message["@type"] !== "type.googleapis.com/google.pubsub.v1.PubsubMessage"
    // ) {
    //   throw new Error(`Invalid message type: ${message["@type"]}`);
    // }
    return JSON.parse(Buffer.from(message.data, "base64").toString());
}
exports.parseMessage = parseMessage;
//# sourceMappingURL=utils.js.map