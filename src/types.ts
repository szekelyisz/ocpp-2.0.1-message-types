export interface PubSubMessageAttributes {
  deviceId: string;
  deviceNumId: string;
  deviceRegistryId: string;
  deviceRegistryLocation: string;
  projectId: string;
  subFolder: string;
}

export interface PubSubMessage {
  attributes?: PubSubMessageAttributes;
  data: string;
}

export interface MqttMessage<OcppType> {
  messageId: string;
  ocppMessage: OcppType;
}
