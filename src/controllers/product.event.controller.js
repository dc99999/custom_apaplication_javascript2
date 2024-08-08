import { decodeToJson } from '../utils/decoder.utils.js';
import { logger } from '../utils/logger.utils.js';
import { HTTP_STATUS_RESOURCE_CREATED } from '../constants/http.status.constants.js';
import { stringify } from 'querystring';

export const eventHandler = async (request, response) => {
  // Receive the Pub/Sub message
  // const encodedMessageBody = request.body.message.data;
  // const messageBody = decodeToJson(encodedMessageBody);

  logger.info(" Event Received");
  var requestData = "Default Requst Data";
  if(request && request.body) {
   logger.info(" Message body ",request.body);
    requestData = stringify(request.body)
  }

  // if (messageBody) {
  //   const notificationType = messageBody.notificationType;
  //   const productId = messageBody.resource.id;

  //   logger.info(
  //     `sync product ${productId} with notification type ${notificationType}`
  //   );
  //  }

  // Return the response for the client
  response.status(HTTP_STATUS_RESOURCE_CREATED).send("Evebt Received   :: "+stringify(request.body));
};
