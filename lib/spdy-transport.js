'use strict'

var transport = exports

// Exports utils
transport.utils = require('./itt-spdy-transport/utils')

// Export parser&framer
transport.protocol = {}
transport.protocol.base = require('./itt-spdy-transport/protocol/base')
transport.protocol.spdy = require('./itt-spdy-transport/protocol/spdy')
transport.protocol.http2 = require('./itt-spdy-transport/protocol/http2')

// Window
transport.Window = require('./itt-spdy-transport/window')

// Priority Tree
transport.Priority = require('./itt-spdy-transport/priority')

// Export Connection and Stream
transport.Stream = require('./itt-spdy-transport/stream').Stream
transport.Connection = require('./itt-spdy-transport/connection').Connection

// Just for `transport.connection.create()`
transport.connection = transport.Connection
