import Y from 'yjs'

import yArray from 'y-array'
import yMap from 'y-map'
import yText from 'y-text'
import yXml from 'y-xml'
import yIndexedDB from 'y-indexeddb/src/y-indexeddb.js'
import yWebsocketsClient from 'y-websockets-client/src/y-websockets-client.js'

Y.extend(yArray, yIndexedDB, yMap, yText, yXml, yWebsocketsClient)

Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'webmeetup-debug',
    url: 'https://y-websockets-server-karpclbnxp.now.sh'
  },
  share: {
  },
  sourceDir: null
}).then(function (y) {
  window.y = y
  // bind the textarea to a shared text element
  y.share.textarea.bind(document.getElementById('textfield'))
})
