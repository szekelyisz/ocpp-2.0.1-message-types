import { PubSubMessage, MqttMessage } from "./types";
export declare function parseMessage<OcppType>(message: PubSubMessage): MqttMessage<OcppType>;
