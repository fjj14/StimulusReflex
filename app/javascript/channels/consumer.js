// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

import { createConsumer } from "@rails/actioncable"
import consumer from './consumer'
import CableReady from './cable_ready'
consumer.subscriptions.create("TimelineChannel", {
    received(data)
    {
        if (data.cableReady) CableReady.perform(data.operations)
    }
});
