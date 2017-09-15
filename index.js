import Y from 'yjs'

// Yjs plugins..
import yArray from 'y-array'
import yMap from 'y-map'
import yText from 'y-text'
import yXml from 'y-xml'
import yIndexedDB from 'y-indexeddb/src/y-indexeddb.js'
import yWebsocketsClient from 'y-websockets-client/src/y-websockets-client.js'

// Import plugins
Y.extend(yArray, yIndexedDB, yMap, yText, yXml, yWebsocketsClient)

Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'webmeetup',
    url: 'https://y-websockets-server-karpclbnxp.now.sh'
  },
  share: {
    xml: 'XmlFragment'
  },
  persistence: {
    name: 'indexeddb'
  },
  sourceDir: null
}).then(function (y) {
  window.y = y
  var xml = y.share.xml
  xml.bindToDom(document.body)
})
